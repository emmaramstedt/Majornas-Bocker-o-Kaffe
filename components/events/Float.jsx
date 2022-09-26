import Sticky from "react-sticky-el";
import { isMobile } from "react-device-detect";

export default function FloatMe({ children }) {
  if (isMobile) {
    return <>{children}</>;
  }
  return <Sticky className="w-[312px]">{children}</Sticky>;
}
