import Head from "next/head";
import { useRouter } from "next/router";
import Header from "./header";
import Footer from "./footer";
import styles from "../styles/layout.module.css";
import Link from "next/link";
import Showcase from "./showcase";

export const siteTitle = "Axie Scholar Manager";

export default function Layout({
  title,
  description,
  keywords,
  children,
  home,
}) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {router.pathname === "/" && <Showcase />}
      <div className={styles.container}>{children}</div>

      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <Footer />
    </div>
  );
}
