import AboutOffer from "./AboutOffer";

export default function AboutContent({ contentOne, contentTwo, title }) {
  return (
    <div className="md:mb-[128px]">
      <div className="aboutContainer font-spaceMono">
        <div className="md:max-w-[312px] lg:max-w-[416px]">
          <h1 className="mb-[16px] md:max-w-[255px]">{title}</h1>
          <div className="contentOne md:mb-[64px]">
            <p className="">{contentOne}</p>
          </div>
        </div>
        <div className="offer lg:self-center">
          <AboutOffer />
        </div>
        <div className="contentTwo mb-[40px] md:max-w-[317px] lg:max-w-[416px]">
          <p className="">{contentTwo}</p>
        </div>
      </div>
    </div>
  );
}
