import Image from "next/image";
import { signOut } from "next-auth/react";
import probanner from "../public/probanner.jpg";

export default function Account({ user }) {
  return <>
    <div className="border-red-600 border-4 flex flex-wrap items-center justify-center">
      <div className="container max-w-lg bg-white rounded dark:bg-gray-800 shadow-2xl transform duration-200 easy-in-out">
        <div className="max-h-96 sm:h-64 overflow-hidden">
          <div className="w-full">
            <Image
              property="fill"
              src={probanner}
              alt="..."
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </div>
        </div>
        <div className="flex justify-start px-5 -mt-12 mb-5">
          <span clspanss="block relative h-32 w-32">
            <div className="relative overflow-hidden mx-auto rounded-full h-24 w-24 border-white dark:border-gray-800 border-4 p-1">
              <Image
                src={user.image}
                alt="profile pic"
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover"
                }} />
            </div>
          </span>
        </div>

        <div className="">
          <div className="px-7 mb-8">
            <h2 className="text-3xl font-bold text-black dark:text-white">
              {user.name}
            </h2>
            {/* <p className="text-gray-400 mt-2 dark:text-gray-400">Student</p> */}
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              Thank You For Registering! Check back soon for more updates!
            </p>
            <div
              className="justify-center px-4 py-2 cursor-pointer bg-gray-200 max-w-min mx-auto mt-8 rounded-lg text-black  dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-600"
              onClick={() => signOut()}
            >
              Logout
            </div>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-2"></div>
          </div>
        </div>
      </div>
    </div>
  </>;
}
