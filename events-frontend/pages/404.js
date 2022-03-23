import { FaExclamationTriangle } from "react-icons/fa";

import Link from "next/link";
import Layout from "@/components/layout";
import styles from "@/styles/404.module.css";

export default function NotFoundPage() {
  return (
    <Layout title="Page Not Found">
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle /> <br />
          404
        </h1>
        <h4>There is nothing here</h4>
        <br />
        <Link href="/">Back Home</Link>
      </div>
    </Layout>
  );
}
