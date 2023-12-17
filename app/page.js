import Link from 'next/link'

export default function Page() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/whois">
            域名查询
          </Link>
        </li>
      </ul>
    </nav>
  );
}
