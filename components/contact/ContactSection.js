export default function ContactSection(props) {
  return (
    <>
      <hr className="my-0 mx-auto w-[100%] h-[2px] bg-gray-100 rounded border-0 dark:bg-gray-700"></hr>
      <div className="w-[312px] mt-[0px] bg-red-200">{props.children}</div>
    </>
  );
}
