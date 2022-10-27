import Link from "next/link";

export default function Home() {
  return (
        <main >
          <nav>
            <ul>
              <li><Link href="/catalog">Catalog</Link></li>
              <li><Link href="/cart">Cart</Link></li>
            </ul>
          </nav>
          <h1>Main Page</h1>
        </main>
  )
}
