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
    {
      itemName: "SPONSORS",
      href: "/#sponsorsNCU",
    },
    {
      itemName: "FAQs",
      href: "/#faqNCU  ",
    },
  ];
  return <>
    <div className="z-20 navbar bg-[#1f242d] text-gray-100 fixed sm:pl-20">
      <Link href={"/"}>
        <div className="btn btn-ghost">
          <Image
            height={45}
            width={45}
            src={logo}
            alt="Momentum_22_logo"
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
        </div>
      </Link>

      <div className="navbar-center flex mx-auto">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link href={"/event"}>
              <div>Events</div>
            </Link>
          </li>
          <li>
            <Link href={"/schedule"}>
              <div>Schedule</div>
            </Link>
          </li>
          <li>
            <Link href={"/faq"}>
              <div>FAQs</div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="justify-end pr-2 sm:pr-20 rounded-md">
        <Login />
      </div>
    </div>
  </>;
}
