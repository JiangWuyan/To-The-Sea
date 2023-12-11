// 使用Next.js的API路由，不需要引入express、cors和node-fetch模块
// Next.js自动处理CORS和JSON请求解析

export default async function handler(req, res) {
    const { name, suffix } = req.query;
  
    try {
      // 修改请求的 URL 参数名称
      const response = await fetch(`https://whois.freeaiapi.xyz/?name=${name}&suffix=${suffix}`);
      if (response.ok) {
        // 获取响应数据并直接返回
        const data = await response.json();
        res.status(200).json(data);
      } else {
        // 处理失败响应
        res.status(response.status).json({ error: `Error: ${response.statusText}` });
      }
    } catch (error) {
      // 处理网络或其他错误
      res.status(500).json({ error: `Server Error: ${error.message}` });
    }
  }
  