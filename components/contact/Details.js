export default function Details({ title, text }) {
  return (
    <>
      <h2 className="text-left xs:text-[20px] xs:mt-[16px] md:mt-[20px] text-extendedTrueGray900">
        {title}
      </h2>
      <p className="text-left xs:text-[18px] mt-[8px]  text-extendedTrueGray500">
        {text}
      </p>
    </>
  );
}
