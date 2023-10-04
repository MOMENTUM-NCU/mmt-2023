import Image from "next/image";
import Link from "next/link";
import titleLogo from "../public/Momentum_signature_white_wb.png";
import CountDown from "./CountDown";
import logo from '../public/UGC And NCU Logos White-01.png';
import FAQ from "./Faq";
import { useEffect } from "react";
import Navbar from "./Navbar";
import ShootingStars from "./ShootingStars";
// import momentum23 from '../public/momentum23.mp4';

export default function Hero() {
  useEffect(()=>{
    window.addEventListener('scroll',(event)=>{
      let navBG= document.querySelector(".navbar");
      navBG.classList.toggle("sticky",window.scrollY>0);
      console.log(navBG);
    })
  },[])
  let sponsors=[
    {
      src:"/Addidas.png"
    },
    {
      src:"/Addidas.png"
    },
    {
      src:"/Addidas.png"
    },
    {
      src:"/Addidas.png"
    },
    {
      src:"/Addidas.png"
    },
    {
      src:"/Addidas.png"
    },
    {
      src:"/Addidas.png"
    },
    {
      src:"/Addidas.png"
    },
    {
      src:"/Addidas.png"
    },
    {
      src:"/Addidas.png"
    },
    {
      src:"/Addidas.png"
    }
  ]
  return (
    <>
      <ShootingStars></ShootingStars>
      <div className="text-gray-400 body-font h-screen w-full bg-1 flex">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col" >

          <div className="flex-col">
            <div className="font-extrabold lg:text-8xl md:text-6xl text-5xl text-white tracking-tighter " data-aos="zoom-in">
              MOMENTUM 2023
            </div>
            <div className="flex w-full justify-between text-white ">
              <div className="lg:text-3xl text-2xl ml-2 -mt-1 font-thin" data-aos="fade-down">
                NOVA NEXUS
              </div>
              <div className="lg:text-5xl md:text-3xl text-2xl mt-2 font-semibold" data-aos="fade-down">
                3<sup>rd</sup> - 4<sup>th</sup> NOVEMBER
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="h-fit w-screen flex justify-evenly items-center flex-row sm:mt-0 mt-20" id="aboutNCU" onS>
        <div className=" h-auto w-2/4 sm:mt-20 " >
          <div className="xl:text-3xl md:text-2xl font-bold">POWERED BY</div>
          <div className="xl:text-7xl md:text-6xl text-4xl -mt-2 font-extrabold" data-aos="zoom-out">THE NORTHCAP UNIVERSITY</div>
          <div className="xl:text-4xl md:text-3xl text-2xl font-semibold tracking-widest text" data-aos="zoom-out">Based in Gurgaon, Haryana</div>
          <div className="xl:text-2xl mt-3 " data-aos="fade-left" >
            The NorthCap University (NCU), Gurugram, is a progressive multidisciplinary university
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
          <Image src={logo} alt="Not Loading"  height={150} width={150} className="lg:h-30" data-aos="zoom-in"/>
        </div>
      </div>
      <div className="h-fit flex justify-center w-screen mt-20">
        <video muted loop autoPlay className="h-full w-screen " data-aos="zoom-in">
          <source src="/momentum23.webm" type="video/webm"/>
        </video>
      </div>
      <div className="h-fit w-fit flex-col justify-center items-center mt-10" id="eventsNCU">
        <div className="mt-20 font-bold lg:text-9xl text-6xl  h-auto flex justify-center items-center" data-aos="fade-down">
          GLIMPSES
        </div>
        <div className="mt-16 h-fit w-screen flex-col justify-evenly items-center">
          <div className="w-screen h-fit flex justify-evenly items-center">
            <div className="h-4/5 w-2/5 flex-col  justify-evenly hover:border cursor-pointer" data-aos="fade-right">
                <video src="/123.mp4" autoPlay loop muted className="w-fit"></video>
                <div className=" w-full mt-8 lg:ml-4 ">
                  {/* <div className="font-semibold text-3xl" data-aos="fade-down">Night Event</div> */}
                  <div className="font-bold lg:text-4xl md:text-3xl" data-aos="fade-down">DJ NIGHT</div>
                  <div className="font-thin" data-aos="fade-down">Get ready to dance the night away as our DJ spins the hottest tracks under the dazzling lights.</div>
                </div>
            </div>
            <div className="h-4/5 w-2/5  flex-col justify-center hover:border cursor-pointer" data-aos="fade-left">
                <video src="/video2.mp4" autoPlay loop muted className="w-fit"></video>
                <div className=" w-full mt-8 lg:ml-4 ">
                  {/* <div className="font-semibold text-3xl" data-aos="fade-down">Night Event</div> */}
                  <div className="font-bold lg:text-4xl md:text-3xl" data-aos="fade-down">Artist Night</div>
                  <div className="font-thin " data-aos="fade-down">A night of creativity and inspiration awaits as we showcase the talents of local and emerging artists.</div>
                </div>
            </div>
          </div>
          <div className="w-screen h-fit flex justify-evenly items-center mt-16">
            <div className="h-4/5 w-2/5  flex-col  justify-center hover:border cursor-pointer" data-aos="fade-right">
                <video src="/124-1.mp4" autoPlay loop muted className="w-fit"></video>
                <div className="  w-full mt-8 lg:ml-4 ">
                  {/* <div className="font-semibold text-3xl" data-aos="fade-down">Night Event</div> */}
                  <div className="font-bold lg:text-4xl md:text-3xl" data-aos="fade-down"> Rap Ground</div>
                  <div className="font-thin" data-aos="fade-down">Step into the world of rhythm and rhymes at Rap Ground, where lyrical prowess takes center stage.</div>
                </div>
            </div>
            <div className="h-4/5 w-2/5  flex-col justify-center hover:border cursor-pointer" data-aos="fade-left">
                <video src="/video1.mp4" autoPlay loop muted className="w-fit"></video>
                <div className=" w-full mt-8 lg:ml-4 ">
                  {/* <div className="font-semibold text-3xl" data-aos="fade-down">Night Event</div> */}
                  <div className="font-bold lg:text-4xl md:text-3xl w-full" data-aos="fade-down">Inaugural Ceremony</div>
                  <div className="font-thin"data-aos="fade-down">Join us for a grand inauguration that marks the beginning of an unforgettable journey</div>
                </div>
            </div>
          </div>
          <div className=" mt-20 flex justify-center items-center">
            <button className="border-2 rounded-full flex justify-center items-center h-20 w-2/6 font-black lg:text-4xl md:text-3xl hover:bg-white" data-aos="zoom-in" >
              <Link href={"/event"} alt="">
                SEE ALL
              </Link>
            </button>
          </div>
        </div>
      </div>
      {/* sponsors */}
      <div className="mt-20 h-fit flex-col justify-evenly items-center" id="sponsorsNCU">
        <div className="lg:text-9xl md:text-6xl text-4xl font-bold text-left ml-5 flex w-full justify-center" data-aos="fade-right">
          SPONSORED BY
        </div>
        <div className="flex-col justify-center">
          <div className="sponsorStrip1 mt-16 h-20 flex justify-evenly items-center" data-aos="fade-right">
            {
              sponsors.map((a)=>{
                return (
                  <>
                    <Image src={a.src} height={70} width={150} alt={a.src}/>
                  </>
                )
              })
            }
          </div>
          
          <div className="sponsorStrip2 mt-14 h-20 flex justify-evenly items-center" data-aos="fade-left">
          {
              sponsors.map((a)=>{
                return (
                  <>
                    <Image src={a.src} height={70} width={150} alt={a.src}/>
                  </>
                )
              })
            }
          </div>
        </div>
      </div>
      {/* FAQ */}
      <FAQ/>
      {/* Footer */}
      <div className="h-96 footer2023 flex items-center justify-center font-extrabold  tracking-tighter " data-aos="zoom-out">
        <div data-aos="zoom-in " className="lg:text-7xl md:text-5xl text-4xl">
          Let the Magic Begin...
        </div>
      </div>
    </>
  );
}
