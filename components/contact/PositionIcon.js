// Next Imports
import Image from "next/image";
import MapsIcon from "../../public/images/contact/position-icon.svg";

export default function PositionIcon() {
  return (
    <>
      <Image src={MapsIcon} alt="position icon" width={26} height={26} />
    </>
  );
}
