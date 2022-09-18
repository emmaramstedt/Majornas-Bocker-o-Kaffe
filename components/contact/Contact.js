// Next Imports
import Link from "next/link";
import Image from "next/image";

// Custom Imports Components
import Details from "./Details";
import ContactTitle from "./ContactTitle";
import ContactSection from "./ContactSection";
import PositionIcon from "./PositionIcon";

// Custom Imports Images
import OpeningHours from "../../public/images/contact/opening-hours.svg";
import AdressImage from "../../public/images/contact/adress.svg";
import AdressRotated from "../../public/images/contact/adress-rotated.svg";
import SocialMedia from "../../public/images/contact/social-media.svg";

export default function Contact(props) {
  const adress = `${props.zipCode}, ${props.city}`;
  const sendEmail = `mailto:${props.email}`;
  const googleMaps = `${props.googleMaps}`;
  const instagram = `${props.instagram}`;
  const googleMapsEmbedded = `${props.googleMapsEmbedded}`;

  return (
    <>
      {/* Contact Section Mobile */}
      <div className="md:hidden flex flex-col pt-[64px] font-spaceMono">
        <div className="flex justify-center items-center flex-col">
          <div className="mt-[40px] mb-[16px]">
            <ContactTitle title="Kontakt" />
          </div>

          <ContactSection>
            <div className="mt-[24px]">
              <Image
                src={OpeningHours}
                alt="Picture of the author"
                width={312}
                height={62}
              />
            </div>
            <div className="w-[312px] mb-[24px]">
              <Details
                title={props.openingHoursTitle1}
                text={props.openingHours1}
              />
              <Details
                title={props.openingHoursTitle2}
                text={props.openingHours2}
              />
              <Details
                title={props.openingHoursTitle3}
                text={props.openingHours3}
              />
            </div>
          </ContactSection>

          <ContactSection>
            <div className="mt-[24px]">
              <Image src={AdressImage} alt="adress" width={312} height={62} />
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
            <div className="mt-[24px]">
              <Image
                src={SocialMedia}
                alt="Picture of the author"
                width={312}
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
      <div className="xs:hidden xl:hidden md:flex flex-col pt-[70px] font-spaceMono">
        <ContactSection>
          <div className="flex justify-center items-center mt-[40px] flex-row">
            <div className=" flex justify-center flex-col">
              <ContactTitle title="Kontakt" />
              <p className="text-left text-extendedTrueGray500 xs:text-[18px] w-[296px] mb-[130px] mt-[4px] ">
                Besök gärna mig i min butik, och tveka inte på att ställa
                frågor.
              </p>
              <Image
                src={SocialMedia}
                alt="Picture of the author"
                width={312}
                height={62}
              />
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
                  className="flex items-left justify-left w-full text-left text-[18px] text-link"
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
                  className="flex items-left justify-left w-full text-left text-[18px] text-link"
                >
                  {props.email}
                </a>
              </Link>
              <Details title="Telefon" text={props.phoneNumber} />
            </div>
            <div className=" w-[40px] "></div>
            <div className="flex justify-center items-center flex-col ">
              <Image
                src={OpeningHours}
                alt="Picture of the author"
                width={312}
                height={62}
              />
              <div className="w-[312px] mt-[10px] ">
                <Details
                  title={props.openingHoursTitle1}
                  text={props.openingHours1}
                />
                <Details
                  title={props.openingHoursTitle2}
                  text={props.openingHours2}
                />
                <Details
                  title={props.openingHoursTitle3}
                  text={props.openingHours3}
                />
                <div className=" mb-[40px] "></div>
                <Image
                  src={AdressRotated}
                  alt="adress"
                  width={312}
                  height={62}
                />
                <Details title={props.streetAddress} text={adress} />
                <div className="mb-[24px]"></div>
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
                    className="flex items-left justify-left w-full text-left text-[18px] text-link"
                  >
                    <span className="mr-[10px] ">Klicka för karta</span>{" "}
                    <PositionIcon />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </ContactSection>
        <div className="flex justify-center items-center flex-col">
          <iframe
            src={googleMapsEmbedded}
            title="Google Maps"
            className=" mt-[30px] mb-[40px] w-[672px] h-[336px] "
          ></iframe>
        </div>
      </div>

      {/* Contact section desktop */}
      <div className="pb-[40px] hidden xl:flex flex-col text-center pt-[70px] font-spaceMono">
        <ContactSection>
          <div className="flex justify-center items-center mt-[40px] flex-row">
            <div className=" flex justify-center flex-col">
              <ContactTitle title="Kontakt" />
              <p className="text-left text-extendedTrueGray500 xs:text-[18px] w-[296px] mb-[32px] mt-[4px] ">
                Besök gärna mig i min butik, och tveka inte på att ställa
                frågor.
              </p>
              <Image
                src={OpeningHours}
                alt="öppettider"
                width={312}
                height={62}
              />
              <div className=" mt-[24px] w-[312px] ">
                <Details
                  title={props.openingHoursTitle1}
                  text={props.openingHours1}
                />
                <Details
                  title={props.openingHoursTitle2}
                  text={props.openingHours2}
                />
                <Details
                  title={props.openingHoursTitle3}
                  text={props.openingHours3}
                />
                <div className=" mb-[32px] "></div>
              </div>
              <Image
                src={SocialMedia}
                alt="Picture of the author"
                width={312}
                height={62}
              />
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
                  className="flex items-left justify-left w-full text-left text-[18px] text-link"
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
                  className="flex items-left justify-left w-full text-left text-[18px] text-link"
                >
                  {props.email}
                </a>
              </Link>
              <Details title="Telefon" text={props.phoneNumber} />
            </div>
            <div className=" w-[104px] "></div>
            <div className=" flex justify-left items-left text-left flex-col ">
              <div className=" h-[140px] "></div>

              <div className=" mt-[0px] ">
                <Image
                  src={AdressRotated}
                  alt="adress"
                  width={312}
                  height={62}
                />
                <Details title={props.streetAddress} text={adress} />
                <div className="mb-[24px]"></div>
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
                    className="flex items-left justify-left w-full text-left text-[18px] text-link"
                  >
                    <span className="mr-[10px] ">Klicka för karta</span>{" "}
                    <PositionIcon />
                  </a>
                </Link>
                <iframe
                  src={googleMapsEmbedded}
                  title="Google Maps"
                  className=" mt-[48px] w-[608px] h-[446px] "
                ></iframe>
              </div>
            </div>
          </div>
        </ContactSection>
      </div>
    </>
  );
}
