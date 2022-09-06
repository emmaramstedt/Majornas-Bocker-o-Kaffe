import React from "react";
import Link from "next/link";

function HeroSection() {
  return (
    <>
      {/* Second section mobile */}
      <div className="bg-orangeColor h-[2950px] cm:hidden flex flex-col text-left">
        <h1>Mobile</h1>
      </div>

      {/* Second section tablet */}
      <div className="bg-orangeColor h-[1512px] xs:hidden lg:hidden cm:flex flex-col text-left">
        <h1>Tablet</h1>
      </div>

      {/* Second section desktop */}
      <div className="bg-orangeColor h-[1712px] hidden lg:flex flex-col text-left">
        <h1>Desktop</h1>
      </div>
    </>
  );
}

export default HeroSection;
