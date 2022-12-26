import Head from "next/head";
import { Inter } from "@next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <h2>Home page</h2>
      <ul>
        <li>
          <Link href="/client"> client</Link>
        </li>
        <li>
          <Link href="/blog"> Blog</Link>
        </li>
      </ul>
    </>
  );
}
