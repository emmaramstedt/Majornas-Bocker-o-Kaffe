export default function AboutWrapper(props) {
  return (
    <>
      <div className="font-spaceMono flex flex-col justify-center items-center">
        {props.children}
      </div>
    </>
  );
}
