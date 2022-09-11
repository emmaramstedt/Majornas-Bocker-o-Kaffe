// Next Imports
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState, useEffect, ReactElement, Children } from "react";
// Custom Imports
import Footer from "./Footer";
import Navbar from "../components/Navbar";

const Layout = ({ children, pageMeta }) => {
  const router = useRouter();

  const meta = {
    title: "Majornas böcker & kaffes",
    description:
      "This website offers second-hand housing for both private people",
    type: "website",
    ...pageMeta,
  };
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:url"
          content={`http://localhost:3000${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Blog for dev" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
