import Image from "next/image";
import Link from "next/link";
import titleLogo from "../public/Momentum_signature_white_wb.png";
import CountDown from "./CountDown";
export default function Hero() {
  return (
    <>
      <div className="text-gray-400 body-font h-screen w-full bg-1 flex">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="h-43"></div>
          <div className="mb-10 max-w-[345px] md:max-w-[550px]">
            <Image src={titleLogo} alt="Momentum 2022" />
          </div>
          <div className="text-center lg:w-2/3 mx-auto">
            <div className="flex justify-center mb-10">
              <Link href={"/event"}>
                <a className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
                  Register for Events
                </a>
              </Link>
            </div>
            <div className="flex justify-center m-5">
              <CountDown till="11/04/22" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
