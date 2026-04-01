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
The chat function is the core interface for your interaction with AI. Through natural language conversation, Loomy can help you complete various tasks.

### 1. Using Skills
*   **Method 1: Shortcut Command "/"**: Enter `/` in the input box, and a skill selection menu will automatically pop up.
*   **Method 2: AI Autonomous Recognition**: Directly describe your needs, and Loomy will automatically identify and call the corresponding skills (for example: "Help me organize the download folder").

### 2. Task Execution
*   **Single Task Execution**: Only one task can be processed at the same time, new messages will enter the waiting queue.
*   **Interrupt Task**: If you need to interrupt a task in progress, you can click the "Stop" button.

### 3. Context and Tool Calling
*   **Context Management**: Loomy will remember the conversation history to maintain context continuity. Long conversations will consume more points.
*   **Tool Calling**: When a task requires the use of external tools, Loomy will automatically call configured MCP services (such as email operations, web browsing, etc.).
