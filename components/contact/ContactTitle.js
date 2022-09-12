export default function ContactTitle({ title }) {
  return (
    <>
      <div className="w-[312px] mt-[64px]">
        <h1 className="text-left xs:text-[32px] md:text-[35px] text-black">
          {title}
        </h1>
      </div>
    </>
  );
}
