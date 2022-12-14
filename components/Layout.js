// Next Imports
import { useRouter } from "next/router";
import Head from "next/head";

const Layout = ({ children, pageMeta }) => {
  const router = useRouter();

  const meta = {
    title: "Majornas Böcker & Kaffe",
    description: "En bokhandel i Majorna, Göteborg",
    type: "website",
    ...pageMeta,
  };
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Meta properties */}
        <meta
          property="og:url"
          content={`http://localhost:3000${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Majornas Böcker & Kaffe" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      {children}
    </>
  );
};

export default Layout;
