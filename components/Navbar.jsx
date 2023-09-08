import logo from "../public/M_logo_white.png";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div className="z-20 navbar bg-[#1f242d] text-gray-100 fixed sm:pl-20">
        <Link href={"/"}>
          <a className="btn btn-ghost">
            <Image height={45} width={45} src={logo} alt="Momentum_22_logo" />
          </a>
        </Link>

        <div className="navbar-center flex mx-auto">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link href={"/event"}>
                <a>Events</a>
              </Link>
            </li>
            <li>
              <Link href={"/schedule"}>
                <a>Schedule</a>
              </Link>
            </li>
            <li>
              <Link href={"/faq"}>
                <a>FAQs</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="justify-end pr-2 sm:pr-20">
          <Link href={"/results"}>
            <div className="btn btn-success">Results</div>
          </Link>
        </div>
      </div>
    </>
  );
}
