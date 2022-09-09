import Layout from "../components/Layout";
import Contact from "../components/Contact";

import client from "../contentful";

export async function getStaticProps() {
  const res = await client.getEntries({ content_type: "contactDetails" });
  return {
    props: {
      contactDetails: res.items,
    },
  };
}

export default function contactPage({ contactDetails }) {
  // console.log(contactDetails[0].fields.phoneNumber);
  return (
    <>
      <Layout
        pageMeta={{
          title: "Majornas Böcker & Kaffe - Kontakt",
          description: "Kontaktuppgifter",
        }}
      >
        <Contact phoneNumber={contactDetails[0].fields.phoneNumber} />
      </Layout>
    </>
  );
}
