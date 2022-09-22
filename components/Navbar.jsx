import ActiveLink from "./ActiveLink.tsx";
function Navbar() {
  return (
    <nav className="w-full font-ibmRegular mb-[80px] relative z-40">
      <ul className="flex basis-auto h-[48px] w-full p-0 m-0 fixed top-0">
        <ActiveLink activeClassName="active" href="/">
          <li className="flex justify-center items-center grow shrink basis-auto duration-[250ms] ease-[cubic-bezier(0.18, 0.89, 0.28, 1.08)] border-solid border border-[#111827] rounded-[64px] cursor-pointer bg-[#f3f4f6]">
            <a className="flex">
              OM OSS <div className="navDot"></div>
            </a>
          </li>
        </ActiveLink>
        <ActiveLink activeClassName="active" href="kalender">
          <li className="flex justify-center items-center grow shrink basis-auto duration-[250ms] ease-[cubic-bezier(0.18, 0.89, 0.28, 1.08)] border-solid border border-[#111827] rounded-[64px] cursor-pointer bg-[#f3f4f6]">
            <a className="flex">
              KALENDARIUM <div className="navDot"></div>
            </a>
          </li>
        </ActiveLink>
        <ActiveLink activeClassName="active" href="/kontakt">
          <li className="flex justify-center items-center grow shrink basis-auto duration-[250ms] ease-[cubic-bezier(0.18, 0.89, 0.28, 1.08)] border-solid border border-[#111827] rounded-[64px] cursor-pointer bg-[#f3f4f6]">
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
