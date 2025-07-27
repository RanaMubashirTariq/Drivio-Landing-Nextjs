'use client'
import React from "react";

// Define data for footer sections to make the code more maintainable
const aboutUsLinks = [
  { text: "Our taxi's", href: "#" },
  { text: "Our drivers", href: "#" },
  { text: "Contact us", href: "#" },
  { text: "Testimonial", href: "#" },
];

const infoLinks = [
  { text: "FAQ", href: "#" },
  { text: "Cookie & help", href: "#" },
  { text: "Privacy policy", href: "#" },
  { text: "Terms & conditions", href: "#" },
];

const socialLinks = [
  { icon: "./InstagramIcon.svg", href: "#", alt: "Instagram" },
  { icon: "./LinkedinIcon.svg", href: "#", alt: "LinkedIn" },
  { icon: "./FacebookIcon.svg", href: "#", alt: "Facebook" },
  { icon: "./TwitterIcon.svg", href: "#", alt: "Twitter" },
];

export default function SiteFooterSection () {
  return (
    <footer className="flex items-center justify-between gap-10 max-[1100px]:flex-col max-[1100px]:items-start max-[552px]:items-center pt-[80px] pb-[79px] max-[1000px]:pt-[40px] max-[1000px]:pb-[40px] w-full bg-[#0095fe] mt-10 px-[120px] max-[1300px]:px-[60px]  max-[1100px]:px-[50px] max-[767px]:px-[25px]">
          {/* Logo and Description */}
          <div className="flex flex-col gap-1 w-full max-w-[534px]">
              <div className="w-[188px] h-[52px] max-[552px]:w-[150px] max-[552px]:h-[35px]">
                 <img
                  className="w-full h-full object-contain"
                  alt="Vector"
                  src="/logo-white.svg"
                />
              </div>
            <div className="[font-family:'sora'] font-normal text-white text-base leading-[40px] max-[1100px]:leading-[27px] max-[767px]:items-center">
              Comes with a very great service, friendly and of course
              comfortable at a very affordable price by all groups, both bottom
              and top
            </div>
          </div>
        

             <div className="flex item-center justify-between w-full max-w-[581px] max-[1100px]:max-w-[100%] max-[552px]:flex-wrap max-[552px]:gap-10">      
          {/* Office and Social Media */}
          <div className="flex flex-col gap-10 max-[1100px]:gap-5 max-[552px]:gap-[10px]">
            <div className="flex flex-col gap-5">
              <h3 className="[font-family:'sora'] font-bold text-white text-[18px]">
                Office
              </h3>
              <p className="[font-family:'sora'] font-normal text-white text-base">
                Jln.Galau terus no 23. <br />
                Jakarta selatan
              </p>
            </div>

                  <div>
                    <h3 className="[font-family:'poppins'] font-bold text-white text-base min-[767px]:text-lg mb-3 min-[320px]:mb-4 min-[553px]:mb-6">
                      Follow us
                    </h3>
                    <div className="flex justify-center min-[553px]:justify-start gap-4 min-[320px]:gap-5 min-[553px]:gap-6">
                          {socialLinks.map((link, index) => (
                            <a
                              key={index}
                              href={link.href}
                              className="text-white transition-transform duration-300 hover:scale-110"
                            >
                              <img
                                src={link.icon}
                                alt={link.alt}
                                className="w-5 h-5 min-[320px]:w-6 min-[320px]:h-6 object-contain"
                              />
                            </a>
                          ))}
                        </div>

                  </div>
          </div>

          {/* About Us */}
          <div className="flex flex-col gap-5 max-[552px]:gap-[10px]">
            <h3 className="[font-family:Sora] font-bold text-white text-[18px] leading-[100%]">
              About Us
            </h3>
            <nav>
              <ul className="space-y-2 min-[320px]:space-y-3 min-[553px]:space-y-4 md:space-y-5">
                {aboutUsLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="[font-family:'sora'] font-normal text-white text-base leading-[100%] transition-colors duration-300 hover:text-white/80"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-5 ">
            <h3 className="[font-family:'sora'] font-bold text-white text-[18px] leading-[100%]">
              Info
            </h3>
            <nav>
              <ul className="space-y-2 min-[320px]:space-y-3 min-[553px]:space-y-4 md:space-y-5">
                {infoLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="[font-family:'sora'] font-normal text-white text-base leading-[100%] transition-colors duration-300 hover:text-white/80"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          </div>
    </footer>
  );
};
