import React from "react";
import Link from "next/link";

function HeroSection() {
  return (
    <>
      {/* Second section mobile */}
      <div className="bg-orangeColor h-[2950px] cm:hidden flex flex-col text-center">
        <h1 className="text-center xs:text-[23px] sm:text-[28px] md:text-[35px] cm:text-[45px] lg:text-[50px] xl:text-[60px] font-semibold text-black">
          Mobile
        </h1>
      </div>

      {/* Second section tablet */}
      <div className="bg-orangeColor h-[1512px] xs:hidden lg:hidden cm:flex flex-col text-center">
        <h1 className="text-center xs:text-[23px] sm:text-[28px] md:text-[35px] cm:text-[45px] lg:text-[50px] xl:text-[60px] font-semibold text-black">
          Tablet
        </h1>
      </div>

      {/* Second section desktop */}
      <div className="bg-orangeColor h-[1712px] hidden lg:flex flex-col text-center">
        <h1 className="text-center xs:text-[23px] sm:text-[28px] md:text-[35px] cm:text-[45px] lg:text-[50px] xl:text-[60px] font-semibold text-black">
          Desktop
        </h1>
      </div>
    </>
  );
}

export default HeroSection;
