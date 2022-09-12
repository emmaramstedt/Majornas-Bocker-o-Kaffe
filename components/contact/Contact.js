// Next Imports
import Link from "next/link";
import Image from "next/image";

// Custom Imports Components
import Details from "./Details";
import ContactTitle from "./ContactTitle";
import ContactSection from "./ContactSection";
import PositionIcon from "./PositionIcon";

// Custom Imports Images
import HeroImage from "../../public/images/contact/opening-hours.svg";
import AdressImage from "../../public/images/contact/adress.svg";
import SocialMedia from "../../public/images/contact/social-media.svg";

export default function Contact(props) {
  const adress = `${props.zipCode}, ${props.city}`;
  const sendEmail = `mailto:${props.email}`;
  const googleMaps = `${props.googleMaps}`;
  const instagram = `${props.instagram}`;
  return (
    <>
      {/* Contact Section Mobile */}
      <div className="bg-defaultGray100  cm:hidden flex flex-col pt-[64px] font-spaceMono">
        <div className="flex justify-center items-center flex-col">
          <ContactTitle title="Kontakt" />

          <ContactSection>
            <div className="xs:block lg:hidden mt-[24px]">
              <Image
                src={HeroImage}
                alt="Picture of the author"
                width={313}
                height={62}
              />
            </div>
            <div className="w-[312px] mb-[24px]">
              <Details title="Tisdag-Fredag" text="11-18" />
              <Details title="Lördag" text="11-15" />
              <Details title="Söndag-Måndag" text="Stängt" />
            </div>
          </ContactSection>

          <ContactSection>
            <div className="xs:block lg:hidden mt-[24px]">
              <Image src={AdressImage} alt="adress" width={313} height={62} />
            </div>
            <Details title={props.streetAddress} text={adress} />
            <div className="mb-[16px]"></div>
            <Link
              href={googleMaps}
              passHref
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer"
            >
              <a
                target="_blank"
                className="flex items-left justify-left w-full text-left mb-[24px] text-[18px] text-link"
              >
                <span className="mr-[10px] ">Klicka för karta</span>{" "}
                <PositionIcon />
              </a>
            </Link>
          </ContactSection>

          <ContactSection>
            <div className="xs:block lg:hidden mt-[24px]">
              <Image
                src={SocialMedia}
                alt="Picture of the author"
                width={313}
                height={62}
              />
            </div>
            <Details title="Instagram" />
            <Link
              href={instagram}
              passHref
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer"
            >
              <a
                target="_blank"
                className="flex items-left justify-left w-full text-left mb-[24px] text-[18px] text-link"
              >
                @majornasbocker
              </a>
            </Link>
            <Details title="E-post" />
            <Link
              href={sendEmail}
              passHref
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer"
            >
              <a
                target="_blank"
                className="flex items-left justify-left w-full text-left text-[18px] mb-[24px]  text-link"
              >
                {props.email}
              </a>
            </Link>
            <Details title="Telefon" text={props.phoneNumber} />
          </ContactSection>
          <hr className="mt-[71px] mx-auto w-[100%] h-[2px] bg-gray-100  border-0 dark:bg-gray-700"></hr>
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
