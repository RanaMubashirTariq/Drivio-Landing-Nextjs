'use client'
import { useEffect, useState } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../../../app/ui/button';
import { Input } from "../../../app/ui/input";
import { Menu, X } from "lucide-react";


export default function HeroSection () {
           
            const [isMenuOpen, setIsMenuOpen] = useState(false);
            const [activeSection, setActiveSection] = useState("home");

              const pathname = usePathname(); 


useEffect(() => {
  const handleScroll = () => {
    const sections = ["home", "about", "pricing", "testimonial"];
    for (const id of sections) {
      const section = document.getElementById(id);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(id);
          break;
        }
      }
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);



    return (
        <section className="relative w-full min-h-[795px] bg-[#f3f3f3] overflow-hidden">

                     {/* NavbarSection  */}
                 
            <header className="fixed top-0 left-0 w-full z-50 backdrop-blur flex flex-row items-center justify-between  pt-[41px] px-[119.5px]   max-[1300px]:px-[60px]   max-[1100px]:px-[50px] max-[767px]:px-[25px] max-[800px]:pt-[20px]">
              <div className="relative w-[188.26px] h-[50px] max-[800px]:w-[150px] max-[800px]:h-[30px]  max-[800px]:w-[120px]">
                <img
                  className=" w-full h-full  object-contian"
                  alt="Vector"
                  src="/drivio-logo.svg"
                />
              </div>


          {/* Menu Toggle Button - shows below 1000px */}
          <button 
            className="min-[1000px]:hidden p-2 shrink-0 ml-4 w-[36px] min-[320px]:w-[40px] min-[428px]:w-[48px] h-[36px] min-[320px]:h-[40px] min-[428px]:h-[48px] flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? 
              <X className="w-5 h-5 min-[320px]:w-6 min-[320px]:h-6 min-[428px]:w-7 min-[428px]:h-7" /> : 
              <Menu className="w-5 h-5 min-[320px]:w-6 min-[320px]:h-6 min-[428px]:w-7 min-[428px]:h-7" />
            }
          </button>

          {/* Desktop Navigation - shows above 1000px */}
          <div className="hidden min-[1000px]:block">
           <ul className="flex gap-[31px] text-base font-normal font-['sora']">
            <li>
             <Link
                      href="#"
                      className={`${
                        activeSection === "home" ? "text-[#0095fe] font-medium" : "text-[#001422]"
                      } hover:text-[#0095fe]`}
                    >
                      Home
                    </Link>
            </li>
            <li>
             <Link
                      href="#about"
                      className={`${
                        activeSection === "about" ? "text-[#0095fe] font-medium" : "text-[#001422]"
                      } hover:text-[#0095fe]`}
                    >
                      About Us
                    </Link>
            </li>
            <li>
                    <Link
                      href="#pricing"
                      className={`${
                        activeSection === "pricing" ? "text-[#0095fe] font-medium" : "text-[#001422]"
                      } hover:text-[#0095fe]`}
                    >
                      Pricing
                    </Link>
            </li>
            <li>
                    <Link
                      href="#testimonial"
                      className={`${
                        activeSection === "testimonial" ? "text-[#0095fe] font-medium" : "text-[#001422]"
                      } hover:text-[#0095fe]`}
                    >
                     Testimonial
                    </Link>
            </li>
          </ul>


          </div>

          {/* Mobile Navigation Menu - shows below 1000px */}
          <div className={`min-[1000px]:hidden w-full ${isMenuOpen ? 'block' : 'hidden'} absolute top-[90px] left-0 bg-white shadow-lg py-4 px-6 z-50`}>
            <div className="w-full">
              <ul className="flex flex-col space-y-4 text-base font-normal text-[#001422]">
            <li>
              <Link href="#" className={`${pathname === "/" ? "text-[#0095fe] font-medium" : "text-[#001422]"} hover:text-[#0095fe]`}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className={`${pathname === "#about" ? "text-[#0095fe] font-medium" : "text-[#001422]"} hover:text-[#0095fe]`}>
                About Us
              </Link>
            </li>
            <li>
             <Link
                      href="#about"
                      className={`${
                        activeSection === "about" ? "text-[#0095fe] font-medium" : "text-[#001422]"
                      } hover:text-[#0095fe]`}
                    >
                      About Us
                    </Link>
            </li>
            <li>
                    <Link
                      href="#pricing"
                      className={`${
                        activeSection === "about" ? "text-[#0095fe] font-medium" : "text-[#001422]"
                      } hover:text-[#0095fe]`}
                    >
                      Pricing
                    </Link>
            </li>
            <li>
                    <Link
                      href="#testimonial"
                      className={`${
                        activeSection === "about" ? "text-[#0095fe] font-medium" : "text-[#001422]"
                      } hover:text-[#0095fe]`}
                    >
                      Testimonial
                    </Link>
            </li>
              </ul>
            </div>
          </div>

          {/* Desktop Sign In Button - shows above 1000px */}
          <Button className="hidden min-[1000px]:block bg-[#0095fe] text-white font-bold rounded-xl h-[52px] w-[134px] font-['sora'] ">
            Sign In
          </Button>
                             </header>


                      {/* HeroSection */}
                        

               <div className="absolute w-[400px] h-[444px] top-[200px] left-[910px] max-[1300px]:left-[800px] max-[1100px]:h-[300px]  max-[1100px]:top-[200px] max-[1100px]:left-[700px] bg-[#0095fe] rounded-[222px] blur-[167px] hidden lg:block" />

              <img  className="absolute w-[887px] h-[607px] top-[124px] left-[726px] max-[1300px]:left-[600px] max-[1300px]:w-[800px] max-[1100px]:w-[600px] max-[1100px]:h-[480px] max-[1100px]:left-[500px] max-[1022px]:hidden"  alt="Blue isolated car"  src="/blue-isolated-car-1.png"  />
  
          
          {/* For Mobile Section */}
      <img className="w-full max-w-md mx-auto mt-10 lg:hidden  object-contain" alt="Blue isolated car" src="/blue-isolated-car-1.png"  />
        {/* Hero Content - responsive adjustments */}



        {/* Right Part HeroSection */}
        <div className=" lg:absolute top-[216px] left-[120px] max-[1300px]:left-[60px] max-[1100px]:left-[40px] max-[767px]:left-[0px] max-[1000px]:px-[50px] max-[680px]:px-[25px]  w-full max-w-[566px] max-[1300px]:max-w-[480px] max-[1100px]:max-w-[380px] max-[1022px]:max-w-full max-[1022px]:items-center  flex flex-col gap-[89.5px]  max-[1300px]:gap-[50px] max-[767px]:gap-[30px] ">


              <div className="flex flex-col gap-8 max-[1022px]:items-center max-[767px]:gap-4">
                    <h1 className="font-['sora']  font-bold text-[#001422] text-[56px]  max-[1300px]:text-[48px] max-[1100px]:text-[38px] leading-[100%] mt-0 max-[1022px]:text-center">
                  Be The First With The Convenience Of Drivio
                </h1>
                <p className="font-['sora'] font-normal text-[#636262] text-[16px] leading-[40px] max-[1100px]:leading-[27px] tracking[0%] mt-0 max-[1022px]:text-center">
                  Comes with a very great service, friendly and of course comfortable
                  at a very affordable price by all groups, both bottom and top
                </p>
             </div>          


              {/* booking Option */}

              <div className="w-full rounded-[20px] flex overflow-hidden max-[500px]:flex-col  ">
                      <div className="flex flex-1 bg-white p-6 max-[1100px]:p-3 max-[500px]:gap[10px] gap-[32px] rounded-l-xl rounded-b-[0] max-[500px]:flex-col max-[500px]:system-x-[0] max-[500px]:items-center">
                        <div className="relative w-full flex flex-col flex-1 w-full max-w-[173px] max-[1000px]:max-w-[100%]">
                          <label htmlFor="from" className="text-base font-bold font-['sora'] text-slate-900 mb-2">
                            From
                          </label>
                          <select
                            id="from"
                            className="bg-gray-100 rounded-md border-none text-gray-400 px-4 pr-10 py-2 w-full cursor-pointer focus:outline-none appearance-none"
                            defaultValue="Dallas"
                          >
                            <option className="text-black">Dallas</option>
                            <option>New York</option>
                            <option>Los Angeles</option>
                            <option>Miami</option>
                          </select>
                                
                                   <div className="pointer-events-none absolute top-[60%] right-3 flex items-center">
                                        <span>
                                           <svg
                                          className="w-4 h-4 text-gray-500"
                                          fill="none"
                                          stroke="currentColor"
                                          viewBox="0 0 24 24"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                        </span>
                                      </div>
                        </div>
                        <div className="relative w-full flex flex-col flex-1 w-full max-w-[173px] max-[1000px]:max-w-[100%]">
                          <label htmlFor="to" className="text-base font-bold font-['sora'] text-slate-900 mb-2">
                            To
                          </label>
                          <select
                            id="to"
                            className="bg-gray-100 rounded-md border-none text-gray-400 px-4 pr-10 py-2 w-full cursor-pointer focus:outline-none appearance-none "
                            defaultValue="Chicago"
                          >
                            <option className="text-black">Chicago</option>
                            <option>Houston</option>
                            <option>Seattle</option>
                            <option>Boston</option>
                          </select>

                                                                        <div className="pointer-events-none absolute top-[60%] right-3 flex items-center">
                                        <span>
                                           <svg
                                          className="w-4 h-4 text-gray-500"
                                          fill="none"
                                          stroke="currentColor"
                                          viewBox="0 0 24 24"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                        </span>
                                      </div>
                                    
                        </div>
                      </div>
                            <button   className="bg-blue-500 w-[120px] max-[1100px]:w-[80px] max-[1000px]:w-[100px] max-[500px]:w-full max-[500px]:h-[50px]  px-6 py-[18px]  rounded-r-[20px]  max-[500px]:rounded-r-[0px]  max-[500px]:rounded-b-[20px]  flex items-center justify-center  hover:bg-blue-600  transition-colors">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-white"
                                fill="none"
                                viewBox="0 0 32 32"
                                stroke="currentColor"
                                strokeWidth={2}
                                aria-label="search icon"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
                                />
                              </svg>
                            </button>
              </div>
              </div>

              </section>
    )
}