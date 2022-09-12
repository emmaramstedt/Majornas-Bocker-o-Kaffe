export default function Footer(props) {
  return (
    <footer className='xs:p-8 sm:pl-12 lg:pl-32 relative'>
      <div className='flex xs:flex-col sm:flex-col md:flex-row md:items-center justify-start sm:space-y-8 md:space-x-56 lg:space-x-80'>
        <div>{props.openingHours}</div>
        <div>{props.contact}</div>
      </div>
      <div className='absolute max-w-max'>{props.images}</div>
    </footer>
  );
}
