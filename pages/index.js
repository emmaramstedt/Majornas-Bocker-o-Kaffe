import Head from 'next/head';
import client from '../contentful';

import Layout from '../components/Layout';
import Footer from '../components/footer/Footer';
import Heading from '../components/footer/Heading';
import OpeningHours from '../components/footer/OpeningHours';
import Contact from '../components/footer/Contact';
import Image from 'next/image';
import FooterDecor from '../public/images/footer/row.svg';
import InstagramLogo from '../public/images/footer/instagram.svg';
import EmailLogo from '../public/images/footer/email.svg';
import TelephoneLogo from '../public/images/footer/telephone.svg';
import AboutOffer from '../components/about/AboutOffer';
import AboutWrapper from '../components/about/AboutWrapper';
import AboutHeader from '../components/about/AboutHeader';
import AboutContent from '../components/about/AboutContent';

export async function getStaticProps() {
  const res = await client.getEntries({
    content_type: 'contactDetails',
    content_type: 'footer',
  });

  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_KEY}`;
  const data = await fetch(url);
  const feed = await data.json();

  return {
    props: {
      contactDetails: res.items,
      footer: res.items,
      images: feed.data,
    },
  };
}

export default function Home({ contactDetails, footer, images }) {
  console.log(footer);
  return (
    <Layout
      pageMeta={{
        title: 'Majornas Böcker & Kaffe - Om Oss',
        description: 'Om Oss - Majornas Böcker & Kaffe',
      }}
    >
      <AboutWrapper>
        <AboutHeader
          title='Majornas Böcker & Kaffe'
          content='En trivsam bokhandel där man kan botanisera bland böcker, eller slå sig ner med en espresso och dagstidningen.'
        />
        <AboutOffer />
        <AboutContent content='Majornas böcker & kaffe är en oberoende bokhandel som öppnade sommaren 2019. Här finner du aktuell skönlitteratur, barnböcker, serieböcker och intressanta fackböcker. Förutom böcker säljs  också kort, pussel och spel samt en del pappersvaror och roliga presenter.' />
      </AboutWrapper>
      <div>
        <div className='grid grid-cols-1 md:grid-cols-3 max-w-3xl px-4 sm:px-6 gap-3 mx-auto'>
          {images &&
            images.map((image) => {
              return (
                <div key={image.id}>
                  <Image
                    className='object-cover aspect-square'
                    src={image.media_url}
                    alt={image.caption}
                    width={500}
                    height={500}
                  />
                </div>
              );
            })}
        </div>
      </div>
      <Footer
        openingHours={
          <>
            <Heading footerTitle={footer[0].fields.title} />
            <OpeningHours
              title={footer[0].fields.openOneTitle}
              text={footer[0].fields.openOneText}
            />
            <OpeningHours
              title={footer[0].fields.openTwoTitle}
              text={footer[0].fields.openTwoText}
            />
            <OpeningHours
              title={footer[0].fields.openThreeTitle}
              text={footer[0].fields.openThreeText}
            />
          </>
        }
        contact={
          <>
            <Contact
              logo={InstagramLogo}
              instaName={footer[0].fields.instagramName}
              instaUrl={footer[0].fields.instagramUrl}
            />
            <Contact logo={TelephoneLogo} text={footer[0].fields.phoneNumber} />
            <Contact logo={EmailLogo} text={footer[0].fields.email} />
          </>
        }
        smallImages={
          <div className='w-full h-full flex-col relative'>
            <div className='h-1/5 w-full relative'>
              <Image
                className='h-full absolute object-cover animate-wiggle'
                src={FooterDecor}
                alt='Green shapes'
                layout='fill'
              />
            </div>
            <div className='h-1/5 w-full relative'>
              <Image
                className='h-full absolute object-cover -scale-x-100'
                src={FooterDecor}
                alt='Green shapes'
                layout='fill'
              />
            </div>
            <div className='h-1/5 w-full relative'>
              <Image
                className='h-full absolute object-cover animate-wiggle'
                src={FooterDecor}
                alt='Green shapes'
                layout='fill'
              />
            </div>
            <div className='h-1/5 w-full relative'>
              <Image
                className='h-full absolute object-cover -scale-x-100'
                src={FooterDecor}
                alt='Green shapes'
                layout='fill'
              />
            </div>
            <div className='h-1/5 w-full relative'>
              <Image
                className='h-full absolute object-cover animate-wiggle'
                src={FooterDecor}
                alt='Green shapes'
                layout='fill'
              />
            </div>
          </div>
        }
        bigImages={
          <div className='w-full h-full flex-col relative overflow-x-hidden'>
            <div className='h-1/2 w-full relative'>
              <Image
                className='h-full absolute object-cover animate-wiggle'
                src={FooterDecor}
                alt='Green shapes'
                layout='fill'
              />
            </div>
            <div className='h-1/2 w-full relative'>
              <Image
                className='h-full absolute object-cover -scale-x-100'
                src={FooterDecor}
                alt='Green shapes'
                layout='fill'
              />
            </div>
          </div>
        }
      />
    </Layout>
  );
}
