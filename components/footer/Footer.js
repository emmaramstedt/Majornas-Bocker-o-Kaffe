export default function Footer(props) {
  return (
    <footer className='mt-10 xs:p-8 sm:pl-12 lg:pl-32 relative border-t border-t-neutral-900 overflow-x-hidden'>
      <div className='flex flex-col md:flex-row md:items-center justify-start sm:space-y-8 md:space-x-56 lg:space-x-80'>
        <div>{props.openingHours}</div>
        <div>{props.contact}</div>
      </div>
      <div className='absolute top-0 -z-10 left-0 h-full w-[110%] xs:block md:hidden -translate-x-3.5'>
        {props.smallImages}
      </div>
      <div className='absolute top-0 -z-10 left-0 h-full w-[110%] xs:hidden md:block -translate-x-3.5'>
        {props.bigImages}
      </div>
    </footer>
  );
}
