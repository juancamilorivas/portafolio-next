import Layout from "../components/Layout";
import Link from "next/link";

const custom500 = () => (
  <Layout>
    <div className="text-center">
      <h1>500</h1>
      <p>
        This page does not exists, please go to
        <Link href="/">
          Go to home
        </Link>
      </p>
    </div>
  </Layout>
);
export default custom500;