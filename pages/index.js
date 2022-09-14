import Head from 'next/head';
import client from '../contentful';

import Layout from '../components/Layout';
import Footer from '../components/footer/Footer';
import HeroSection from '../components/HeroSection';
import Heading from '../components/footer/Heading';
import OpeningHours from '../components/footer/OpeningHours';
import Contact from '../components/footer/Contact';
import Image from 'next/image';
import FooterDecor from '../public/images/footer/row.svg';
import InstagramLogo from '../public/images/footer/instagram.svg';
import EmailLogo from '../public/images/footer/email.svg';
import TelephoneLogo from '../public/images/footer/telephone.svg';

export async function getStaticProps() {
  const res = await client.getEntries({
    content_type: 'contactDetails',
    content_type: 'footer',
  });
  return {
    props: {
      contactDetails: res.items,
      footer: res.items,
    },
  };
}

export default function Home({ contactDetails, footer }) {
  console.log(footer);
  return (
    <Layout
      pageMeta={{
        title: 'Majornas Böcker & Kaffe - Hem',
        description: 'Hem Majornas Böcker & Kaffe',
      }}
    >
      <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
          <p className='mt-3 text-2xl'>check the console</p>
        </main>

        <footer className='flex items-center justify-center w-full h-24 border-t'></footer>
      </div>
      <HeroSection />
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
          <div className='w-full h-full flex-col relative overflow-x-hidden'>
            <div className='h-1/5 w-screen'>
              <Image
                src={FooterDecor}
                alt='Green shapes'
                layout='responsive'
                objectFit='cover'
              />
            </div>
            <div className='h-1/5 w-screen'>
              <Image
                src={FooterDecor}
                alt='Green shapes'
                layout='responsive'
                objectFit='cover'
              />
            </div>
            <div className='h-1/5 w-screen'>
              <Image
                src={FooterDecor}
                alt='Green shapes'
                layout='responsive'
                objectFit='cover'
              />
            </div>
            <div className='h-1/5 w-screen'>
              <Image
                src={FooterDecor}
                alt='Green shapes'
                layout='responsive'
                objectFit='cover'
              />
            </div>
            <div className='h-1/5 w-screen'>
              <Image
                src={FooterDecor}
                alt='Green shapes'
                layout='responsive'
                objectFit='cover'
              />
            </div>
          </div>
        }
        bigImages={
          <div className='w-full h-full flex-col overflow-x-hidden'>
            <div className='h-1/2 w-screen'>
              <Image
                src={FooterDecor}
                alt='Green shapes'
                layout='responsive'
                objectFit='cover'
              />
            </div>
            <div className='h-1/2 w-screen'>
              <Image
                src={FooterDecor}
                alt='Green shapes'
                layout='responsive'
                objectFit='cover'
              />
            </div>
          </div>
        }
      />
    </Layout>
  );
}
