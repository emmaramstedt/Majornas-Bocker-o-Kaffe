// Client Import
import client from "../contentful";

// Custom Imports
import Layout from "../components/Layout";
import Contact from "../components/contact/Contact";
import Image from "next/image";

import Footer from "../components/footer/Footer";
import Heading from "../components/footer/Heading";
import OpeningHours from "../components/footer/OpeningHours";
import ContactFooter from "../components/footer/Contact";
import FooterDecor from "../public/images/footer/row.svg";
import InstagramLogo from "../public/images/footer/instagram.svg";
import EmailLogo from "../public/images/footer/email.svg";
import TelephoneLogo from "../public/images/footer/telephone.svg";

export async function getStaticProps() {
  const res = await client.getEntries({ content_type: "contactDetails" });
  return {
    props: {
      contactDetails: res.items,
    },
  };
}

export default function contactPage({ contactDetails }) {
  return (
    <>
      <Layout
        pageMeta={{
          title: `${contactDetails[0].fields.companyName} - Kontakt`,
          description: "Kontaktuppgifter",
        }}
      >
        <main className="mt-[80px]">
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
          />
        </main>
      </Layout>
      <Footer
        openingHours={
          <>
            <Heading footerTitle={contactDetails[0].fields.companyName} />
            <OpeningHours
              title={contactDetails[0].fields.openOneTitle}
              text={contactDetails[0].fields.openOneText}
            />
            <OpeningHours
              title={contactDetails[0].fields.openTwoTitle}
              text={contactDetails[0].fields.openTwoText}
            />
            <OpeningHours
              title={contactDetails[0].fields.openThreeTitle}
              text={contactDetails[0].fields.openThreeText}
            />
          </>
        }
        contact={
          <>
            <ContactFooter
              logo={InstagramLogo}
              instaName={contactDetails[0].fields.instagramName}
              instaUrl={contactDetails[0].fields.instagramUrl}
            />
            <ContactFooter
              logo={TelephoneLogo}
              text={contactDetails[0].fields.phoneNumber}
            />
            <ContactFooter
              logo={EmailLogo}
              text={contactDetails[0].fields.email}
            />
          </>
        }
        smallImages={
          <div className="w-full h-full flex-col relative">
            <div className="h-1/5 w-full relative">
              <Image
                className="h-full absolute object-cover animate-wiggle"
                src={FooterDecor}
                alt="Green shapes"
                layout="fill"
              />
            </div>
            <div className="h-1/5 w-full relative">
              <Image
                className="h-full absolute object-cover -scale-x-100"
                src={FooterDecor}
                alt="Green shapes"
                layout="fill"
              />
            </div>
            <div className="h-1/5 w-full relative">
              <Image
                className="h-full absolute object-cover animate-wiggle"
                src={FooterDecor}
                alt="Green shapes"
                layout="fill"
              />
            </div>
            <div className="h-1/5 w-full relative">
              <Image
                className="h-full absolute object-cover -scale-x-100"
                src={FooterDecor}
                alt="Green shapes"
                layout="fill"
              />
            </div>
            <div className="h-1/5 w-full relative">
              <Image
                className="h-full absolute object-cover animate-wiggle"
                src={FooterDecor}
                alt="Green shapes"
                layout="fill"
              />
            </div>
          </div>
        }
        bigImages={
          <div className="w-full h-full flex-col relative overflow-x-hidden">
            <div className="h-1/2 w-full relative">
              <Image
                className="h-full absolute object-cover animate-wiggle"
                src={FooterDecor}
                alt="Green shapes"
                layout="fill"
              />
            </div>
            <div className="h-1/2 w-full relative">
              <Image
                className="h-full absolute object-cover -scale-x-100"
                src={FooterDecor}
                alt="Green shapes"
                layout="fill"
              />
            </div>
          </div>
        }
      />
    </>
  );
}
