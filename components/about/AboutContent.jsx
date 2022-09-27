import AboutOffer from "./AboutOffer";

export default function AboutContent({ contentOne, ContentTwo }) {
  return (
    <>
      <div className="w-full flex xs:justify-center md:justify-start lg:justify-end mb-[32px] lg:mb-[46px]">
        <div className="xs:max-w-[100%] md:max-w-[400px] mb-[32px]">
          <div>
            <p>{contentOne}</p>
          </div>
          <AboutOffer />
          <div>
            <p>{contentTwo}</p>
          </div>
        </div>
      </div>
    </>
  );
}
