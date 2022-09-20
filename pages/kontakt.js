// Client Import
import client from "../contentful";

// Custom Imports
import Layout from "../components/Layout";
import Contact from "../components/contact/Contact";

export async function getStaticProps() {
  const res = await client.getEntries({ content_type: "contactDetails" });
  return {
    props: {
      contactDetails: res.items,
    },
  };
}

export default function contactPage({ contactDetails }) {
  // console.log(contactDetails[0].fields);
  return (
    <>
      <Layout
        pageMeta={{
          title: `${contactDetails[0].fields.companyName} - Kontakt`,
          description: "Kontaktuppgifter",
        }}
      >
        <main>
          <Contact
            phoneNumber={contactDetails[0].fields.phoneNumber}
            email={contactDetails[0].fields.email}
            city={contactDetails[0].fields.city}
            zipCode={contactDetails[0].fields.zipCode}
            streetAddress={contactDetails[0].fields.streetAddress}
            googleMaps={contactDetails[0].fields.googleMaps}
            instagram={contactDetails[0].fields.instagram}
            openingHours1={contactDetails[0].fields.openingHours1}
            openingHours2={contactDetails[0].fields.openingHours2}
            openingHours3={contactDetails[0].fields.openingHours3}
            openingHoursTitle1={contactDetails[0].fields.openingHoursTitle1}
            openingHoursTitle2={contactDetails[0].fields.openingHoursTitle2}
            openingHoursTitle3={contactDetails[0].fields.openingHoursTitle3}
            googleMapsEmbedded={contactDetails[0].fields.googleMapsEmbedded}
          />
        </main>
      </Layout>
    </>
  );
}
