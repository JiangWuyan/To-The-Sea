export default async function handler(req, res) {
    if (req.method === 'GET') {
      const { name, suffix } = req.query;
  
      try {
        const response = await fetch(`https://whois.freeaiapi.xyz/?name=${name}&suffix=${suffix}`);
        if (response.ok) {
          const data = await response.json();
          res.status(200).json(data);
        } else {
          res.status(response.status).json({ error: response.statusText });
        }
      } catch (error) {
        res.status(500).json({ error: `Server Error: ${error.message}` });
      }
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }
  }
  