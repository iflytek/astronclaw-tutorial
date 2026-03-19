---
layout: home

hero:
  name: "Hello AstronClaw"
  tagline: "Build deeply customizable cloud and desktop AI assistants based on OpenClaw's core capabilities."
  image:
    src: https://bjcdn.openstorage.cn/aicontest/2026-03-18/29c37a17-5b33-4804-90b5-85599c29e2d5.png
    alt: AstronClaw Logo
  actions:
    - theme: brand
      text: Get Cloud AstronClaw
      link: /en/guide/astronclaw/introduction
    - theme: alt
      text: Meet Desktop Loomy
      link: /en/guide/loomy/introduction
    - theme: alt
      text: Try Cloud AstronClaw
      link: https://agent.xfyun.cn/astron-claw
    - theme: alt
      text: Download Loomy Desktop
      link: https://loomy.xunfei.cn/

features:
  - title: 01 One-Click Cloud Deployment
    details: Minimalist process, zero code configuration, farewell to environment dependencies. Runs 24/7 in the cloud, available anytime, anywhere.
    link: /en/guide/astronclaw/getting-started
  - title: 02 Rich Built-in Skills System
    details: Supports 130+ official skills, one-click installation and use. Also supports conversational automatic installation and custom skill expansion.
    link: /en/guide/astronclaw/skills
  - title: 03 24/7 Multi-Channel Response
    details: Supports seamless integration with Feishu, DingTalk, and WeCom. Complete daily tasks in your familiar office collaboration software.
  - title: 04 Loomy Desktop Deep Collaboration
    details: Oriented towards real office scenarios, focusing on "low threshold, high security, strong adaptation, and active collaboration". Easy integration with localized tools.
    link: /en/guide/loomy/introduction
  - title: 05 Rich Typical Work Scenarios
    details: Covers multiple real business loops such as social media operation, daily office collaboration, investment monitoring, and e-commerce operation.
    link: /en/guide/loomy/scenarios
  - title: 06 High Security & Zero Maintenance Cost
    details: Platform hosting, enterprise-level security protection; Loomy's directory-level authorization ensures local data privacy, making AI land safely.

---

<br>
<div class="home-qr-section">
  <h2>Join the Community</h2>
  <p class="desc">Scan the QR code to join our official communities and chat with developers and users</p>

  <div class="qr-container">
    <div class="qr-card">
      <img src="/astronclaw-qr.jpg" alt="AstronClaw Official Community">
      <p>☁️ AstronClaw Community</p>
    </div>
    <div class="qr-card">
      <img src="/loomy-qr.png" alt="Loomy Community">
      <p>💻 Loomy Community</p>
    </div>
  </div>
</div>

<style>
.home-qr-section {
  text-align: center;
  padding: 0 24px;
}
.home-qr-section h2 {
  border-top: none;
  margin: 0;
  padding: 0;
}
.home-qr-section .desc {
  color: var(--vp-c-text-2);
  margin-top: 8px;
}
.qr-container {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 32px;
  flex-wrap: wrap;
}
.qr-card {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.qr-card img {
  width: 220px;
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
.qr-card p {
  margin-top: 12px;
  font-weight: 500;
}
@media (max-width: 768px) {
  .qr-container {
    gap: 24px;
  }
  .qr-card img {
    width: 180px;
  }
}
</style>