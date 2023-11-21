import logo from "../public/Logo-03.png";
import Login from "./Login";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const navItems = [
    {
      itemName: "About",
      href: "/#aboutNCU",
    },
    {
      itemName: "Events",
      href: "/event",
    },
    {
      itemName: "Results",
      href: "https://drive.google.com/file/d/1s_SHGqqeZiTxOjrkbv2lBOQm-yBCxMEh/view?usp=sharing",
    },
    {
      itemName: "FAQs",
      href: "/#faqNCU  ",
    },
  ];
  return (
    <>
      <div className="z-20 navbar  text-white fixed sm:pl-20">
        <Link href={"/"}>
          <div className="hover:cursor-pointer">
            <Image
              height={45}
              width={45}
              src={logo}
              alt="Momentum_22_logo"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
        </Link>

        <div className=" mx-auto">
          <ul className="menu menu-horizontal p-0">
            {navItems.map((navItem, key) => {
              return (
                <li key={key}>
                  <Link href={navItem.href} className="font-semibold">
                    {navItem.itemName}
                  </Link>
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
