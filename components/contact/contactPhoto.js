import Image from "next/image";

export default function contactPhoto(props) {
  return (
    <>
      {/* Contact section mobile */}
      <Image
        src={props.imageSource}
        alt={props.imageDescription}
        width={props.imageWidth}
        height={props.imageHeight}
      />
      {/* Contact section tablet */}

      {/* Contact section desktop */}
    </>
  );
}
