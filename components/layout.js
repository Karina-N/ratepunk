import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Ratepunk - We search for the best hotel rates!</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
