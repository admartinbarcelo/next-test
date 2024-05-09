import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";

const navItems = [
  { path: "/about", text: "About" },
  { path: "/works", text: "Portfolio" },
  { path: "/contact", text: "Contact" },
];

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-40 p-2 m-2">
      <Link href={"/"} className="flex items-center">
        <span>Home</span>
      </Link>

      <div className="flex-grow"></div>

      {navItems.map((navItem) => (
        <>
          <ActiveLink key={navItem.path} {...navItem}></ActiveLink>
        </>
      ))}
    </nav>
  );
};
