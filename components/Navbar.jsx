import logo from "../public/M_logo_white.png";
import Login from "./Login";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const navItems = [
    {
      itemName: "ABOUT",
      href: "#aboutNCU",
    },
    {
      itemName: "EVENTS",
      href: "/event",
    },
    {
      itemName: "SPONSORS",
      href: "#sponsorsNCU",
    },
    {
      itemName: "FAQs",
      href: "#faqNCU  ",
    },
  ];
  return (
    <>
      <div className="z-20 navbar bg-transparent text-white fixed  h-fit" data-aos="fade-down">
        <Link href={"/"}>
          <a className="btn-ghost">
            <Image height={65} width={65} src={logo} alt="Momentum_22_logo" className=""/>
          </a>
        </Link>

        <div className="navbar-center flex mx-auto">
          <ul className="menu menu-horizontal p-0">
            {navItems.map((val, key) => {
              return (
                <li key={key} className="hover:font-semibold lg:text-4xl sm:text-2xl font-thin">
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
