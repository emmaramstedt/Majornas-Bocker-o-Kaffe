import Image from 'next/image';

export default function ContactInsta(props) {
  return (
    <div className='w-max flex flex-row items-center space-x-4 pt-7'>
      <Image src={props.logo} alt='Instagram' />
      <a
        className='text-left xs:text-[16px] md:text-[20px] text-extendedTrueGray900 font-ibmRegular'
        href={props.instaUrl}
        target='_blank'
        rel='noreferrer'
      >
        {props.instaName}
      </a>
    </div>
  );
}
