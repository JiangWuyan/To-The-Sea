import { useState } from 'react';
import Head from 'next/head';

export default function Whois() {
  const [name, setName] = useState('');
  const [suffix, setSuffix] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const checkDomain = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://onereed.xyz/checkdomain?name=${name}&suffix=${suffix}`);
      const data = await response.text();
      setResult(data);
    } catch (error) {
      setResult('查询出错，请稍后重试');
      console.error('Error fetching domain info:', error);
    }
    setIsLoading(false);
  };

  return (
    <>
      <Head>
        <title>OneReed一苇 | 域名查询</title>
        <style>{`
          input[type="text"] {
              width: 300px;
              padding: 20px;
              margin: 5px 0;
          }
          button {
              padding: 20px 20px;
              margin: 5px 0;
          }
          .small-text {
              color: grey;
              font-size: 0.8em;
          }
        `}</style>
      </Head>
      <div>
        <h1>域名查询</h1>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="输入域名，例如 'onereed'" 
        />
        <input 
          type="text" 
          value={suffix} 
          onChange={(e) => setSuffix(e.target.value)} 
          placeholder="输入后缀，例如 'xyz'" 
        />
        <button onClick={checkDomain} disabled={isLoading}>
          {isLoading ? '查询中...' : '查询'}
        </button>
        <button onClick={() => { setName(''); setSuffix(''); setResult(''); }}>
          清空
        </button>
        <p className="small-text">
          *暂时支持 com, net, org, me, xyz, info, io, co, ai, biz 等后缀域名
        </p>
        <div>{result}</div>
      </div>
    </>
  );
}
