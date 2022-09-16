export default function ContactSection(props) {
  return (
    <>
      <hr className="my-0 mx-auto w-[100%] md:hidden h-[2px] bg-extendedTrueGray900 border-0 dark:bg-gray-700"></hr>
      <div>{props.children}</div>
    </>
  );
}
