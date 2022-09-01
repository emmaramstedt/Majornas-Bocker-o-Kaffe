import styles from "../styles/Home.module.css";
import client from "../contentful";

export async function getStaticProps() {
  const res = await client.getEntries({ content_type: "testmodel" });
  return {
    props: {
      testmodels: res.items,
    },
  };
}

export default function Home({ testmodels }) {
  console.log(testmodels);
  return <div className={styles.container}>hej</div>;
}
