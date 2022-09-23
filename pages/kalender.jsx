import Layout from '../components/Layout';
import EventsCard from '../components/events/EventsCard';
import EventsHeader from '../components/events/EventsHeader';
import client from '../contentful';
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

import { useState, useEffect } from 'react';
import EventsButton from '../components/events/EventsButton';
import EventsWrapper from '../components/events/EventsWrapper';
import EventsCardsWrapper from '../components/events/EventsCardsWrapper';

export async function getStaticProps() {
  const res = await client.getEntries({
    content_type: 'contactDetails',
  });
  return {
    props: {
      contactDetails: res.items,
    },
  };
}

export default function EventsFeed({ contactDetails }) {
  const [evenemangItems, setEvenemangItems] = useState(null);
  useEffect(() => {
    client
      .getEntries({
        content_type: 'evenemang',
        order: '-fields.date',
      })
      .then((entries) => {
        setEvenemangItems(entries.items);
      });
  }, []);
  return (
    <>
      <Layout>
        <main>
          <EventsWrapper>
            <EventsHeader
              EventHeaderTitle='Kommande nyheter & events'
              EventHeaderContent='Bokhandeln anordnar regelbundet författarkvällar. En rad uppmärksammade och intressanta författare har gästat bokhandeln.'
            />
            <EventsButton EventsButtonText='hej' />
            <EventsCardsWrapper>
              {evenemangItems &&
                evenemangItems.map((event, i) => {
                  return (
                    <EventsCard
                      key={i}
                      EventCategory={event.fields.category}
                      EventTitle={event.fields.title}
                      EventContent={event.fields.description}
                      EventDate={event.fields.date.substring(0, 10)}
                      EventTime={event.fields.date.substring(11)}
                      EventLink={event.fields.Link}
                      EventLinkText={event.fields.LinkText}
                    />
                  );
                })}
            </EventsCardsWrapper>
          </EventsWrapper>
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
