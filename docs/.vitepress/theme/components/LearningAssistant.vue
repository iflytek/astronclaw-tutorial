<template>
  <div class="learning-assistant">
    <div v-if="isOpen" class="chat-window">
      <div class="chat-header">
        <span>学习助手 (Learning Assistant)</span>
        <button @click="toggleChat" class="close-btn">×</button>
      </div>
      <div class="chat-messages" ref="messagesContainer">
        <div v-for="(msg, index) in messages" :key="index" :class="['message', msg.role]">
          <div class="message-content">{{ msg.content }}</div>
        </div>
        <div v-if="isLoading" class="message assistant">
          <div class="message-content loading">...</div>
        </div>
      </div>
      <div class="chat-input">
        <input 
          v-model="inputText" 
          @keyup.enter="sendMessage" 
          placeholder="你想了解什么工具？..." 
          :disabled="isLoading"
        />
        <button @click="sendMessage" :disabled="isLoading || !inputText.trim()">发送</button>
      </div>
    </div>
    <div v-else class="chat-toggle" @click="toggleChat">
      🤖
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted } from 'vue'

const isOpen = ref(false)
const isLoading = ref(false)
const inputText = ref('')
const messagesContainer = ref(null)

const messages = ref([
  {
    role: 'assistant',
    content: '你好！我是你的学习助手。请问你有什么需求？希望使用哪款工具（AstronClaw 或 Loomy）？我会为你推荐并引导你进行下一步操作。'
  }
])

let docsIndex = []

onMounted(async () => {
  scrollToBottom()
  try {
    const res = await fetch('/docs-index.json')
    if (res.ok) {
      docsIndex = await res.json()
    }
  } catch (e) {
    console.error('Failed to load docs index', e)
  }
})

const toggleChat = () => {
  isOpen.value = !isOpen.value
}

const scrollToBottom = async () => {
  await nextTick()
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

function searchDocs(query) {
  if (!docsIndex.length) return ''
  const keywords = query.toLowerCase().match(/[a-z0-9]+|[\u4e00-\u9fa5]/g) || []
  if (!keywords.length) return ''

  const results = docsIndex.map(doc => {
    let score = 0
    const text = (doc.heading + ' ' + doc.content).toLowerCase()
    
    if (text.includes(query.toLowerCase())) {
        score += 50
    }

    for(let i=0; i<keywords.length; i++) {
        if(text.includes(keywords[i])) score += 1
        if(i < keywords.length - 1) {
            const bigram = keywords[i] + keywords[i+1]
            if(text.includes(bigram)) score += 5
        }
        if(i < keywords.length - 2) {
            const trigram = keywords[i] + keywords[i+1] + keywords[i+2]
            if(text.includes(trigram)) score += 10
        }
    }

    if (doc.heading.toLowerCase().includes(query.toLowerCase())) score += 30

    return { ...doc, score }
  }).filter(doc => doc.score > 5).sort((a, b) => b.score - a.score).slice(0, 3)

  if (results.length === 0) return ''

  return '\n\n【知识库参考信息】\n' + results.map(r => `章节: ${r.heading}\n内容: ${r.content}`).join('\n\n')
}

const sendMessage = async () => {
  const text = inputText.value.trim()
  if (!text || isLoading.value) return

  messages.value.push({ role: 'user', content: text })
  inputText.value = ''
  isLoading.value = true
  scrollToBottom()

  const context = searchDocs(text)
  const systemPrompt = `你是一个项目学习助手，你的任务是提问用户有什么需求/希望使用哪款工具（AstronClaw 或 Loomy）并进行推荐，永远引导用户进行下一步操作。请保持回答简短友好。请务必基于【知识库参考信息】中的内容来回答用户的问题（如果存在）。\n${context}`

  try {
      // Use the local Vercel serverless function endpoint instead of Railway
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      body: JSON.stringify({
        model: 'astron-code-latest',
        messages: [
          {
            role: 'system',
            content: systemPrompt
          },
          ...messages.value.filter(m => m.role !== 'assistant' || (m.content !== '抱歉，我遇到了一些问题，请稍后再试。' && !m.content.startsWith('请求失败:'))).map(m => ({ role: m.role, content: m.content }))
        ]
      })
    })

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`API error: ${response.status} ${errText}`);
    }

    const data = await response.json()
    if (data.choices && data.choices.length > 0) {
      messages.value.push({
        role: 'assistant',
        content: data.choices[0].message.content
      })
    } else {
      messages.value.push({ role: 'assistant', content: '抱歉，我遇到了一些问题，请稍后再试。' })
    }
  } catch (error) {
    console.error('Error calling AI:', error)
    messages.value.push({ role: 'assistant', content: `请求失败: ${error.message}` })
  } finally {
    isLoading.value = false
    scrollToBottom()
  }
}
</script>

<style scoped>
.learning-assistant {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 1000;
  font-family: var(--vp-font-family-base);
}

.chat-toggle {
  width: 60px;
  height: 60px;
  background-color: var(--vp-c-brand-1);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  cursor: pointer;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s, box-shadow 0.3s;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(var(--vp-c-brand-1-rgb), 0.7);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(var(--vp-c-brand-1-rgb), 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(var(--vp-c-brand-1-rgb), 0);
  }
}

.chat-toggle:hover {
  transform: scale(1.1);
  animation: none;
}

.chat-window {
  width: 380px;
  height: 550px;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 48px);
  background-color: var(--vp-c-bg);
  border: 2px solid var(--vp-c-brand-1);
  border-radius: 16px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: slideUp 0.3s ease-out forwards;
}

@media (max-width: 768px) {
  .learning-assistant {
    bottom: 16px;
    right: 16px;
    z-index: 1000;
  }

  .chat-toggle {
    width: 48px;
    height: 48px;
    font-size: 24px;
  }

  .chat-window {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100vw;
    max-width: none;
    height: 70vh;
    max-height: calc(100vh - 60px);
    border-radius: 16px 16px 0 0;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.chat-header {
  padding: 16px 20px;
  background: linear-gradient(135deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 16px;
}

.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  padding: 0;
  line-height: 1;
}

.chat-messages {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: var(--vp-c-bg-soft);
}

.message {
  display: flex;
  flex-direction: column;
}

.message.user {
  align-items: flex-end;
}

.message.assistant {
  align-items: flex-start;
}

.message-content {
  max-width: 85%;
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.5;
  white-space: pre-wrap;
}

.message.user .message-content {
  background-color: var(--vp-c-brand-1);
  color: white;
  border-bottom-right-radius: 2px;
}

.message.assistant .message-content {
  background-color: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-1);
  border-bottom-left-radius: 2px;
}

.loading {
  font-style: italic;
  color: var(--vp-c-text-2);
}

.chat-input {
  display: flex;
  padding: 12px;
  border-top: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg);
  gap: 8px;
}

.chat-input input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  outline: none;
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}

.chat-input input:focus {
  border-color: var(--vp-c-brand-1);
}

.chat-input button {
  padding: 8px 16px;
  background-color: var(--vp-c-brand-1);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
}

.chat-input button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
