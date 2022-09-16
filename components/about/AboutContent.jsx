export default function AboutContent(props) {
  return (
    <>
      <div className="w-full flex xs:justify-center md:justify-start lg:justify-end mb-[32px] lg:mb-[46px]">
        <div className="max-w-[400px] mb-[32px]">
          <p>{props.content}</p>
        </div>
      </div>
    </>
  );
}
