import logo from "../public/M_logo_white.png";
import Login from "./Login";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const navItems = [
    {
      itemName: "About",
      href: "#",
    },
    {
      itemName: "Events",
      href: "/event",
    },
    {
      itemName: "FAQs",
      href: "/faq",
    },
    {
      itemName: "Sponsors",
      href: "#",
    },
  ];
  return (
    <>
      <div className="z-20 navbar bg-transparent text-gray-100 fixed sm:pl-20">
        <Link href={"/"}>
          <a className="btn btn-ghost">
            <Image height={45} width={45} src={logo} alt="Momentum_22_logo" />
          </a>
        </Link>

        <div className="navbar-center flex mx-auto">
          <ul className="menu menu-horizontal p-0">
            {navItems.map((val, key) => {
              return (
                <li key={key} className="font-bold text-2xl">
                  <Link href={val.href}>
                    <a>{val.itemName}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="justify-end pr-2 sm:pr-20">
          <Login />
        </div>
      </div>
    </>
  );
}
