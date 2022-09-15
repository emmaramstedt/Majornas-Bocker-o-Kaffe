import ActiveLink from "./ActiveLink.tsx";

function Navbar() {
  return (
    <nav className="w-full font-nav">
      <ul className="flex h-[48px] w-full p-0 m-0">
        <ActiveLink
          activeClassName="active lg:flex-[2.5] lg:transition-all lg:duration-1000 ease-out"
          href="/"
        >
          <li className="flex justify-center items-center overflow-hidden h-full border-solid border border-[#111827] rounded-[64px] cursor-pointer">
            <a href="" className="flex">
              OM OSS <div className="navDot"></div>
            </a>
          </li>
        </ActiveLink>
        <ActiveLink
          activeClassName="active lg:flex-[2.5] lg:transition-all lg:duration-1000 ease-out"
          href="about"
        >
          <li className="flex justify-center items-center overflow-hidden h-full border-solid border border-[#111827] rounded-[64px] cursor-pointer">
            <a href="" className="flex">
              NYHETER <div className="navDot"></div>
            </a>
          </li>
        </ActiveLink>
        <ActiveLink
          activeClassName="active lg:flex-[2.5] lg:transition-all lg:duration-1000 ease-out"
          href="/kontakt"
        >
          <li className="flex justify-center items-center overflow-hidden h-full border-solid border border-[#111827] rounded-[64px] cursor-pointer">
            <a className="flex">
              KONTAKT <div className="navDot"></div>
            </a>
          </li>
        </ActiveLink>
      </ul>
    </nav>
  );
}

export default Navbar;
