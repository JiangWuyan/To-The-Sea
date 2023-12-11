import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>To The Sea | 出海新途</title>
        <meta name="description" content="Dedicated to enhancing the online investment and trading experience with AI technologies such as GPT models." />
      </Head>
      <body>
        <h1>Let's rush to the sea!</h1>
        <p>Coming soon ^_^</p>
        <ul>
          <li>
            <Link href="/whois">
              <a>域名查询</a>
            </Link>
          </li>
        </ul>
      </body>
    </>
  );
}
