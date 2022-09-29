// Custom Imports Components
import ContactTitle from "./ContactTitle";
import Form from "./Form";

export default function Contact(props) {
  const googleMaps = `${props.googleMaps}`;

  return (
    <>
      {/* Contact Mobile */}
      <div className="md:hidden flex justify-center items-center flex-col font-ibmRegular w-[312px]">
        <div className="mb-[25px] w-[312px]">
          <ContactTitle title="Kontakt" text={props.text} />
        </div>
        <Form />
        <div className="flex justify-center items-center flex-col">
          <iframe
            src={googleMaps}
            title="Google Maps"
            className="mt-[52px] w-[312px] h-[230px]"
          ></iframe>
        </div>
      </div>

      {/* Contact tablet and desktop */}
      <div className="hidden md:flex flex-col justify-center items-center font-ibmRegular md:w-[677px] xl:w-[1024px]">
        <div className="md:w-[677px] xl:w-[1024px]">
          <ContactTitle title="Kontakt" text={props.text} />
        </div>
        <div className="flex justify-center items-center flex-row md:w-[677px] md:mt-[63px] xl:w-[1024px] xl:mt-[81px] xs:mb-[0px] xl:mb-[25px]">
          <Form />
          <div className="md:w-[18px] xl:w-[16px]"></div>
          <div className="flex justify-center items-center flex-col">
            <iframe
              src={googleMaps}
              title="Google Maps"
              className="md:w-[262px] md:h-[445px] xl:w-[608px] xl:h-[445px]"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
