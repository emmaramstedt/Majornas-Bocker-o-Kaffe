export default function ContactTitle({ title, text }) {
  return (
    <>
      <div className="w-[312px] ">
        <h1 className="text-left leading-[42px] xs:text-[28px] text-black">
          {title}
        </h1>
        <p className="text-left leading-[24px] text-black xs:text-[16px] xs:w-[312px] md:w-[400px] xs:mt-[24px] md:mt-[16px]">
          {text}
        </p>
      </div>
    </>
  );
}
