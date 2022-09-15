import Head from "next/head";
import client from "../contentful";

import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";

export async function getStaticProps() {
  const res = await client.getEntries({ content_type: "contactDetails" });
  return {
    props: {
      contactDetails: res.items,
    },
  };
}
export default function Home({ contactDetails }) {
  // console.log(contactDetails);
  return (
    <Layout
      pageMeta={{
        title: "Majornas Böcker & Kaffe - Hem",
        description: "Hem Majornas Böcker & Kaffe",
      }}
    >
      <HeroSection />
    </Layout>
  );
}
