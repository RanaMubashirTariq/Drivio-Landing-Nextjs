'use client'
import { useState } from "react";
import Link from 'next/link';
import { Button } from '../../../app/ui/button'
import { Input } from "../../../app/ui/input"
import { Menu, X } from "lucide-react";
import HeroSection from "../HeroSection/HeroSection";

export default function NavbarSection (){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return(
            <section>
                                 <header className="flex flex-row items-center justify-between  pt-[41px] px-[119.5px]   max-[1300px]:px-[60px]   max-[1100px]:px-[50px] max-[767px]:px-[25px] max-[800px]:pt-[20px]">
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
            <ul className="flex  w-full  gap-[31px] text-base  font-normal font-['sora'] text-[#001422]">
              <li>
                <Link href="#" className="hover:text-[#0095fe]">Home</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#0095fe]">About Us</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#0095fe]">Pricing</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#0095fe]">Textimonial</Link>
              </li>
            </ul>
          </div>

          {/* Mobile Navigation Menu - shows below 1000px */}
          <div className={`min-[1000px]:hidden w-full ${isMenuOpen ? 'block' : 'hidden'} absolute top-[90px] left-0 bg-white shadow-lg py-4 px-6 z-50`}>
            <div className="w-full">
              <ul className="flex flex-col space-y-4 text-base font-normal text-[#001422]">
                <li>
                  <Link href="#" className="hover:text-[#0095fe] block py-2">Home</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#0095fe] block py-2">About Us</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#0095fe] block py-2">Pricing</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#0095fe] block py-2">Team</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#0095fe] block py-2">Contact</Link>
                </li>
                <li>
                  <Button className="bg-[#0095fe] text-white font-bold rounded-xl h-[52px] w-full">
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

                             {/* Hero Section */}

                             <HeroSection/>
            </section>
    )
}