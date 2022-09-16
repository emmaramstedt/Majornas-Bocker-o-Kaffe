export default function AboutWrapper(props) {
  return (
    <>
      <div className="font-spaceMono flex xs:mx-[8%] md:mx-[6%] flex-col justify-center items-center">
        {props.children}
      </div>
    </>
  );
}
