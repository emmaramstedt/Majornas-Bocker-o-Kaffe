// Custom Imports
import Image from "next/image";
import Details from "./Details";
import ContactTitle from "./ContactTitle";

export default function Contact(props) {
  return (
    <>
      {/* Contact section mobile */}
      <div className="bg-defaultGray100 h-[1476px] cm:hidden flex flex-col pt-[70px] font-spaceMono">
        <div className="flex justify-center items-center flex-col">
          <ContactTitle title="Kontakt" />
          <div className="xs:block lg:hidden mt-[24px]">
            <Image
              src="/images/contact/contact-hero-mobile.png"
              alt="Picture of the author"
              width={312}
              height={312}
            />
          </div>
          <div className="w-[312px] mt-[8px]">
            <Details title="Tisdag-Fredag" text="11-18" />
            <Details title="Lördag" text="11-15" />
            <Details title="Allmänna vägen 22" text="414 60" />
            <p className="text-left xs:text-[20px] text-extendedTrueGray500">
              Göteborg
            </p>
            <Details title="Instagram" text="@majornasbocker" />
            <Details title="E-post" text={props.email} />
            <Details title="Telefon" text={props.phoneNumber} />
          </div>
        </div>
      </div>

      {/* Contact section tablet */}
      <div className="bg-defaultGray100 h-[1512px] xs:hidden lg:hidden cm:flex flex-col pt-[70px] font-spaceMono">
        <h1 className="text-center xs:text-[23px] sm:text-[28px] md:text-[35px] cm:text-[45px] lg:text-[50px] xl:text-[60px]  text-black">
          Kontakt - Tablet
        </h1>
      </div>

      {/* Contact section desktop */}
      <div className="bg-defaultGray100 h-[1712px] hidden lg:flex flex-col text-center pt-[70px] font-spaceMono">
        <h1 className="text-center xs:text-[23px] sm:text-[28px] md:text-[35px] cm:text-[45px] lg:text-[50px] xl:text-[60px]  text-black">
          Kontakt - Desktop
        </h1>
      </div>
    </>
  );
}
