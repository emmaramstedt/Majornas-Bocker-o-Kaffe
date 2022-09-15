import Image from 'next/image';

export default function Contact(props) {
  return (
    <div className='flex flex-row items-center space-x-4'>
      <Image src={props.logo} alt={props.instaName} />
      <a
        className='text-left xs:text-[16px] md:text-[20px] text-extendedTrueGray900 font-nav'
        href={props.instaUrl}
        target='_blank'
        rel='noreferrer'
      >
        <p className='text-left xs:text-[16px] md:text-[20px] text-extendedTrueGray900 font-nav'>
          {props.text}
        </p>
        {props.instaName}
      </a>
    </div>
  );
}
