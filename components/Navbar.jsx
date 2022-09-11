import ActiveLink from "./ActiveLink.tsx";

function Navbar() {
  return (
    <nav>
      <style jsx>{`
        .nav-link {
          text-decoration: none;
        }
        .active:after {
          content: "(you are here)";
        }
      `}</style>
      <ul className="nav space-x-5">
        <li className="inline-block">
          <ActiveLink activeClassName="active" href="/">
            <a className="nav-link">Länk 1</a>
          </ActiveLink>
        </li>
        <li className="inline-block">
          <ActiveLink activeClassName="active" href="/gmap">
            <a className="nav-link">Länk 2</a>
          </ActiveLink>
        </li>
        <li className="inline-block">
          <ActiveLink activeClassName="active" href="/gallery">
            <a className="nav-link">Länk 3</a>
          </ActiveLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
