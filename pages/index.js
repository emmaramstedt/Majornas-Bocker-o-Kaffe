import Head from "next/head";
import client from "../contentful";
import React from "react";

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
import Instagram from "../components/about/Instagram";

export async function getStaticProps() {
  const res = await client.getEntries({
    content_type: "contactDetails",
  });

  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_KEY}`;
  let data = await fetch(url);
  const feed = await data.json();

  return {
    props: {
      contactDetails: res.items,
      images: feed.data,
    },
  };
}

export function captionLength(text) {
  if (text.length >= 100) {
    const dots = "...";
    const slicedText = text.slice(0, 80).trimEnd();
    return slicedText.concat(slicedText, dots);
  }
  return text;
}

let isMobile = true;

const WidthOfWindow = () => {
  const [width, setWidth] = React.useState(0);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
    isMobile = window.innerWidth < 1024 ? true : false;
  };
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  return isMobile;
};

export function numberOfImages(images) {
  if (WidthOfWindow()) {
    return images.slice(0, 4);
  }
  return images;
}

export default function Home({ contactDetails, images }) {
  console.log(images);
  console.log(WidthOfWindow());
  return (
    <Layout
      pageMeta={{
        title: "Majornas Böcker & Kaffe - Om Oss",
        description: "Om Oss - Majornas Böcker & Kaffe",
      }}
    >
      <main>
        <AboutWrapper>
          <AboutHeader
            title="Majornas Böcker & Kaffe"
            content="En trivsam bokhandel där man kan botanisera bland böcker, eller slå sig ner med en espresso och dagstidningen."
          />
          <AboutOffer />
          <AboutContent content="Majornas böcker & kaffe är en oberoende bokhandel som öppnade sommaren 2019. Här finner du aktuell skönlitteratur, barnböcker, serieböcker och intressanta fackböcker. Förutom böcker säljs  också kort, pussel och spel samt en del pappersvaror och roliga presenter." />
        </AboutWrapper>
        <Instagram />
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xs:mx-[8%] md:mx-[6%] gap-6 md:gap-8 lg:gap-12 mx-auto">
            {images &&
              numberOfImages(images).map((image) => {
                return (
                  <div className="flex flex-col pt-10" key={image.id}>
                    <Image
                      className="object-cover aspect-square"
                      src={image.media_url}
                      alt={image.caption}
                      width={500}
                      height={500}
                    />
                    <a
                      className="font-ibmRegular text-base lg:text-lg pt-2"
                      href={image.permalink}
                    >
                      {captionLength(image.caption)}
                    </a>
                  </div>
                );
              })}
          </div>
        </div>
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
