export default function ContactSection(props) {
  return (
    <>
      <hr className="my-4 mx-auto w-[100%] h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700"></hr>
      <div className="w-[312px] mt-[8px] bg-red-200">{props.children}</div>
    </>
  );
}
