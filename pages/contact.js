import Layout from "../components/Layout";
import Contact from "../components/Contact";

export default function contactPage() {
  return (
    <>
      <Layout
        pageMeta={{
          title: "Majornas Böcker & Kaffe - Kontakt",
          description: "Kontaktuppgifter",
        }}
      >
        <Contact />
      </Layout>
    </>
  );
}
