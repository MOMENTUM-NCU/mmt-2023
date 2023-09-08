import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import Login from "../Login";
import Link from "next/link";

export function MobibleNav({ navLinks }) {
  const handleBg = (open) => {
    document.getElementById("nav").classList.toggle("bg-black");
  };

  const cleanUp = () => {
    document.getElementById("nav").classList.remove("bg-black");
  };

  return (
    <Disclosure>
      {({ open }) => (
        <>
          {/* menu icon */}
          <Disclosure.Button
            onClick={() => handleBg(open)}
            className="sm:hidden absolute top-3 right-2 rounded-md p-2 text-gray-400 hover:bg-violet-900 hover:text-white focus:outline-none focus:ring-0 border-none z-20"
          >
            <label tabIndex="0">
              {open ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </label>
          </Disclosure.Button>

          {/* Mobile Nav */}
          <Disclosure.Panel
            onClick={cleanUp}
            className="sm:hidden bg-black rounded-b-xl min-w-full absolute top-[4.5rem] z-10"
          >
            <div className="space-y-2 pt-0 p-4 text-center">
              {navLinks.map((item) => {
                return (
                  <Link href={item.href} key={item.name}>
                    <Disclosure.Button
                      as="a"
                      className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      {item.name.toUpperCase()}
                    </Disclosure.Button>
                  </Link>
                );
              })}
              <Disclosure.Button className="ml-2">
                <Login />
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
