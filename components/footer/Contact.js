import Image from 'next/image';

export default function Contact(props) {
  return (
    <div className='w-max flex flex-row items-center space-x-4 pt-7'>
      <Image src={props.logo} alt={props.instaName} />
      <a
        className='text-left xs:text-[16px] md:text-[20px] text-extendedTrueGray900 font-ibmRegular'
        href={props.instaUrl}
        target='_blank'
        rel='noreferrer'
      >
        <p className='text-left xs:text-[16px] md:text-[20px] text-extendedTrueGray900 font-ibmRegular'>
          {props.text}
        </p>
        {props.instaName}
      </a>
    </div>
  );
}
