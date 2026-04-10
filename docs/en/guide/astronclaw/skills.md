# Skills System (Skills)

Skills are the core capability module of AstronClaw, equivalent to the "tools and capability plugins" that the Agent can call. Through skills, AstronClaw can upgrade from simple "chat" to real "task execution".

## I. What is a Skill?

**Skill = Capability unit that can be called by AstronClaw**, including:
*   External tools (Search / OCR / API)
*   Model capabilities (Voice / Image / Reasoning)
*   Workflows (Multi-step automated task execution)
*   Industry templates (Research reports / PPT / Analysis reports)

## II. How to Get Skills

AstronClaw supports 3 ways to get skills:

### 1. Manual Installation from Skills Market
Enter the [Skills Market]:
*   Supports keyword search (e.g., PPT / Search / OCR)
*   Browse official recommended skills
*   Click "Install" to use
> **Features**: Stable, officially verified; suitable for known requirement scenarios.

### 2. Search and Install from Repository
AstronClaw supports extending from the skills repository:
*   Search skills (Official / Third-party)
*   Browse skill descriptions
*   Manually install to "My Skills"
> **Applicable**: Finding specific capabilities (like industry tools, vertical capabilities); expanding ecological capability boundaries.

### 3. Automatic Installation via Chat (Recommended)
Users can directly describe their needs in the chat, and let AstronClaw automatically complete skill acquisition and installation:
> **System Behavior**: Automatically understand requirements → Search for matching skills in the Skills Market/Repository → Automatically complete installation → Ready to use immediately
> **Features**: No need to enter the Skills Market, no manual operation, complete automated closed loop.

## III. How Skills are Called

AstronClaw supports 3 calling methods:

1.  **Automatic Call**: The user naturally expresses their needs, and the system automatically calls related skills.
2.  **Specific Call**: The user gives explicit instructions for AstronClaw to execute a certain skill.
3.  **Multi-Skill Chain Call**: The system automatically completes continuous tasks, for example: `Search` → `Analysis` → `Chart` → `PPT Generation`.

## IV. Skills Market and Customization

The current Skills Market provides **130+** official skills and is continuously expanding:
*   **Data Analysis** (CSV / Charts)
*   **Content Generation** (PPT / Documents)
*   **Information Acquisition** (Search / News)
*   **AI Capabilities** (OCR / Voice)

### Custom Skills
AstronClaw supports users to create exclusive skills:
*   **Upload to Create**: Supports uploading `.zip` / `.md` files to automatically generate skills
*   **Chat to Create**: Directly describe your needs in a chat with AstronClaw, and the AI will write and generate exclusive skill configurations for you.

### My Skills (Management)
In the "My Skills" panel, you can:
*   **Create**: Upload files to create
*   **Delete**: Remove skills
*   **Download**: Export skills
*   **Enable/Disable**: Control the calling status of skills

### How to Use After Custom Skill Creation
After the skill is created:
👉 No extra operation needed, it's ready to use directly

**Example:**
> Help me analyze this financial report and give investment advice

The system will automatically call the newly created "Financial Report Analysis Skill"
