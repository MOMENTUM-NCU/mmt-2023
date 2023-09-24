import Image from "next/image";
import Link from "next/link";
import titleLogo from "../public/Momentum_signature_white_wb.png";
import CountDown from "./CountDown";
import logo from '../public/M_logo_white.png';
// import momentum23 from '../public/momentum23.mp4';

export default function Hero() {
  return (
    <>
      {/* <div>
        <Image className="bg-1" src="/public/images/hero.jpg" height={100} width={100}/>
      </div> */}
      <div className="text-gray-400 body-font h-screen w-full bg-1 flex">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">

          <div className="h-43"></div>
          <div className="mb-10 max-w-[345px] md:max-w-[550px]">
            <Image src={titleLogo} alt="Momentum 2022" />
          </div>
          <div className="text-center lg:w-2/3 mx-auto">
            <div className="flex justify-center mb-10">
              <Link href={"/event"}>
                <a className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg" data-aos="fade-in">
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
      <div className="h-screen w-screen flex justify-evenly items-center items-center flex-row bg-black">
        <div className=" h-auto w-2/4" >
          <div className="text-3xl font-bold">POWERED BY</div>
          <div className="text-7xl -mt-2 font-extrabold" data-aos="zoom-out">THE NORTHCAP UNIVERSITY</div>
          <div className="text-4xl  font-semibold tracking-widest" data-aos="zoom-out">Based in Gurgaon, Haryana</div>
          <div className="text-2xl mt-3" data-aos="fade-left">The NorthCap University (NCU), Gurugram, is a progressive multidisciplinary university
            located in the city of Gurugram, Haryana. The University operates three schools in the
            disciplines of Engineering & and Technology, Management & Liberal Arts, and Law, and
            has a dedicated Department of Applied Sciences. NCU is a National Assessment and
            Accreditation Council (NAAC) Grade A accredited university and has a 5-star QS
            Ranking for Teaching, Employability, Academic Development, Online Learning, and
            Inclusiveness. NCU ranks among the Top 30 best-performing universities as per the Atal
            Ranking of Institutions on Innovation Achievements (ARIIA) rankings
          </div>
        </div>
        <div className="h-auto ">
          <Image src={logo} alt="Not Loading" height={400} width={400}/>
        </div>
      </div>
      <div className="h-screen bg-black flex justify-center w-screen" >
        <video muted loop autoPlay className="h-screen">
          <source src="/momentum23.webm" type="video/webm"/>
        </video>
      </div>
      <div className="h-fit w-fit flex-col justify-center items-center mt-10">
        <div className="mt-20 font-bold text-9xl bg-black h-auto flex  justify-center items-center">
          OUR EVENTS
        </div>
        <div className="mt-16 bg-black h-fit w-screen flex-col justify-evenly items-center">
          <div className="w-screen h-fit flex justify-evenly items-center">
            <div className="h-4/5 w-2/5  flex-col  justify-center hover:border cursor-pointer">
                <video src="/video2.mp4" autoPlay loop muted className="w-fit"></video>
                <div className=" w-4/5 mt-8 ml-12 ">
                  <div className="font-semibold text-3xl">Night Event</div>
                  <div className="font-bold text-6xl" >DJ NIGHT</div>
                  <div className="font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, consequatur?</div>
                </div>
            </div>
            <div className="h-4/5 w-2/5  flex-col justify-center hover:border cursor-pointer">
                <video src="/video2.mp4" autoPlay loop muted className="w-fit"></video>
                <div className=" w-4/5 mt-8 ml-12 ">
                  <div className="font-semibold text-3xl">Night Event</div>
                  <div className="font-bold text-6xl" >DJ NIGHT</div>
                  <div className="font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, consequatur?</div>
                </div>
            </div>
          </div>
          <div className="w-screen h-fit flex justify-evenly items-center mt-16">
            <div className="h-4/5 w-2/5  flex-col  justify-center hover:border cursor-pointer">
                <video src="/video2.mp4" autoPlay loop muted className="w-fit"></video>
                <div className=" w-4/5 mt-8 ml-12 ">
                  <div className="font-semibold text-3xl">Night Event</div>
                  <div className="font-bold text-6xl" >DJ NIGHT</div>
                  <div className="font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, consequatur?</div>
                </div>
            </div>
            <div className="h-4/5 w-2/5  flex-col justify-center hover:border cursor-pointer">
                <video src="/video2.mp4" autoPlay loop muted className="w-fit"></video>
                <div className=" w-4/5 mt-8 ml-12 ">
                  <div className="font-semibold text-3xl">Night Event</div>
                  <div className="font-bold text-6xl" >DJ NIGHT</div>
                  <div className="font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, consequatur?</div>
                </div>
            </div>
          </div>
          <div className=" mt-20 flex justify-center items-center">
            <button className="border-2 rounded-full flex justify-center items-center h-20 w-1/5 font-black text-5xl hover:bg-white">
              SEE ALL
            </button>
          </div>
        </div>
      </div>
      {/* sponsors */}
      <div className="mt-20 h-fit bg-black flex-col justify-evenly items-center">
        <div className=" text-7xl font-bold">
          SPONSORED BY
        </div>
        <div className="sponsorStrip1 mt-16 h-20 flex justify-evenly items-center">
          <Image src="/Addidas.png" height={70} width={150}></Image>
          <Image src="/Addidas.png" height={70} width={150}></Image>
          <Image src="/Addidas.png" height={70} width={150}></Image>
          <Image src="/Addidas.png" height={70} width={150}></Image>
          <Image src="/Addidas.png" height={70} width={150}></Image>
          <Image src="/Addidas.png" height={70} width={150}></Image>
        </div>
        
        <div className="sponsorStrip1 mt-14 h-20 flex justify-evenly items-center">
          <Image src="/Addidas.png" height={70} width={150}></Image>
          <Image src="/Addidas.png" height={70} width={150}></Image>
          <Image src="/Addidas.png" height={70} width={150}></Image>
          <Image src="/Addidas.png" height={70} width={150}></Image>
          <Image src="/Addidas.png" height={70} width={150}></Image>
          <Image src="/Addidas.png" height={70} width={150}></Image>
        </div>
      </div>
      {/* FAQ */}
      <div className="h-screen bg-black mt-20 flex-col justify-center items-center ">
        <div className="flex bg-red-900 text-7xl font-bold">FAQs</div>
        <div className="h-screen bg-red-900 mt-10 flex flex-col justify-evenly items-center mx-auto container">
          <div className="bg-yellow-900 flex justify-center w-96 border">
            lkmlm
          </div>
          <div className="bg-yellow-900 flex justify-center w-96 border">
            lkmlm
          </div>
        </div>
      </div>
    </>
  );
}
