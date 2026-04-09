# 远程控制

远程控制功能让你在不坐在电脑前时，仍然可以通过即时通讯工具向 Loomy 发送指令，查看任务进度、触发操作或获取执行结果。

## 适用场景
*   出差或临时离开工位时，远程查看任务是否执行完成
*   通过消息触发 Loomy 执行固定流程
*   在手机上快速查询当前待办、运行状态或关键结果

> **注意：** 使用远程控制时，必须保证 Loomy 在你的本地设备上处于**后台运行**状态。

---

## 接入 QQ 机器人

1.  打开 Loomy 左侧菜单中的「设置」，找到远程控制或对应的机器人接入配置区域。

![QQ机器人设置](/loomy/qq/remote_qq_1.png)

**如果不想自己配置，可以直接使用 QQ OpenClaw 机器人：**

1. 登录 QQ 开放平台：[QQ OpenClaw 机器人创建页](https://q.qq.com/qqbot/openclaw/index.html)，点击创建机器人，复制 AppID 和 AppSecret。

![创建机器人 1](/loomy/qq/remote_qq_2.png)
![创建机器人 2](/loomy/qq/remote_qq_3.png)

2. 将获取的 AppID 和 AppSecret 填入 Loomy 机器人配置信息中，点击启用 QQ 机器人，测试连接，保存配置即可。

![填入凭证](/loomy/qq/remote_qq_4.png)

此时远程控制里的 QQ 机器人显示“已连接”。

![已连接](/loomy/qq/remote_qq_5.png)

3. 打开你的 QQ，出现新对话窗口，显示机器人已创建成功，可以开始对话啦~

**如果你想自己配置权限：**

1. 登录 [QQ 开放平台](https://q.qq.com/#/apps)，点击机器人 -> 创建机器人，填写名称、头像、描述等信息。

![自己配置机器人](/loomy/qq/Q1.png)

2. **回调配置**，选择你需要添加的事件。

![回调配置](/loomy/qq/Q3.png)

3. **开发管理**，复制 AppID 和 AppSecret。
4. 同上，将获取的 AppID 和 AppSecret 填入 Loomy 机器人配置信息中，点击启用 QQ 机器人，测试连接，保存配置即可。

![填入凭证](/loomy/qq/remote_qq_4.png)

此时远程控制里的 QQ 机器人显示“已连接”。

![已连接](/loomy/qq/remote_qq_5.png)

5. 打开你的 QQ，出现新对话窗口，显示机器人已创建成功，可以开始对话啦~

---

## 接入飞书机器人

1.  在飞书开放平台创建企业自建应用，并启用机器人能力。
你可以先参考飞书官方提供的机器人创建说明：
* [飞书官方：三分钟设置机器人](https://open.feishu.cn/document/develop-an-echo-bot/introduction)
* [飞书开放平台控制台](https://open.feishu.cn/app?lang=zh-CN)

按指引点击“创建应用”，填写相应信息：

![创建飞书应用 1](/loomy/feishu/feishu-1.png)
![创建飞书应用 2](/loomy/feishu/feishu-2.png)

2. 完成应用创建后，发布机器人，确保机器人状态为“已发布”，然后点击“已发布”，即可跳转至机器人列表页面：

![发布飞书应用 1](/loomy/feishu/feishu-3.png)
![发布飞书应用 2](/loomy/feishu/feishu-4.png)

在列表中找到刚才创建的机器人应用：

![找到应用](/loomy/feishu/feishu-4-1.png)

3. 在“凭证和基础信息”页面中复制 `App ID` 和 `App Secret`：

![获取凭证](/loomy/feishu/feishu-5.png)

4. 打开 Loomy 客户端，进入「设置」中的「远程控制」功能：

![Loomy 远程控制设置](/loomy/feishu/feishu-6.png)

5. 选择配置飞书机器人，填写 `App ID` 和 `App Secret`，点击测试连接，确认连接成功后启用机器人，保存配置：

![填写飞书配置](/loomy/feishu/feishu-7.png)

6. 打开你的手机飞书，找到“开发者小助手”，当你收到应用审批通过提醒后，点击打开应用即可使用：

![飞书使用效果 1](/loomy/feishu/feishu-8.jpg)
![飞书使用效果 2](/loomy/feishu/feishu-9.jpg)

---

## 接入钉钉机器人

1. 登录 [钉钉开放平台](https://open-dev.dingtalk.com/)：

进入「应用开发」→「钉钉应用」→「一键自动创建 OpenClaw 机器人应用」，复制 Client ID 和 Client Secret。

![创建钉钉应用 1](/loomy/dingding/dingding-1.jpg)
![创建钉钉应用 2](/loomy/dingding/dingding-2.jpg)

确认后自动发布第一个版本，可获取 Client ID 和 Client Secret。

2. 将获取的 Client ID 和 Client Secret 填入 Loomy 机器人配置信息中，点击启用钉钉机器人，测试连接，保存配置。

![填写钉钉配置](/loomy/dingding/dingding-4.png)

3. 点击事件订阅，选择 stream 推送模式，点击已完成接入，验证连接通道。验证成功后可自由选择事件，保存后发布新版本。

![钉钉事件订阅](/loomy/dingding/dingding-5.jpg)

4. 打开你的钉钉，出现新对话窗口，显示机器人已创建成功，可以开始对话啦~

---

## 接入微信机器人

微信机器人可以作为 Loomy 远程控制的消息入口之一。完成配置后，你可以通过微信向 Loomy 发送指令，并接收执行结果。

### 适用场景
*   通过微信单聊远程触发任务
*   在手机上查看 Loomy 的执行结果
*   不在工位前时快速确认当前任务状态
*   利用微信的便捷性随时随地控制 Loomy

### 基本配置流程
1. **进入远程控制设置**：打开 Loomy 客户端，点击左侧菜单中的「设置」，找到「远程控制」功能区域。
2. **选择微信机器人**：在远程控制页面中，找到并点击「微信机器人」选项。
3. **扫码绑定设备**：点击微信机器人后，会弹出二维码。使用手机微信扫描二维码，完成设备绑定。
4. **确认连接状态**：绑定完成后，远程控制页面中的微信机器人应显示「已连接」状态，表示配置成功。
5. **开始使用**：在手机微信中，找到绑定的 Loomy 机器人对话窗口，即可开始发送指令并接收执行结果。

> **注意事项：**
> *   **微信版本要求**：请确保微信已更新到 8.0.70 及以上版本，否则可能无法正常使用机器人功能。
> *   **后台运行要求**：真正的任务执行仍依赖 Loomy 本地运行，请确保 Loomy 保持后台可用状态。
> *   **单设备限制**：目前一个 Loomy 账号只能绑定一个微信设备。如需更换设备，请先解绑当前设备，再重新扫码绑定。
