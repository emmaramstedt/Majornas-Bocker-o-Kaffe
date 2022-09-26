export default function AboutHeader(props) {
  return (
    <>
      <div className="w-full flex xs:justify-center md:justify-start mb-[32px] lg:mb-[46px]">
        <div className="max-w-[400px] mb-[32px]">
          <h1 className="max-w-[255px]">{props.title}</h1>
          <div className="xs:max-w-[100%]">
            <p>{props.content}</p>
          </div>
        </div>
      </div>
    </>
  );
}
