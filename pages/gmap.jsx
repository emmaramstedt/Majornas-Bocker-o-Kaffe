import Layout from '../components/Layout';

export default function Gmap() {
  return (
    <Layout
      pageMeta={{
        title: 'Karta',
        description: 'Karta',
      }}
    >
      <div>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17052.98568586934!2d11.938823!3d57.705871050000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff3b198ee830f%3A0xcabc91cd3263a328!2sMajornas%20b%C3%B6cker%20%26%20kaffe!5e0!3m2!1sen!2sse!4v1662454782342!5m2!1sen!2sse'
          width='600'
          height='450'
          style={{ border: 0 }}
          allowFullScreen
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
    </Layout>
  );
}
