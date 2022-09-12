import Image from 'next/image';

export default function Contact(text, logo) {
  return (
    <div>
      <Image src={logo} alt={text} />
      <p>{text}</p>
    </div>
  );
}
