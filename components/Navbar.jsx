import ActiveLink from "./ActiveLink.tsx";

function Navbar() {
  return (
    <nav className="w-full">
      <ul className="flex h-[48px] w-full p-0 m-0">
        <ActiveLink activeClassName="flex-[2.5] active" href="/">
          <li className="flex justify-center items-center overflow-hidden h-full border-solid border border-[#111827] rounded-[64px] cursor-pointer">
            <a href="" className="flex">
              OM OSS <div className="navDot"></div>
            </a>
          </li>
        </ActiveLink>
        <ActiveLink activeClassName="flex-[2.5] active" href="gmap">
          <li className="flex justify-center items-center overflow-hidden h-full border-solid border border-[#111827] rounded-[64px] cursor-pointer">
            <a href="" className="flex">
              NYHETER <div className="navDot"></div>
            </a>
          </li>
        </ActiveLink>
        <ActiveLink activeClassName="flex-[2.5] active" href="/test">
          <li className="flex justify-center items-center overflow-hidden h-full border-solid border border-[#111827] rounded-[64px] cursor-pointer">
            <a href="" className="flex">
              KONTAKT <div className="navDot"></div>
            </a>
          </li>
        </ActiveLink>
      </ul>
    </nav>
  );
}

export default Navbar;
