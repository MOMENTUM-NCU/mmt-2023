import logo from "../public/Logo-03.png";
import Login from "./Login";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const navItems = [
    {
      itemName: "ABOUT",
      href: "/#aboutNCU",
    },
    {
      itemName: "EVENTS",
      href: "/event",
    },
    // {
    //   itemName: "SPONSORS",
    //   href: "/#sponsorsNCU",
    // },
    {
      itemName: "FAQs",
      href: "/#faqNCU  ",
    },
  ];
  return (
    <>
      <div className="z-20 navbar bg-transparent text-white fixed h-fit w-full" data-aos="fade-down">
        {/* <Link > */}
          <a className="btn-ghost ml-2  " href={"/"}>
            <Image height={65} width={65} src={logo} alt="Momentum_22_logo" className=""/>
          </a>
        {/* </Link> */}
        <div className="navbar-center flex mx-auto">
          <ul className="menu menu-horizontal p-0">
            {navItems.map((val, key) => {
              return (
                <li key={key} className="hover:font-semibold lg:text-3xl sm:text-2xl font-thin">
                  {/* <Link > */}
                    <a href={val.href}>{val.itemName}</a>
                  {/* </Link> */}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="justify-end pr-2 sm:pr-20 rounded-md">
          <Login />
        </div>
      </div>
    </>
  );
}
