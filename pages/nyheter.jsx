import Layout from "../components/Layout";
import NewsCard from "../components/news/NewsCard";
import NewsHeader from "../components/news/NewsHeader";

import client from "../contentful";
import Image from "next/image";

import Footer from "../components/footer/Footer";
import Heading from "../components/footer/Heading";
import OpeningHours from "../components/footer/OpeningHours";
import Contact from "../components/footer/Contact";
import FooterDecor from "../public/images/footer/row.svg";
import InstagramLogo from "../public/images/footer/instagram.svg";
import EmailLogo from "../public/images/footer/email.svg";
import TelephoneLogo from "../public/images/footer/telephone.svg";

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

export default function newsFeed({ contactDetails }) {
  return (
    <>
      <Layout>
        <main>
          <NewsHeader
            Header="Kommande nyheter & events"
            Content="Bokhandeln anordnar regelbundet författarkvällar. En rad uppmärksammade och intressanta författare har gästat bokhandeln."
            Button="Se tidigare event"
          />
          <NewsCard
            NewsCategory="Kategori"
            NewsTitle="Sandra Grehn"
            NewsContent="Vi som arbetar med våra kroppar"
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
    </>
  );
}
