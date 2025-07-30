'use client'
import React, { useState, useRef, useEffect } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../../../app/ui/button';
import { Input } from "../../../app/ui/input";
import { Card, CardContent } from "../../../app/ui//card";
import { Menu, X } from "lucide-react";

  // Mui



export default function HeroSection () {
           
            const [isMenuOpen, setIsMenuOpen] = useState(false);
            const [activeSection, setActiveSection] = useState("home");

              const pathname = usePathname(); 


                const featureCards = [
    {
      id: 1,
      title: "Fast And Simple",
      description:
        "You can manage all your tasks in our first and very helpful feature for your task",
      iconSrc: "/84.png",
      ellipseSrc: "/ellipse-12-1.svg",
    },
    {
      id: 2,
      title: "Booking",
      description:
        "Can help you to make detailed planning and also very real time for yout time work",
      iconSrc: "/31.png",
      ellipseSrc: "/ellipse-12.svg",
      isComplex: true,
    },
    {
      id: 3,
      title: "Comfortable",
      description:
        "We will find out what you are working on or there is a problem with your task manager",
      iconSrc: "/48.png",
      ellipseSrc: "/ellipse-12.svg",
    },
    {
      id: 4,
      title: "3m Very Happy",
      description:
        "Create a team online and you can discuss with our professional team",
      iconSrc: "/61.png",
      ellipseSrc: "/ellipse-12-1.svg",
    },
  ];

useEffect(() => {
  const handleScroll = () => {
    const sections = ["home", "about", "pricing", "testimonial"];
    const scrollPosition = window.scrollY + 130; // Add padding for fixed header

    for (const id of sections) {
      const section = document.getElementById(id);
      if (section) {
        const offsetTop = section.offsetTop;
        const offsetHeight = section.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Trigger once on load
  return () => window.removeEventListener("scroll", handleScroll);
}, []);



//  Features Card
 
 
  const [fromCity, setFromCity] = useState("Dallas");
  const [toCity, setToCity] = useState("Chicago");
  
const CustomDropdown = ({
  label,
  options,
  selected,
  setSelected,
}: {
  label: string;
  options: string[];
  selected: string;
  setSelected: (value: string) => void;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full max-w-[173px] max-[1000px]:max-w-full z-20">
      <label className="text-base font-bold font-['sora'] text-[#001422] mb-2 block">
        {label}
      </label>
      <div
        onClick={() => setOpen(!open)}
        className=" z-10 bg-gray-100 text-[#9A9A9A] border-none rounded-[10px] px-4 py-2 cursor-pointer flex justify-between items-center"
      >
        <span>{selected}</span>
        <svg
          className="w-4 h-4 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      {open && (
        <ul className="absolute top-full mt-1 w-full bg-white rounded-[10px] shadow z-40  max-[500px]:top-[-100px]">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
              className="px-4 py-2 hover:bg-[#0095FE] hover:text-white cursor-pointer  text-[#9A9A9A] font-medium font-['sora] leading-[100%] max-[500px]:py-3"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};









    return (
        <section className="relative w-full flex flex-col items-center bg-[#f3f3f3] overflow-hidden  ">

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
                        activeSection === "home" ? "text-[#0095fe] font-medium" : "text-[#9A9A9A]"
                      } hover:text-[#0095fe]`}
                    >
                      Home
                    </Link>
            </li>
            <li>
             <Link
                      href="#about"
                      className={`${
                        activeSection === "about" ? "text-[#0095fe] font-medium" : "text-[#9A9A9A]"
                      } hover:text-[#0095fe]`}
                    >
                      About Us
                    </Link>
            </li>
            <li>
                    <Link
                      href="#pricing"
                      className={`${
                        activeSection === "pricing" ? "text-[#0095fe] font-medium" : "text-[#9A9A9A]"
                      } hover:text-[#0095fe]`}
                    >
                      Pricing
                    </Link>
            </li>
            <li>
                    <Link
                      href="#testimonial"
                      className={`${
                        activeSection === "testimonial" ? "text-[#0095fe] font-medium" : "text-[#9A9A9A]"
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
              <ul className="flex flex-col items-center space-y-4 text-base font-normal text-[#001422]">
            <li>
              <Link href="#" className={`${pathname === "/" ? "text-[#0095fe] font-medium" : "text-[#9A9A9A]"} hover:text-[#9A9A9A]`}>
                Home
              </Link>
            </li>
            <li>
             <Link
                      href="#about"
                      className={`${
                        activeSection === "about" ? "text-[#0095fe] font-medium" : "text-[#9A9A9A]"
                      } hover:text-[#0095fe]`}
                    >
                      About Us
                    </Link>
            </li>
            <li>
                    <Link
                      href="#pricing"
                      className={`${
                        activeSection === "pricing" ? "text-[#0095fe] font-medium" : "text-[#9A9A9A]"
                      } hover:text-[#0095fe]`}
                    >
                      Pricing
                    </Link>
            </li>
            <li>
                    <Link
                      href="#testimonial"
                      className={`${
                        activeSection === "testimonial" ? "text-[#0095fe] font-medium" : "text-[#9A9A9A]"
                      } hover:text-[#0095fe]`}
                    >
                      Testimonial
                    </Link>
            </li>
                   <li>
           <Button className=" bg-[#0095fe] text-white font-bold rounded-xl h-[52px] w-[200px] font-['sora'] ">
            Sign In
          </Button>
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
        <div id="home" className=" z-10 lg:absolute top-[216px] left-[120px] max-[1300px]:left-[60px] max-[1100px]:left-[40px] max-[767px]:left-[0px] max-[1000px]:px-[50px] max-[680px]:px-[25px]  w-full max-w-[566px] max-[1300px]:max-w-[480px] max-[1100px]:max-w-[380px] max-[1022px]:max-w-full max-[1022px]:items-center  flex flex-col gap-[89.5px]  max-[1300px]:gap-[50px] max-[767px]:gap-[30px] ">


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

              <div className="w-full rounded-[20px] flex max-[500px]:flex-col z-50 relative">
      <div className="flex flex-1 bg-white p-6 max-[1100px]:p-3 max-[500px]:gap-[10px] gap-[32px] rounded-[20px] rounded-tr-[0] rounded-br-[0] max-[500px]:rounded-tr-[20px] max-[500px]:rounded-bl-[0] max-[500px]:flex-col max-[500px]:items-center">
        <CustomDropdown
          label="From"
          options={["Dallas", "New York", "Los Angeles", "Miami"]}
          selected={fromCity}
          setSelected={setFromCity}
        />
        <CustomDropdown
          label="To"
          options={["Chicago", "Houston", "Seattle", "Boston"]}
          selected={toCity}
          setSelected={setToCity}
        />
      </div>

      <button className="bg-[#0095FE] w-[120px] max-[1100px]:w-[80px] max-[1000px]:w-[100px] max-[500px]:w-full max-[500px]:h-[50px] px-6 py-[18px] rounded-r-[20px] max-[500px]:rounded-r-[0px] max-[500px]:rounded-b-[20px] flex items-center justify-center hover:opacity-[80%] transition-colors">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 32 32"
          stroke="currentColor"
          strokeWidth={2}
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

                                    {/* Features Section */}
                               

             <section id="about" className="mt-[750px] max-[1100px]:mt-[650px] max-[1000px]:mt-0    py-10  px-[120px] max-[1300px]:px-[60px] max-[1100px]:px-[40px]  max-[767px]:px-[25px] overflow-hidden  max-[1000px]:pt-[40px]">
        <div className="flex flex-col min-[1100px]:flex-row gap-10 items-center justify-center min-[1100px]:justify-between text-center lg:text-left ">
     
          <div className="w-full min-[1100px]:w-[539px] flex flex-col gap-[40px] max-[1000px]:gap-[20px] max-[1100px]:items-center">
            <div className="flex flex-col gap-[16px] max-[1100px]:items-center">
              <h2 className="font-['sora'] font-semibold text-[#001422] text-[48px] leading-[72px] max-[1000px]:text-[36px] max-[1000px]:leading-[48px] max-[680px]:text-[28px] max-[680px]:leading-[36px] leading-[72px] tracking-[0%] max-[1100px]:text-center">
                We Will Make You Very Special With Our Service
              </h2>
              <p className="font-['sora'] font-normal text-[#9a9a9a] text-[16px]  leading-[40px] max-[1100px]:leading-[27px] tracking-[0%] max-[1100px]:text-center">
                There are many benefits that you will get at Drivio, and for
                sure you will be comfortable and safe with us with great
                facilities and benefits
              </p>
            </div>
              <Button className="bg-[#0095fe] w-[158px] h-[52px] text-base text-white font-bold rounded-xl">
                Book now
              </Button>
          </div>   

          
          <div className="relative w-full min-[1100px]:w-[585px]  grid  max-[766px]:grid-cols-1 min-[767px]:grid-cols-2 gap-[10px] min-[767px]:gap-6">
            {featureCards.map((card) => (
              <Card
                key={card.id}
                className="bg-white rounded-[30px] overflow-hidden w-full h-auto min-w-[370px]:min-w-[288px] "
              >
                <div className="p-4 min-[767px]:p-6 ">
                  <div className="relative w-[80px] min-[320px]:w-[85px] min-[370px]:w-[90px] min-[767px]:w-[100px] h-[80px]  min-[370px]:h-[90px] min-[767px]:h-[100px] mb-4 min-[767px]:mb-10 mx-auto lg:mx-0">
                    <div className="absolute w-full h-full top-0 left-0 bg-[#0095fe] rounded-[50px] opacity-[10%]" />
                    <img
                      className="absolute w-full h-[50%]  top-[50%] left-0"
                      alt="Ellipse"
                      src={card.ellipseSrc}
                    />
                      
                    {card.isComplex ? (
                      <div className="absolute w-10 min-[320px]:w-11 min-[370px]:w-12 min-[767px]:w-12 h-10 min-[320px]:h-11 min-[370px]:h-12 min-[767px]:h-12 top-[26px] left-[26px]">
                        <div className="relative w-[32px] min-[320px]:w-[35px] min-[370px]:w-[38px] min-[767px]:w-[42px] h-8 min-[320px]:h-8.5 min-[370px]:h-9 min-[767px]:h-9 top-1.5 left-1">
                          <img
                            className="absolute w-full h-8 top-[3px] left-0"
                            alt="Vector"
                            src="/vector-1.svg"
                          />
                          <img
                            className="absolute w-full h-0.5 top-[11px] left-0"
                            alt="Vector"
                            src="/vector-3.svg"
                          />
                          <img
                            className="absolute w-[16px] min-[320px]:w-[18px] min-[370px]:w-[19px] min-[767px]:w-[21px] h-[7px] min-[320px]:h-[7.5px] min-[370px]:h-[8px] min-[767px]:h-[9px] top-0 left-2.5"
                            alt="Group"
                            src="/group-2.png"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="absolute w-[42px] min-[320px]:w-[45px] min-[370px]:w-[48px] min-[767px]:w-[52px] h-[42px] min-[320px]:h-[45px] min-[370px]:h-[48px] min-[767px]:h-[52px] top-6 left-6">
                        <img
                          className="w-full h-full object-contain"
                          alt={card.title}
                          src={card.iconSrc}
                        />
                      </div>
                    )}
                  </div>

                  <h3 className="font-['sora'] font-semibold text-[#001422] text-[24px] max-[500px]:text-[20px] leading-[100%] lg:text-2xl mb-2 min-[767px]:mb-3 text-center lg:text-left">
                    {card.title}
                  </h3>
                  <p className="font-['sora'] font-normal text-[#9a9a9a] text-[14px] min-[767px]:text-sm leading-[24px] min-[767px]:leading-6 text-center lg:text-left">
                    {card.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
    </section>

              </section>
    )
}