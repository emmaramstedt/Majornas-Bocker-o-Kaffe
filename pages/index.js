// Next Imports
import Head from "next/head";
import client from "../contentful";

// Custom Imports
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";

export async function getStaticProps() {
  const res = await client.getEntries({ content_type: "testmodel" });
  return {
    props: {
      testmodels: res.items,
    },
  };
}

export default function Home({ testmodels }) {
  console.log(testmodels);
  return (
    <Layout
      pageMeta={{
        title: "Hem",
        description: "Hem",
      }}
    >
      <HeroSection />
    </Layout>
  );
}
