export default function OpeningHours(props) {
  return (
    <div>
      <h3 className='text-left xs:text-[16px] mt-4 md:text-[20px] text-extendedTrueGray900 font-spaceMono'>
        {props.title}
      </h3>
      <p className='text-left xs:text-[16px] mt-2 md:text-[20px] text-extendedTrueGray900 font-spaceMono'>
        {props.text}
      </p>
    </div>
  );
}
