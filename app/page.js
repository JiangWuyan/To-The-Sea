import { Metadata } from 'next/app';
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Metadata title="To The Sea | 出海新途">
        <meta name="description" content="Dedicated to enhancing the online investment and trading experience with AI technologies such as GPT models." />
      </Metadata>
      <h1>Let's rush to the sea!</h1>
      <p>Coming soon ^_^</p>
      <ul>
        <li>
          <Link href="/whois">
            域名查询
          </Link>
        </li>
      </ul>
    </>
  )
}
