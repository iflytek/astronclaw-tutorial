# Models and Chat

## Models
Loomy supports a variety of large model services. You can use the default provided models or add custom AI providers. All configuration information is saved locally, and we will not obtain or upload any of your key data.

## Access Model Settings
Click "Settings" in the left menu bar of the application, and then select the "Models" option to enter the model configuration page.

![Access Model Settings](/loomy/models/model-setting.png)

## Default Model Configuration
Loomy provides the following large model services by default, ready to use out of the box:
*   MiniMax - MiniMax-M2.5
*   Doubao - doubao-seed-2.0-pro
*   DeepSeek - DeepSeek-v3.2
*   Qwen - qwen3.5-plus

These default providers are pre-configured, and you can choose to use them directly.

## Switch Models
In the "Default Model Configuration" area, you can see the currently used model. Click the dropdown selector on the right to switch to other available models.

After the selection is complete, click the "Save" button, and then return to the homepage to use the newly selected model for conversations and task execution.

## Add Custom Providers
If you want to use other AI service providers or use your own deployed model services, you can add custom providers:

1.  In the "AI Providers" area, click the "+ Add Custom Provider" button in the upper right corner
2.  Fill in the relevant configuration information of the provider:
    *   API Key
    *   API Address
    *   Model Name
    *   Other necessary parameters
3.  Click "Configure" or "Save" to complete the addition

After the addition is successful, the custom provider will appear in the provider list, and you can switch to use it in the model selector.

## Configure Existing Providers
For providers whose status is shown as "Disabled" in the list (such as OpenAI, Google Gemini, iFLYTEK Spark, Kimi, etc.), you need to configure them first before you can use them:

1.  Click the "Configure" button on the right side of the corresponding provider card
2.  Fill in the API Key and other configuration information required by the provider
3.  After saving the configuration, the provider's status will change to "Enabled"
4.  Then you can select the provider's model in the model selector

## Data Security Instructions
**Local Storage**: All API Keys, configuration information, and model settings are saved on your local device. Loomy will not upload or obtain this sensitive information. You can configure and use various AI services with confidence.

## FAQ
### How to get an API Key?
Different AI service providers have different ways to get an API Key. Generally, you need to:
1.  Visit the official website of the corresponding service provider
2.  Register an account and complete real-name authentication
3.  Create an API Key in the console or developer center
4.  Copy the API Key and paste it into Loomy's configuration page

### Do I need to restart the app after switching models?
No. After switching models and saving, return to the homepage to use the new model immediately without restarting the application.

### Can I configure multiple providers at the same time?
Yes. You can configure multiple AI providers and switch between different models at any time when needed.

---

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
