# Remote Control

The remote control feature allows you to send commands to Loomy through instant messaging tools, check task progress, trigger operations, or get execution results even when you are not sitting in front of your computer.

## Applicable Scenarios
*   Remotely check whether tasks are completed when on a business trip or temporarily away from your desk
*   Trigger Loomy to execute a fixed process through messages
*   Quickly query current to-dos, running status, or key results on your phone

> **Note:** When using remote control, you must ensure that Loomy is running in the **background** on your local device.

---

## Connect to QQ Bot

1.  Open "Settings" in the left menu of Loomy, and find the remote control or corresponding bot connection configuration area.

![QQ Bot Settings](/loomy/qq/remote_qq_1.png)

**If you don't want to configure it yourself, you can directly use the QQ OpenClaw bot:**

1. Log in to the QQ Open Platform: [QQ OpenClaw Bot Creation Page](https://q.qq.com/qqbot/openclaw/index.html), click create bot, and copy the AppID and AppSecret.

![Create Bot 1](/loomy/qq/remote_qq_2.png)
![Create Bot 2](/loomy/qq/remote_qq_3.png)

2. Fill in the obtained AppID and AppSecret into the Loomy bot configuration information, click enable QQ bot, test the connection, and save the configuration.

![Fill in Credentials](/loomy/qq/remote_qq_4.png)

At this time, the QQ bot in the remote control shows "Connected".

![Connected](/loomy/qq/remote_qq_5.png)

3. Open your QQ, a new chat window will appear showing that the bot has been created successfully, and you can start chatting~

**If you want to configure permissions yourself:**

1. Log in to the [QQ Open Platform](https://q.qq.com/#/apps), click Bot -> Create Bot, and fill in the name, avatar, description, and other information.

![Configure Bot Yourself](/loomy/qq/Q1.png)

2. **Callback Configuration**, select the events you need to add.

![Callback Configuration](/loomy/qq/Q3.png)

3. **Development Management**, copy AppID and AppSecret.
4. Same as above, fill in the obtained AppID and AppSecret into the Loomy bot configuration information, click enable QQ bot, test the connection, and save the configuration.

![Fill in Credentials](/loomy/qq/remote_qq_4.png)

At this time, the QQ bot in the remote control shows "Connected".

![Connected](/loomy/qq/remote_qq_5.png)

5. Open your QQ, a new chat window will appear showing that the bot has been created successfully, and you can start chatting~

---

## Connect to Feishu Bot

1.  Create an enterprise custom app on the Feishu Open Platform and enable bot capabilities.
You can refer to the official bot creation instructions provided by Feishu first:
* [Feishu Official: Set up a bot in three minutes](https://open.feishu.cn/document/develop-an-echo-bot/introduction)
* [Feishu Open Platform Console](https://open.feishu.cn/app?lang=en-US)

Follow the instructions to click "Create App" and fill in the corresponding information:

![Create Feishu App 1](/loomy/feishu/feishu-1.png)
![Create Feishu App 2](/loomy/feishu/feishu-2.png)

2. After completing the app creation, publish the bot, ensure the bot status is "Published", and then click "Published" to jump to the bot list page:

![Publish Feishu App 1](/loomy/feishu/feishu-3.png)
![Publish Feishu App 2](/loomy/feishu/feishu-4.png)

Find the bot app you just created in the list:

![Find App](/loomy/feishu/feishu-4-1.png)

3. Copy `App ID` and `App Secret` on the "Credentials and Basic Info" page:

![Get Credentials](/loomy/feishu/feishu-5.png)

4. Open the Loomy client and enter the "Remote Control" function in "Settings":

![Loomy Remote Control Settings](/loomy/feishu/feishu-6.png)

5. Choose to configure the Feishu bot, fill in the `App ID` and `App Secret`, click test connection, and after confirming the connection is successful, enable the bot and save the configuration:

![Fill in Feishu Configuration](/loomy/feishu/feishu-7.png)

6. Open your mobile Feishu, find "Developer Assistant", and when you receive the application approval reminder, click to open the app and start using it:

![Feishu Use Effect 1](/loomy/feishu/feishu-8.jpg)
![Feishu Use Effect 2](/loomy/feishu/feishu-9.jpg)

---

## Connect to DingTalk Bot

1. Log in to the [DingTalk Open Platform](https://open-dev.dingtalk.com/):

Go to "App Development" -> "DingTalk App" -> "One-click Auto Create OpenClaw Bot App", and copy the Client ID and Client Secret.

![Create DingTalk App 1](/loomy/dingding/dingding-1.jpg)
![Create DingTalk App 2](/loomy/dingding/dingding-2.jpg)

After confirmation, the first version will be automatically published, and you can get the Client ID and Client Secret.

2. Fill in the obtained Client ID and Client Secret into the Loomy bot configuration information, click enable DingTalk bot, test the connection, and save the configuration.

![Fill in DingTalk Configuration](/loomy/dingding/dingding-4.png)

3. Click event subscription, select stream push mode, click connected to verify the connection channel. After successful verification, you can freely choose events, save, and publish a new version.

![DingTalk Event Subscription](/loomy/dingding/dingding-5.jpg)

4. Open your DingTalk, a new chat window will appear showing that the bot has been created successfully, and you can start chatting~

---

## Connect to WeChat Bot

The WeChat bot can serve as one of the message entries for Loomy's remote control. After configuration, you can send commands to Loomy via WeChat and receive execution results.

### Applicable Scenarios
*   Remotely trigger tasks through WeChat direct messages
*   Check Loomy's execution results on your mobile phone
*   Quickly confirm current task status when away from your desk
*   Use the convenience of WeChat to control Loomy anytime, anywhere

### Basic Configuration Process
1. **Enter remote control settings**: Open the Loomy client, click "Settings" in the left menu, and find the "Remote Control" functional area.
2. **Select WeChat Bot**: In the remote control page, find and click the "WeChat Bot" option.

![Select WeChat Bot](/loomy/wechat/wechat-1.png)

3. **Scan QR code to bind device**: After clicking the WeChat bot, a QR code will pop up. Use your mobile WeChat to scan the QR code to complete the device binding.

![Scan QR code to bind device](/loomy/wechat/wechat-2.png)

4. **Confirm connection status**: After the binding is complete, the WeChat bot in the remote control page should show the "Connected" status, indicating successful configuration.

![Confirm connection status](/loomy/wechat/wechat-3.png)

5. **Start using**: In your mobile WeChat, find the bound Loomy bot chat window to start sending commands and receiving execution results.

![Start using](/loomy/wechat/wechat-4.png)

> **Precautions:**
> *   **WeChat Version Requirement**: Please ensure that WeChat has been updated to version 8.0.70 or above; otherwise, the bot function may not work properly.
> *   **Background Running Requirement**: Real task execution still relies on Loomy running locally. Please ensure that Loomy remains available in the background.
> *   **Single Device Limit**: Currently, one Loomy account can only bind one WeChat device. If you need to change the device, please unbind the current device first, and then scan the code again to bind.
