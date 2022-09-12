import Image from 'next/image';

export default function Contact(props) {
  return (
    <div>
      <Image src={props.logo} alt={props.text} />
      <p>{props.text}</p>
    </div>
  );
}
