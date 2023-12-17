import Head from 'next/head'
import Link from 'next/link'

export default function Page() {
  return (
    <>
      <Head>
        <title>To The Sea | 出海新途</title>
      </Head>
      <nav>
        <ul>
          <li>
            <Link href="/whois">
              域名查询
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
