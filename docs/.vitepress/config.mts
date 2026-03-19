import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/astronclaw-tutorial/',
  title: "AstronClaw Tutorial",
  description: "基于 AstronClaw 打造的个人云端 AI 助手与 Loomy 桌面级搭子",
  
  vite: {
    server: {
      proxy: {
        // If needed, we can also proxy through Vite's dev server, 
        // but now we're calling our own backend server directly.
      }
    }
  },

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: 'AstronClaw 指南', link: '/guide/astronclaw/introduction' },
          { text: 'Loomy 桌面助理', link: '/guide/loomy/introduction' },
          { text: '体验 AstronClaw', link: 'https://agent.xfyun.cn/astron-claw' },
          { text: '下载 Loomy', link: 'https://loomy.xunfei.cn/' },
          { text: 'GitHub', link: 'https://github.com/iflytek' }
        ],
        sidebar: [
          {
            text: '云端助手 AstronClaw',
            items: [
              { text: '核心优势与对比', link: '/guide/astronclaw/introduction' },
              { text: '快速上手指南', link: '/guide/astronclaw/getting-started' },
              { text: '技能系统详解', link: '/guide/astronclaw/skills' },
              { text: '积分体系与订阅', link: '/guide/astronclaw/billing' },
              { text: '实际应用场景', link: '/guide/astronclaw/scenarios' },
              { text: '渠道配置指南', link: '/guide/astronclaw/channels' },
              { text: '常见问题', link: '/guide/astronclaw/faq' }
            ]
          },
          {
            text: '桌面搭子 Loomy',
            items: [
              { text: '介绍与定位', link: '/guide/loomy/introduction' },
              { text: '快速开始', link: '/guide/loomy/quick-start' },
              { text: '模型与聊天', link: '/guide/loomy/models' },
              { text: '工具箱与技能系统', link: '/guide/loomy/toolbox' },
              { text: '定时任务与积分', link: '/guide/loomy/scheduled-tasks' },
              { text: '远程控制', link: '/guide/loomy/remote-control' },
              { text: '典型工作场景', link: '/guide/loomy/scenarios' },
              { text: '常见问题', link: '/guide/loomy/faq' }
            ]
          }
        ],
        footer: {
          message: '基于 Apache License 2.0 许可发布。',
          copyright: 'Copyright © 2025 iFlytek Co., Ltd.'
        }
      }
    },
    en: {
      label: 'En',
      lang: 'en',
      link: '/en/',
      description: 'Personal Cloud AI Assistant based on AstronClaw & Desktop Companion Loomy',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'AstronClaw Guide', link: '/en/guide/astronclaw/introduction' },
          { text: 'Loomy Desktop', link: '/en/guide/loomy/introduction' },
          { text: 'Try AstronClaw', link: 'https://agent.xfyun.cn/astron-claw' },
          { text: 'Download Loomy', link: 'https://loomy.xunfei.cn/' },
          { text: 'GitHub', link: 'https://github.com/iflytek' }
        ],
        sidebar: [
          {
            text: 'Cloud Assistant AstronClaw',
            items: [
              { text: 'Core Advantages', link: '/en/guide/astronclaw/introduction' },
              { text: 'Getting Started', link: '/en/guide/astronclaw/getting-started' },
              { text: 'Skills System', link: '/en/guide/astronclaw/skills' },
              { text: 'Billing & Points', link: '/en/guide/astronclaw/billing' },
              { text: 'Scenarios', link: '/en/guide/astronclaw/scenarios' },
              { text: 'Channels Config', link: '/en/guide/astronclaw/channels' },
              { text: 'FAQ', link: '/en/guide/astronclaw/faq' }
            ]
          },
          {
            text: 'Desktop Companion Loomy',
            items: [
              { text: 'Introduction', link: '/en/guide/loomy/introduction' },
              { text: 'Quick Start', link: '/en/guide/loomy/quick-start' },
              { text: 'Models & Chat', link: '/en/guide/loomy/models' },
              { text: 'Toolbox & Skills', link: '/en/guide/loomy/toolbox' },
              { text: 'Scheduled Tasks', link: '/en/guide/loomy/scheduled-tasks' },
              { text: 'Remote Control', link: '/en/guide/loomy/remote-control' },
              { text: 'Scenarios', link: '/en/guide/loomy/scenarios' },
              { text: 'FAQ', link: '/en/guide/loomy/faq' }
            ]
          }
        ],
        footer: {
          message: 'Released under the Apache License 2.0.',
          copyright: 'Copyright © 2025 iFlytek Co., Ltd.'
        }
      }
    }
  },

  themeConfig: {
    logo: '/logo.png' // Placeholder if we had one
  }
})
