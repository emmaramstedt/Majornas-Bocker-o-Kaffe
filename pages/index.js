import Head from "next/head";
import client from "../contentful";

import Layout from "../components/Layout";
import Footer from "../components/footer/Footer";
import Heading from "../components/footer/Heading";
import OpeningHours from "../components/footer/OpeningHours";
import Contact from "../components/footer/Contact";
import Image from "next/image";
import FooterDecor from "../public/images/footer/row.svg";
import InstagramLogo from "../public/images/footer/instagram.svg";
import EmailLogo from "../public/images/footer/email.svg";
import TelephoneLogo from "../public/images/footer/telephone.svg";
import AboutOffer from "../components/about/AboutOffer";
import AboutWrapper from "../components/about/AboutWrapper";
import AboutHeader from "../components/about/AboutHeader";
import AboutContent from "../components/about/AboutContent";

export async function getStaticProps() {
  const res = await client.getEntries({
    content_type: "contactDetails",
  });
  return {
    props: {
      contactDetails: res.items,
    },
  };
}

export default function Home({ contactDetails }) {
  return (
    <Layout>
      <main>
        <AboutWrapper>
          <AboutHeader
            title="Majornas Böcker & Kaffe"
            content="En trivsam bokhandel där man kan botanisera bland böcker, eller slå sig ner med en espresso och dagstidningen."
          />
          <AboutOffer />
          <AboutContent content="Majornas böcker & kaffe är en oberoende bokhandel som öppnade sommaren 2019. Här finner du aktuell skönlitteratur, barnböcker, serieböcker och intressanta fackböcker. Förutom böcker säljs  också kort, pussel och spel samt en del pappersvaror och roliga presenter." />
        </AboutWrapper>
      </main>
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
            <Contact
              logo={InstagramLogo}
              instaName={contactDetails[0].fields.instagramName}
              instaUrl={contactDetails[0].fields.instagramUrl}
            />
            <Contact
              logo={TelephoneLogo}
              text={contactDetails[0].fields.phoneNumber}
            />
            <Contact logo={EmailLogo} text={contactDetails[0].fields.email} />
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
    </Layout>
  );
}
