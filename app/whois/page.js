import { Metadata } from 'next/app';
import { useState } from 'react';

export default function Whois() {
  const [name, setName] = useState('');
  const [suffix, setSuffix] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult] = useState(null);

  const checkDomain = async () => {
    setIsChecking(true);
    try {
      const response = await fetch(`/api/checkdomain?name=${name}&suffix=${suffix}`);
      if (!response.ok) {
        throw new Error('网络响应不是OK');
      }
      const data = await response.json();
      setResult(data);
    } catch (error) {
      setResult({ error: error.message });
    } finally {
      setIsChecking(false);
    }
  };

  const displayResult = () => {
    if (!result) {
      return <p>请输入查询信息</p>;
    }

    if (result.error) {
      return <p>查询失败：{result.error}</p>;
    }

    if (result.status === "ok") {
      return (
        <>
          <p>查询成功！</p>
          {/* ...显示其他结果信息 */}
        </>
      );
    } else {
      return <p>查询失败！请联系jhhofficail@gmail.com</p>;
    }
  };

  return (
    <>
      <Metadata title="To The Sea | 域名查询">
      <meta name="description" content="Dedicated to enhancing the online investment and trading experience with AI technologies such as GPT models." />      </Metadata>
      <h1>域名查询</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && checkDomain()}
        placeholder="请输入要查询的域名"
      />
      <input
        type="text"
        value={suffix}
        onChange={(e) => setSuffix(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && checkDomain()}
        placeholder="后缀"
      />
      <button onClick={checkDomain} disabled={isChecking}>
        {isChecking ? '查询中...' : '查询'}
      </button>
      <div id="result">
        {displayResult()}
      </div>
    </>
  );
}
