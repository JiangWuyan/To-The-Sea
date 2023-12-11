import { Metadata } from 'next/app';
import Link from 'next/link'

export default function Page() {
  return (
    <>
      <Metadata title="To The Sea | 出海新途"></Metadata>
      <h1>Let{'\''}s rush to the sea!</h1>
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