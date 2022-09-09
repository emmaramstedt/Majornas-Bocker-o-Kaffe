import Image from "next/image";

export default function Contact(props) {
  return (
    <>
      {/* Contact section mobile */}
      <div className="bg-defaultGray100 h-[1476px] cm:hidden flex flex-col pt-[70px] font-spaceMono">
        <div className="flex justify-center items-center flex-col">
          <div className="w-[312px] mt-[64px]">
            <h1 className="text-left xs:text-[32px] md:text-[35px] text-black">
              Kontakt
            </h1>
          </div>
          <div className="xs:block lg:hidden mt-[24px]">
            <Image
              src="/images/contact/contact-hero-mobile.png"
              alt="Picture of the author"
              width={312}
              height={312}
            />
          </div>
          <div className="w-[312px] mt-[24px]">
            <h2 className="text-left xs:text-[24px] text-extendedTrueGray900">
              Tisdag-Fredag
            </h2>
            <p className="text-left xs:text-[20px] mt-[8px]  text-extendedTrueGray500">
              11-18
            </p>
            <h2 className="text-left xs:text-[24px] mt-[16px]  text-extendedTrueGray900">
              Lördag
            </h2>
            <p className="text-left xs:text-[20px] mt-[8px]  text-extendedTrueGray500">
              11-15
            </p>
            <h2 className="text-left xs:text-[24px] mt-[16px]  text-extendedTrueGray900">
              Allmänna vägen 22
            </h2>
            <p className="text-left xs:text-[20px] mt-[8px]  text-extendedTrueGray500">
              414 60
            </p>
            <p className="text-left xs:text-[20px] text-extendedTrueGray500">
              Göteborg
            </p>
            <h2 className="text-left xs:text-[24px] mt-[16px]  text-extendedTrueGray900">
              Instagram
            </h2>
            <p className="text-left xs:text-[20px] mt-[8px]  text-extendedTrueGray500">
              @majornasbocker
            </p>
            <h2 className="text-left xs:text-[24px] mt-[16px]  text-extendedTrueGray900">
              E-post
            </h2>
            <p className="text-left xs:text-[20px] mt-[8px]  text-extendedTrueGray500">
              info@majornasbocker.se
            </p>
            <h2 className="text-left xs:text-[24px] mt-[16px]  text-extendedTrueGray900">
              Telefon
            </h2>
            <p className="text-left xs:text-[20px] mt-[8px]  text-extendedTrueGray500">
              {props.phoneNumber}
            </p>
          </div>
        </div>
      </div>

      {/* Second section tablet */}
      <div className="bg-defaultGray100 h-[1512px] xs:hidden lg:hidden cm:flex flex-col pt-[70px] font-spaceMono">
        <h1 className="text-center xs:text-[23px] sm:text-[28px] md:text-[35px] cm:text-[45px] lg:text-[50px] xl:text-[60px]  text-black">
          Kontakt - Tablet
        </h1>
      </div>

      {/* Second section desktop */}
      <div className="bg-defaultGray100 h-[1712px] hidden lg:flex flex-col text-center pt-[70px] font-spaceMono">
        <h1 className="text-center xs:text-[23px] sm:text-[28px] md:text-[35px] cm:text-[45px] lg:text-[50px] xl:text-[60px]  text-black">
          Kontakt - Desktop
        </h1>
      </div>
    </>
  );
}
