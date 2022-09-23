// Client Import
import client from '../contentful';

// Custom Imports
import Layout from '../components/Layout';
import Contact from '../components/contact/Contact';
import Image from 'next/image';

import Footer from '../components/footer/Footer';
import Heading from '../components/footer/Heading';
import OpeningHours from '../components/footer/OpeningHours';
import ContactInsta from '../components/footer/ContactInsta';
import ContactPhone from '../components/footer/ContactPhone';
import ContactEmail from '../components/footer/ContactEmail';
import FooterDecor from '../public/images/footer/row.svg';
import FooterDecorTwo from '../public/images/footer/row2.svg';
import InstagramLogo from '../public/images/footer/instagram.svg';
import EmailLogo from '../public/images/footer/email.svg';
import TelephoneLogo from '../public/images/footer/telephone.svg';

export async function getStaticProps() {
  const res = await client.getEntries({ content_type: 'contactDetails' });
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
          description: 'Kontaktuppgifter',
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
            <ContactInsta
              logo={InstagramLogo}
              instaName={contactDetails[0].fields.instagramName}
              instaUrl={contactDetails[0].fields.instagramUrl}
            />
            <ContactPhone
              logo={TelephoneLogo}
              text={contactDetails[0].fields.phoneNumber}
            />
            <ContactEmail
              logo={EmailLogo}
              text={contactDetails[0].fields.email}
            />
          </>
        }
        smallImages={
          <div className='w-full h-full flex-col relative'>
            <div className='h-1/5 w-full relative'>
              <Image
                className='h-full absolute object-cover animate-wiggleRight'
                src={FooterDecor}
                alt='Green shapes'
                layout='fill'
              />
            </div>
            <div className='h-1/5 w-full relative'>
              <Image
                className='h-full absolute object-cover animate-wiggleLeft'
                src={FooterDecorTwo}
                alt='Green shapes'
                layout='fill'
              />
            </div>
            <div className='h-1/5 w-full relative'>
              <Image
                className='h-full absolute object-cover animate-wiggleRight'
                src={FooterDecor}
                alt='Green shapes'
                layout='fill'
              />
            </div>
            <div className='h-1/5 w-full relative'>
              <Image
                className='h-full absolute object-cover animate-wiggleLeft'
                src={FooterDecorTwo}
                alt='Green shapes'
                layout='fill'
              />
            </div>
            <div className='h-1/5 w-full relative'>
              <Image
                className='h-full absolute object-cover animate-wiggleRight'
                src={FooterDecor}
                alt='Green shapes'
                layout='fill'
              />
            </div>
          </div>
        }
        bigImages={
          <div className='w-full h-full flex-col relative'>
            <div className='h-1/2 w-full relative'>
              <Image
                className='h-full absolute object-cover animate-wiggleRight'
                src={FooterDecor}
                alt='Green shapes'
                layout='fill'
              />
            </div>
            <div className='h-1/2 w-full relative'>
              <Image
                className='h-full absolute object-cover animate-wiggleLeft'
                src={FooterDecorTwo}
                alt='Green shapes'
                layout='fill'
              />
            </div>
          </div>
        }
      />
    </>
  );
}
