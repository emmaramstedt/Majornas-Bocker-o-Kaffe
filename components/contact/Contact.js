// Custom Imports Components
import ContactTitle from "./ContactTitle";
import Form from "./Form";

export default function Contact(props) {
  const googleMaps = `${props.googleMaps}`;

  return (
    <>
      {/* Contact Mobile */}
      <div className="md:hidden flex flex-col font-spaceMono">
        <div className="flex justify-center items-center flex-col">
          <div className="mb-[32px]">
            <ContactTitle title="Kontakt" />
            <p className="text-left text-black xs:text-[16px] w-[314px] mt-[24px]">
              Besök gärna mig i min butik, och tveka inte på att ställa frågor i
              förmuläret under.
            </p>
          </div>
          <Form />
          <div className="flex justify-center items-center flex-col">
            <iframe
              src={googleMaps}
              title="Google Maps"
              className=" mt-[52px] mb-[40px] w-[312px] h-[230px] "
            ></iframe>
          </div>
        </div>
      </div>

      {/* Contact Tablet */}
      <div className="xs:hidden xl:hidden md:flex flex-col justify-center items-center font-spaceMono">
        <div className="w-[680px] ">
          <ContactTitle title="Kontakt" />
          <p className="text-left text-black xs:text-[18px] w-[400px] mt-[16px] ">
            Besök gärna mig i min butik, och tveka inte på att ställa frågor i
            förmuläret under.
          </p>
        </div>
        <div className="flex justify-center items-center flex-row w-[680px] mt-[49px] ">
          <Form />
          <div className=" w-[18px] "></div>
          <div className="flex justify-center items-center flex-col">
            <iframe
              src={googleMaps}
              title="Google Maps"
              className="w-[262px] h-[445px] "
            ></iframe>
          </div>
        </div>
      </div>

      {/* Contact section desktop */}
      <div className="hidden xl:flex flex-col justify-center items-center font-spaceMono">
        <div className="w-[1024px]">
          <ContactTitle title="Kontakt" />
          <p className="text-left text-black xs:text-[18px] w-[400px] mt-[16px] ">
            Besök gärna mig i min butik, och tveka inte på att ställa frågor i
            förmuläret under.
          </p>
        </div>
        <div className="flex justify-center items-center flex-row w-[1024px] mt-[67px] ">
          <Form />
          <div className="w-[16px]"></div>
          <div className="flex justify-center items-center flex-col">
            <iframe
              src={googleMaps}
              title="Google Maps"
              className="w-[608px] h-[445px]"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
