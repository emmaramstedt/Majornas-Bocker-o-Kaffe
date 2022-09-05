// Next Imports
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

// Custom Imports
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <Layout
      pageMeta={{
        title: "Hem",
        description: "Hem",
      }}
    >
      <HeroSection />
    </Layout>
  );
}
