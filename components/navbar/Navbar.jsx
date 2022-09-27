import ActiveLink from "./ActiveLink.tsx";
import Sticky from "react-sticky-el";
function Navbar() {
  return (
    <nav className="w-full font-ibmRegular relative z-40">
      <Sticky>
        <ul className="flex basis-auto h-[48px] w-full p-0 m-0">
          <ActiveLink activeClassName="active" href="/">
            <li className="flex justify-center items-center grow shrink basis-auto duration-[250ms] ease-[cubic-bezier(0.18,.89,.28,1.08)] border-solid border border-[#111827] rounded-[64px] cursor-pointer bg-white">
              <a className="flex">
                OM OSS <div className="navDot"></div>
              </a>
            </li>
          </ActiveLink>
          <ActiveLink activeClassName="active" href="kalender">
            <li className="flex justify-center items-center grow shrink basis-auto duration-[250ms] ease-[cubic-bezier(0.18,.89,.28,1.08)] border-solid border border-[#111827] rounded-[64px] cursor-pointer bg-white">
              <a className="flex">
                KALENDER <div className="navDot"></div>
              </a>
            </li>
          </ActiveLink>
          <ActiveLink activeClassName="active" href="/kontakt">
            <li className="flex justify-center items-center grow shrink basis-auto duration-[250ms] ease-[cubic-bezier(0.18,.89,.28,1.08)] border-solid border border-[#111827] rounded-[64px] cursor-pointer bg-white">
              <a className="flex">
                KONTAKT <div className="navDot"></div>
              </a>
            </li>
          </ActiveLink>
        </ul>
      </Sticky>
    </nav>
  );
}
export default Navbar;
