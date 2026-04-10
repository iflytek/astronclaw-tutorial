# Channel Configuration Guide

AstronClaw supports connecting to various enterprise collaboration platforms and social media, allowing you to interact with the AI assistant directly in your familiar tools.

## Feishu Channel Configuration Guide

This guide introduces how to **connect AstronClaw to Feishu (Lark)**, so you can interact directly with the AstronClaw agent and execute tasks within Feishu.

### Prerequisites
*   Have **Feishu Administrator Permissions**
*   Successfully **Deployed AstronClaw**
*   Entered the **Channels configuration module**

### Steps

**Step 1: Create a Feishu App**
1.  Open the [Feishu Open Platform](https://open.feishu.cn/app)
2.  Click **Create Custom App**
    ![Create Feishu App](/astronclaw/channels/feishu-app-create.png)
3.  Fill in the app information (Suggested App Name: AstronClaw Assistant), and click **Create**.

**Step 2: Get App Credentials**
After entering the app background, click the left menu **Credentials & Basic Info**, copy the `App ID` and `App Secret`. This information will be used in the AstronClaw channel configuration.
![Get Feishu Credentials](/astronclaw/channels/feishu-app-credential.png)

**Step 3: Configure App Permissions and Enable Bot Capabilities**
1.  Go to **Permission Management** in the left navigation, click the Batch Import button, and paste the JSON configuration to import required permissions with one click:
    ![Configure Feishu Permissions](/astronclaw/channels/feishu-app-permission.png)
2.  On the App Capabilities > Bot page: Enable bot capabilities and configure the bot name:
    ![Enable Feishu Bot](/astronclaw/channels/feishu-app-robot.png)

**Step 4: Configure Event Subscription**
1.  Fill in the App ID and App Secret obtained in Step 2 on the AstronClaw "Channel Configuration" page, click save configuration, and wait for the top right corner to turn green (configured).
    ![Configure AstronClaw Feishu Channel](/astronclaw/channels/feishu-app-config.png)
2.  Return to the Feishu configuration page to enable **Event Subscription**, choose to use a persistent connection to receive events, and click save.
3.  Add event: `im.message.receive_v1` (Receive messages).
    ![Add Feishu Event 1](/astronclaw/channels/feishu-app-event1.png)
    ![Add Feishu Event 2](/astronclaw/channels/feishu-app-event2.png)

**Step 5: Publish Feishu App**
Create a version on the Version Management and Publish page, submit for review, and publish.

---

## DingTalk Channel Configuration Guide

### Steps

**Step 1: Create a DingTalk App**
1.  Log in to the DingTalk Open Platform, select Enterprise Internal App > DingTalk App in the left directory tree, and click the Create App button.
    ![Create DingTalk App](/astronclaw/channels/dingding-app-create.png)
2.  After configuring the app name, icon, and other information, click Save.

**Step 2: Add Permissions for DingTalk App**
Permissions required for the DingTalk app: `Card.Instance.Write`, `Card.Streaming.Write`, `qyapi_robot_sendmsg`.
1.  Select Development Configuration > Permission Management in the left directory tree.
2.  Search for `Card`, check the interactive card instance write permission and AI card stream update permission, and apply in batch.
    ![Apply Card Permissions](/astronclaw/channels/dingding-app-permission1.png)
3.  Search for `qyapi_robot_sendmsg` and open the permission to send messages for the enterprise internal robot.
    ![Apply Send Message Permission](/astronclaw/channels/dingding-app-permission2.png)

**Step 3: Configure DingTalk Bot**
1.  Select App Capabilities > Add App Capability, and add a bot.
    ![Add DingTalk Bot](/astronclaw/channels/dingding-app-robot1.png)
2.  Turn on the bot configuration switch.
    ![Enable DingTalk Bot](/astronclaw/channels/dingding-app-robot2.png)
3.  Change the message receiving mode to Stream mode, and click publish to save the configuration.
    ![Configure DingTalk Stream Mode](/astronclaw/channels/dingding-app-robot3.png)

**Step 4: Publish App Version**
Create a new version and publish on the Version Management and Publish page.
![Publish DingTalk App](/astronclaw/channels/dingding-app-publish.webp)

**Step 5: Get App Info and Configure AstronClaw**
1.  In Basic Info > Credentials & Basic Info, copy `Client ID`, `Client Secret`, and other information.
    ![Get DingTalk Credentials](/astronclaw/channels/dingding-app-credential.webp)
2.  Enter AstronClaw "Channel Configuration", select "DingTalk", fill in the credentials, and save.

---

## WeCom Channel Configuration Guide

### Method 1: Manual Configuration
**Step 1: Create WeCom Bot**
1.  Log in to the [WeCom Management Background](https://work.weixin.qq.com/wework_admin/frame).
2.  Select Workspace > Smart Office in the left directory tree, and click Smart Bot.
    ![Smart Bot](/astronclaw/channels/wecom-app-create1.webp)
3.  Click Create Bot, and choose Manual Creation.
    ![Manual Creation WeCom Bot](/astronclaw/channels/wecom-app-create2.webp)
4.  Set the name and avatar of the bot.
    ![Set WeCom Bot Name](/astronclaw/channels/wecom-app-create3.webp)

**Step 2: Enable Persistent Connection**
1.  In the lower right corner of the bot configuration page, click API Mode Creation.
    ![WeCom API Mode](/astronclaw/channels/wecom-app-conn1.webp)
2.  Set the connection method to use a persistent connection.
    ![WeCom Use Persistent Connection](/astronclaw/channels/wecom-app-conn2.webp)
3.  Get Secret, copy Bot ID and Secret ID, and click Save.
    ![Get WeCom Credentials](/astronclaw/channels/wecom-app-conn3.webp)

**Step 3: Complete Configuration in AstronClaw**
Enter AstronClaw "Channel Configuration", select "WeCom", fill in the Bot ID and Secret, and click "Save Configuration".

### Method 2: Scan Code Automatic Configuration (Recommended)
1.  Click get QR code on the AstronClaw configuration page, and use WeCom to scan the QR code to complete authorization configuration.
    ![WeCom Scan Code Authorization](/astronclaw/channels/wecom-app-scan.png)
2.  Click "One-click Create Smart Bot", and it will be created automatically. The system will automatically identify and fill in the corresponding BOT ID and APP SECRET of the bot, click "Save Configuration".
    ![WeCom One-click Create 1](/astronclaw/channels/wecom-app-auto1.jpg)
    ![WeCom One-click Create 2](/astronclaw/channels/wecom-app-auto2.jpg)

---

## WeChat Channel Configuration Guide

### Prerequisites
*   Successfully **Deployed AstronClaw**
*   Entered the **Channels configuration module**

### Steps

**Step 1: Get QR Code in AstronClaw**
1.  Enter the AstronClaw "Channel Configuration" page
2.  Select the "WeChat" channel
3.  Click "Scan to Connect WeChat", and a QR code will pop up
    ![Scan to connect WeChat 1](https://bjcdn.openstorage.cn/aicontest/2026-03-30/0efa8092-b8d4-4caf-9c5f-9c9adaa80cbc.png)
    ![Scan to connect WeChat 2](https://bjcdn.openstorage.cn/aicontest/2026-03-30/ed272a6b-1952-4e81-beae-0dd92db65767.png)

**Step 2: Use WeChat to Scan Code**
Use WeChat to scan the QR code above, and click "Connect" on the pop-up page to complete binding.
![Connection Confirm](https://bjcdn.openstorage.cn/aicontest/2026-03-27/aa7fc599-f956-446f-aae6-28b00efbe39d.png)

> **Note:** The QR code is valid for 30 seconds. If it times out, please click "Click to Refresh" on the mask layer to get it again.
![Timeout Refresh](https://bjcdn.openstorage.cn/aicontest/2026-03-30/1fa6ca11-0d49-4e58-8697-ba20b974795c.png)

### Add Multiple Accounts and Unbind

**Add Multiple Accounts:** If you need to associate multiple WeChat accounts, click "+ Add Account" and repeat the scan steps above.
![Add Account](https://bjcdn.openstorage.cn/aicontest/2026-03-30/dfc5292c-bdc7-4620-8de5-4ef3f41946b3.png)

---

## Weibo Channel Configuration Guide

**Step 1: Get Credentials**
Open the Weibo client and send a private message to `https://weibo.com/u/6808810981`
![Private Message Weibo Account](/astronclaw/channels/weibo-app-credential1.png)

Send private message: `Connect Lobster`. Get the app credentials:
![Get Weibo Credentials](/astronclaw/channels/weibo-app-credential2.png)

**Step 2: Complete Configuration in AstronClaw**
1.  Enter the AstronClaw "Channel Configuration" page
2.  Select the "Weibo" channel
3.  Fill in the App Id and AppSecret obtained in Step 1
4.  Click "Save Configuration"
    ![Configure Weibo Channel](/astronclaw/channels/weibo-app-config.png)
