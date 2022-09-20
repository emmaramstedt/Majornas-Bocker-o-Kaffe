import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps, footer }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
