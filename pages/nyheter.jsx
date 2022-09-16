import AboutOffer from "../components/about/AboutOffer";
import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout
      pageMeta={{
        title: "Karta",
        description: "Karta",
      }}
    >
      <AboutOffer />
    </Layout>
  );
}
