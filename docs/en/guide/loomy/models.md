# Models and Chat

## Model Configuration
Loomy supports a variety of large model services. You can use the default provided models, or you can add custom AI providers. All configuration information is saved locally, and none of your key data will be uploaded.

**Access Model Settings**
Click "Settings" on the left menu bar of the application, and then select the "Model" option to enter the model configuration page.

![Access Model Settings](/loomy/models/model-setting.png)

**Default Model Configuration**
Loomy provides the following large model services by default, out of the box:
*   MiniMax - MiniMax-M2.5
*   Doubao - doubao-seed-2.0-pro
*   DeepSeek - DeepSeek-v3.2
*   Qwen - qwen3.5-plus

**Add Custom Provider**
In "Settings -> Model", click "+ Add Custom Provider", fill in the API Key, API Address, Model Name, and other information.

## Chat Function
The chat function is your core interface for interacting with AI. Through natural language conversations, Loomy can help you accomplish various tasks, from simple Q&A to complex multi-step workflows.

### 1. Start a Conversation
Enter your question or requirement in the input box on the Loomy main interface, and press Enter or click the send button to start the conversation.
Examples:
*   "Help me write a business email"
*   "Analyze the data in this Excel spreadsheet"
*   "What's the weather like in Hefei today?"

Loomy will automatically determine which tools or skills to call to complete the task based on your input.

### 2. Use Skills
Loomy provides two ways to use skills, making your work more flexible and efficient.

*   **Method 1: Quick Command "/"**: Enter `/` in the input box, and a skill selection menu will automatically pop up. Select the required skill, enter the specific requirement, and send.
*   **Method 2: AI Autonomous Recognition**: Describe your requirement directly, and Loomy will automatically recognize and call the corresponding skill (for example: "Help me organize the downloads folder").

**Skill Permissions**: You can set permissions (Allow/Ask/Forbid) for each skill in "Settings - Skills". When set to "Ask", AI will ask for your consent before calling.

### 3. Task Execution
*   **Single Task Execution**: Only one task can be processed at the same time, and new messages will enter the waiting queue. The interface will display the execution status of the current task (🔄 Executing, ✅ Completed, ❌ Failed).
*   **Interrupt Task**: If you need to interrupt a running task, you can click the "Stop" button. After interruption, you can resend the modified command or start a new task.

### 4. Context and Tool Calling
*   **Context Management**: Loomy remembers the conversation history to maintain context continuity. This means you can have multi-turn conversations without repeating background information. Long conversations will consume more credits. If you need to start a completely new conversation topic, just click the "New Chat" button.
*   **Tool Calling**: When a task requires the use of external tools, Loomy will automatically call the configured MCP service. Common scenarios include:
    *   📧 **Email Operations** - Read, send emails (requires QQ Mail MCP configuration)
    *   🌐 **Web Browsing** - Visit web pages, extract information (requires Browser MCP configuration)
    *   📅 **Calendar Management** - Create, query schedules (requires System Calendar MCP configuration)
    *   📄 **File Processing** - Read, edit local files

### 5. Model Switching
You can switch to use different AI models at any time during the conversation. Click the model selector in the upper right corner to choose the model you want to use. New conversations will use the selected model.
*   **MiniMax** - Balances performance and speed, suitable for daily conversations
*   **Doubao** - Suitable for Chinese scenarios
*   **DeepSeek** - Strong deep reasoning ability, suitable for complex tasks
*   **Qwen** - Strong comprehensive ability

### 6. FAQ
**Why didn't my message get a reply immediately?**
It is possible that a task is currently executing, and your message is in the waiting queue; or the task is relatively complex and requires longer processing time; or the network connection is unstable.

**How can I make AI understand my requirements more accurately?**
Describe clearly and specifically, and provide necessary background information; for complex tasks, you can describe them step by step; or directly use the `/` quick command to explicitly specify the skill.
