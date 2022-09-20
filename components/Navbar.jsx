import ActiveLink from './ActiveLink.tsx';
function Navbar() {
  return (
    <nav className='w-full font-ibmRegular mb-[40px]'>
      <ul className='flex basis-auto h-[48px] w-full p-0 m-0'>
        <ActiveLink activeClassName='active' href='/'>
          <li className='flex justify-center items-center grow shrink basis-auto duration-[250ms] ease-[cubic-bezier(0.18, 0.89, 0.28, 1.08)] border-solid border border-[#111827] rounded-[64px] cursor-pointer'>
            <a className='flex'>
              OM OSS <div className='navDot'></div>
            </a>
          </li>
        </ActiveLink>
        <ActiveLink activeClassName="active" href="kalendarium">
          <li className="flex justify-center items-center grow shrink basis-auto duration-[250ms] ease-[cubic-bezier(0.18, 0.89, 0.28, 1.08)] border-solid border border-[#111827] rounded-[64px] cursor-pointer">
            <a className="flex">
              KALENDARIUM <div className="navDot"></div>
            </a>
          </li>
        </ActiveLink>
        <ActiveLink activeClassName='active' href='/kontakt'>
          <li className='flex justify-center items-center grow shrink basis-auto duration-[250ms] ease-[cubic-bezier(0.18, 0.89, 0.28, 1.08)] border-solid border border-[#111827] rounded-[64px] cursor-pointer'>
            <a className='flex'>
              KONTAKT <div className='navDot'></div>
            </a>
          </li>
        </ActiveLink>
      </ul>
    </nav>
  );
}
export default Navbar;
