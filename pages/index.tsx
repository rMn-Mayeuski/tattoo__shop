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
              <Banner/>
              <Catalog/>
          </main>
          <Footer/>
        </>
  )
}
