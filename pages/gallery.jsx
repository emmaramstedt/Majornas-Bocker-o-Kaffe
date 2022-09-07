import Layout from '../components/Layout';
import Image from 'next/image';

export const getStaticProps = async () => {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_KEY}`;

  const data = await fetch(url);
  const feed = await data.json();

  return {
    props: {
      feed,
    },
  };
};

export default function Gallery({ feed }) {
  const images = feed.data;
  console.log(images);
  return (
    <Layout
      pageMeta={{
        title: 'Galleri',
        description: 'Galleri',
      }}
    >
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
    </Layout>
  );
}
