import Image from "next/image";
import Link from "next/link";
import Footer from "../components/MainWrapper/Footer/Footer";
import Header from "../components/MainWrapper/Header/Header";
import Banner from "./index/Banner/Banner";
import Catalog from "./index/Catalog/Catalog";

export default function Home() {
  return (
        <>
        <Header/>
          <main>
            
              <nav>
                <ul>
                  <li><Link href="/catalog">Catalog</Link></li>
                  <li><Link href="/cart">Cart</Link></li>
                </ul>
              </nav>
              <h1>Main Page</h1>
              <Banner/>
              <Catalog/>
          </main>
          <Footer/>
        </>
  )
}
