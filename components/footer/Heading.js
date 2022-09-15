export default function Heading(props) {
  return (
    <div>
      <h2 className='text-left xs:text-[24px] mt-[30px] text-extendedTrueGray900 font-nav'>
        {props.footerTitle}
      </h2>
    </div>
  );
}
