# 渠道配置指南

AstronClaw 支持连接多种企业协作平台和社交媒体，让你可以在熟悉的工具中直接与 AI 助手对话。

## 飞书渠道配置指南

本指南介绍如何将**AstronClaw接入飞书（Feishu / Lark）**，从而在飞书中直接与 AstronClaw 智能体对话并执行任务。

### 前置条件
*   拥有 **飞书管理员权限**
*   已成功 **部署 AstronClaw**
*   已进入 **渠道配置（Channels）模块**

### 操作步骤

**步骤一：创建飞书应用**
1.  打开[飞书开放平台](https://open.feishu.cn/app)
2.  点击 **创建企业自建应用**
    ![创建飞书应用](/astronclaw/channels/feishu-app-create.png)
3.  填写应用信息（应用名称建议：AstronClaw Assistant），点击 **创建**。

**步骤二：获取应用凭证**
进入应用后台后，点击左侧菜单 **凭证与基础信息**，复制 `App ID` 和 `App Secret`，这些信息将在 AstronClaw 渠道配置中使用。
![获取飞书凭证](/astronclaw/channels/feishu-app-credential.png)

**步骤三：配置应用权限并启用机器人能力**
1.  在左侧导航进入 **权限管理**，点击 批量导入 按钮，粘贴 JSON 配置一键导入所需权限：
    ![配置飞书权限](/astronclaw/channels/feishu-app-permission.png)
2.  在 应用能力 > 机器人 页面：开启机器人能力并配置机器人名称：
    ![开启飞书机器人](/astronclaw/channels/feishu-app-robot.png)

**步骤四：配置事件订阅**
1.  在 AstronClaw「渠道配置」页面填入步骤二获取的 App ID 与 APP Secret，点击保存配置，等待右上角变为绿色已配置。
    ![配置AstronClaw飞书渠道](/astronclaw/channels/feishu-app-config.png)
2.  回到飞书配置页面开启 **事件订阅**，选择 使用长连接接收事件，点击保存。
3.  添加事件：`im.message.receive_v1`（接收消息）。
    ![添加飞书事件 1](/astronclaw/channels/feishu-app-event1.png)
    ![添加飞书事件 2](/astronclaw/channels/feishu-app-event2.png)

**步骤五：发布飞书应用**
在 版本管理与发布 页面创建版本，提交审核并发布。

---

## 钉钉渠道配置指南

### 操作步骤

**步骤一：创建钉钉应用**
1.  登录钉钉开放平台，在左侧目录树中选择企业内部应用 > 钉钉应用，单击创建应用按钮。
    ![创建钉钉应用](/astronclaw/channels/dingding-app-create.png)
2.  配置应用名称、图标等信息后，单击保存。

**步骤二：为钉钉应用添加权限**
钉钉应用需要申请的权限：`Card.Instance.Write`、`Card.Streaming.Write`、`qyapi_robot_sendmsg`。
1.  在左侧目录树选择开发配置 > 权限管理。
2.  搜索 `Card`，勾选互动卡片实例写权限与AI卡片流式更新权限，批量申请。
    ![申请卡片权限](/astronclaw/channels/dingding-app-permission1.png)
3.  搜索 `qyapi_robot_sendmsg`，开通企业内机器人发送消息权限。
    ![申请发送消息权限](/astronclaw/channels/dingding-app-permission2.png)

**步骤三：配置钉钉机器人**
1.  选择应用能力 > 添加应用能力，添加机器人。
    ![添加钉钉机器人](/astronclaw/channels/dingding-app-robot1.png)
2.  打开机器人配置开关。
    ![开启钉钉机器人](/astronclaw/channels/dingding-app-robot2.png)
3.  将消息接收模式调整为 Stream 模式，单击发布保存配置。
    ![配置钉钉Stream模式](/astronclaw/channels/dingding-app-robot3.png)

**步骤四：发布应用版本**
在版本管理与发布页面创建新版本并发布。
![发布钉钉应用](/astronclaw/channels/dingding-app-publish.webp)

**步骤五：获取应用信息并配置 AstronClaw**
1.  在基础信息 > 凭证与基础信息，复制 `Client ID`、`Client Secret` 等信息。
    ![获取钉钉凭证](/astronclaw/channels/dingding-app-credential.webp)
2.  进入 AstronClaw「渠道配置」选择「钉钉」，填写凭证并保存。

---

## 企业微信渠道配置指南

### 方法一：手动配置
**步骤一：创建企业微信机器人**
1.  登录 [企业微信管理后台](https://work.weixin.qq.com/wework_admin/frame)。
2.  在左侧目录树选择工作台 > 智能办公，单击智能机器人。
    ![智能机器人](/astronclaw/channels/wecom-app-create1.webp)
3.  单击创建机器人，并选择手动创建。
    ![手动创建企微机器人](/astronclaw/channels/wecom-app-create2.webp)
4.  设置机器人的名称和头像。
    ![设置企微机器人名称](/astronclaw/channels/wecom-app-create3.webp)

**步骤二：开启长连接**
1.  在机器人配置页面右下角，单击 API模式创建。
    ![企微API模式](/astronclaw/channels/wecom-app-conn1.webp)
2.  设置连接方式为使用长连接。
    ![企微使用长连接](/astronclaw/channels/wecom-app-conn2.webp)
3.  获取 Secret、复制 Bot ID 和 Secret ID，并单击保存。
    ![获取企微凭证](/astronclaw/channels/wecom-app-conn3.webp)

**步骤三：在 AstronClaw 中完成配置**
进入 AstronClaw「渠道配置」选择「企业微信」，填写 Bot ID 和 Secret，点击「保存配置」。

### 方法二：扫码自动配置（推荐）
1.  在 AstronClaw 配置页面点击获取二维码，使用企业微信扫描二维码完成授权配置。
    ![企微扫码授权](/astronclaw/channels/wecom-app-scan.png)
2.  点击「一键创建智能机器人」，将自动完成创建。系统将自动识别并填写机器人相应的BOT ID和APP SECRET，点击「保存配置」。
    ![企微一键创建 1](/astronclaw/channels/wecom-app-auto1.jpg)
    ![企微一键创建 2](/astronclaw/channels/wecom-app-auto2.jpg)

---

## 微信渠道配置指南

### 前置条件
*   已成功 **部署 AstronClaw**
*   已进入 **渠道配置（Channels）模块**

### 操作步骤

**步骤一：在 AstronClaw 中获取二维码**
1.  进入 AstronClaw「渠道配置」页面
2.  选择「微信」渠道
3.  点击「扫码连接微信」，即可弹出一个二维码
    ![扫码连接微信 1](https://bjcdn.openstorage.cn/aicontest/2026-03-30/0efa8092-b8d4-4caf-9c5f-9c9adaa80cbc.png)
    ![扫码连接微信 2](https://bjcdn.openstorage.cn/aicontest/2026-03-30/ed272a6b-1952-4e81-beae-0dd92db65767.png)

**步骤二：使用微信进行扫码**
使用微信扫描上述二维码，在弹出的页面中点击「连接」，即可完成绑定。
![连接确认](https://bjcdn.openstorage.cn/aicontest/2026-03-27/aa7fc599-f956-446f-aae6-28b00efbe39d.png)

> **注意：** 二维码有效期为 30 秒。若超时未扫，请点击遮罩层上的「点击刷新」重新获取。
![超时刷新](https://bjcdn.openstorage.cn/aicontest/2026-03-30/1fa6ca11-0d49-4e58-8697-ba20b974795c.png)

### 添加多账号与解绑

**添加多账号：** 若需关联多个微信，点击「+ 添加账号」重复上述扫码步骤即可。
![添加账号](https://bjcdn.openstorage.cn/aicontest/2026-03-30/dfc5292c-bdc7-4620-8de5-4ef3f41946b3.png)

---

## 微博渠道配置指南

**步骤一：获取凭证**
打开微博客户端，私信 `https://weibo.com/u/6808810981`
![私信微博账号](/astronclaw/channels/weibo-app-credential1.png)

私信发送消息：`连接龙虾`。得到应用凭证：
![获取微博凭证](/astronclaw/channels/weibo-app-credential2.png)

**步骤二：在 AstronClaw 中完成配置**
1.  进入 AstronClaw「渠道配置」页面
2.  选择「微博」渠道
3.  填写步骤一中获取的 App Id 和 AppSecret
4.  点击「保存配置」
    ![配置微博渠道](/astronclaw/channels/weibo-app-config.png)