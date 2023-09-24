import logo from "../public/M_logo_white.png";
import Login from "./Login";
import Link from "next/link";
import Image from "next/image";
import Google from "next-auth/providers/google";
import { useState } from 'react';
import { useRouter } from 'next/router';


export default function Navbar() {
  // function changeURL(){
    
  // }

  // const router = useRouter();
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleRegisterClick = async () => {
  //   // Here, you can implement Google Sign-In logic
  //   // Once the user is signed in, set isLoggedIn to true.
  //   // For this example, we'll just simulate a successful sign-in.
  //   setIsLoggedIn(true);
  // };

  
  return (
    <>
      <div className="z-20 navbar bg-[#1f242d] text-gray-100 fixed sm:pl-20">
        <Link href={"/"}>
          <a className="btn btn-ghost">
            <Image height={45} width={45} src={logo} alt="Momentum_22_logo" />
          </a>
        </Link>
        

        {/* <button onClick={handleRegisterClick}>Register</button> */}
        <div className="navbar-center flex mx-auto">
          <ul className="menu menu-horizontal p-0">
            <ca/>
            <li>
              <Link href={"/event"}>
                <a>Events</a>
              </Link>
            </li>
            <li>
              <Link href={"/faq"}>
                <a>FAQs</a>
              </Link>
            </li>
            {/* <li>
              <Link>
                <a>Register as Campus Ambassador</a>
              </Link>
            </li> */}
          </ul>
        </div>
        <div className="justify-end pr-2 sm:pr-20">
          <Login />
        </div>
      </div>
    </>
  );
}
