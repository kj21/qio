import Head from "next/head";
import Layout from "../components/layout";
import Link from "next/link";

export default function dashboard() {
  return (
    <Layout>
      <p>Dashboard</p>
      <Link href="/">
        <a>back</a>
      </Link>
    </Layout>
  );
}
