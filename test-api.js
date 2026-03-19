async function test() {
  try {
    const response = await fetch('https://maas-coding-api.cn-huabei-1.xf-yun.com/v2/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 47bc740733f5f73523f329423ea23a46:MjYwZGM4MGMzODdlYjI4YWY1NTY3Y2Mz'
      },
      body: JSON.stringify({
        model: 'astron-code-latest',
        messages: [{ role: 'user', content: '你好' }]
      })
    });
    const text = await response.text();
    console.log(response.status, text);
  } catch (err) {
    console.error(err);
  }
}

test();
