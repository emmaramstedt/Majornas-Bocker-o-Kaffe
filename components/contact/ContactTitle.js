export default function ContactTitle({ title, text }) {
  return (
    <>
      <div className="w-[312px] ">
        <h1 className="text-left xs:text-[28px] text-black">{title}</h1>
        <p className="text-left text-black xs:text-[16px] md:text-[18px] xs:w-[312px] md:w-[400px] xs:mt-[24px] md:mt-[16px]">
          {text}
        </p>
      </div>
    </>
  );
}
