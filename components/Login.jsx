import { useSession, signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";
import Spinner from "./Spinner";
import { useEffect, useState } from "react";
import Google from "next-auth/providers/google";

const getDetails = async () => {
  const response = await fetch(`/api/user/profile/`);
  const userDetail = await response.json();
  return userDetail;
};
const checkDoesProfileNeedUpdate = async () => {
  const { fname, lname, pnumber } = await getDetails();
  let ret = false;
  if (fname == "" || fname == null) ret = true;
  if (lname == "" || lname == null) ret = true;
  if (pnumber == "" || pnumber == null) ret = true;
  return ret;
};

export default function Login() {
  const { data: session, status } = useSession();
  const [isProfileNeedUpdate, setIsProfileNeedUpdate] = useState(false);
  useEffect(() => {
    if (session) checkDoesProfileNeedUpdate().then(setIsProfileNeedUpdate);
  }, [session]);
  if (status === "loading") return <Spinner />;
  if (session) {
    let user = session.user;
    return (
      <div className="dropdown dropdown-end mr-5">
        <label
          tabIndex={0}
          className="btn btn-ghost btn-circle avatar indicator"
        >
          {isProfileNeedUpdate && (
            <span className="indicator-item badge badge-warning">!</span>
          )}
          <div className="w-10 rounded-full">
            <Image src={user.image} width={80} height={80} alt="PP" />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#2a303c] rounded-box w-52"
        >
          <li>
            <Link href={"/profile"} className="justify-between">
              Profile
              {isProfileNeedUpdate && (
                <span className="badge badge-warning">Update</span>
              )}
            </Link>
          </li>
          <li>
            <Link href={"/tickets"}>My Tickets</Link>
          </li>
          <li>
            <Link href={"/myqr"}>Entry QR Code</Link>
          </li>
          <li
            className="bg-error text-black"
            onClick={() =>
              signOut({
                callbackUrl: `${window.location.origin}`,
              })
            }
          >
            Logout
          </li>
        </ul>
      </div>
      // <Link href={"/profile"}>
      //   <a className="flex ">
      //     <div className="grid place-items-center w-8 h-8 rounded-full border-white  border-2 shadow-xl">
      //       <div className="rounded-full bg-cover">
      //         <div className="h-7 w-7 relative">
      //           <Image
      //             src={user.image}
      //             alt="user image"
      //             layout="fill" // required
      //             objectFit="cover" // change to suit your needs
      //             className="rounded-full" // just an example
      //           />
      //         </div>
      //       </div>
      //     </div>
      //     <p className="ml-2 flex items-center nav-link-text text-base">
      //       {user.name}
      //     </p>
      //   </a>
      // </Link>
    );
  } else {
    // login button
    return (
      <div className="btn btn-success" onClick={() => signIn("google")}>
        Login
      </div>
    );
  }
}

// ssr
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       session: await getSession(context),
//     },
//   };
// }
