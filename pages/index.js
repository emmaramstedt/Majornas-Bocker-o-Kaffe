import Head from "next/head";
import client from "../contentful";

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
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Majornas Böcker & Kaffe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <p className="mt-3 text-2xl">check the console</p>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t"></footer>
    </div>
  );
}
