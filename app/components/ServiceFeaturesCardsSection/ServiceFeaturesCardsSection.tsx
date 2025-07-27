import React from "react";
import { Button } from '../../../app/ui/button'
import { Input } from "../../../app/ui/input"
import { Card, CardContent } from "../../../app/ui//card";

export default function ServiceFeaturesCardsSection  () {
  // Feature cards data
  const featureCards = [
    {
      id: 1,
      title: "Fast And Simple",
      description:
        "You can manage all your tasks in our first and very helpful feature for your task",
      iconSrc: "/group-1.png",
      ellipseSrc: "/ellipse-12-1.svg",
    },
    {
      id: 2,
      title: "Booking",
      description:
        "Can help you to make detailed planning and also very real time for yout time work",
      iconSrc: "/vector-1.svg",
      ellipseSrc: "/ellipse-12.svg",
      isComplex: true,
    },
    {
      id: 3,
      title: "Comfortable",
      description:
        "We will find out what you are working on or there is a problem with your task manager",
      iconSrc: "/48.svg",
      ellipseSrc: "/ellipse-12.svg",
    },
    {
      id: 4,
      title: "3m Very Happy",
      description:
        "Create a team online and you can discuss with our professional team",
      iconSrc: "/group-1708.png",
      ellipseSrc: "/ellipse-12-1.svg",
    },
  ];

  return (
    <section className="relative bg-[#F5F5F5] py-10  px-[120px] max-[1300px]:px-[60px] max-[1100px]:px-[40px]  max-[767px]:px-[25px] overflow-hidden">
        <div className="flex flex-col min-[1100px]:flex-row gap-10 items-center justify-center min-[1100px]:justify-between text-center lg:text-left">
          {/* Left side content */}
          <div className="w-full min-[1100px]:w-[539px] flex flex-col gap-[40px] max-[1000px]:gap-[20px] max-[1100px]:items-center">
            <div className="flex flex-col gap-[16px] max-[1100px]:items-center">
              <h2 className="font-['sora'] font-semibold text-[#001422] text-[48px] max-[1000px]:text-[36px] max-[1000px]:leading-[48px] max-[680px]:text-[28px] max-[680px]:leading-[36px] leading-[72px] tracking-[0%] max-[1100px]:text-center">
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

          {/* Right side grid of cards */}
          <div className="w-full min-[1100px]:w-[585px]  grid  grid-cols-1 min-[767px]:grid-cols-2 gap-[10px] min-[767px]:gap-6">
            {featureCards.map((card) => (
              <Card
                key={card.id}
                className="bg-white rounded-[30px] overflow-hidden w-full h-auto min-w-[288px]"
              >
                <CardContent className="p-4 min-[767px]:p-6 ">
                  <div className="relative w-[80px] min-[320px]:w-[85px] min-[370px]:w-[90px] min-[767px]:w-[100px] h-[80px]  min-[370px]:h-[90px] min-[767px]:h-[100px] mb-4 min-[767px]:mb-10 mx-auto lg:mx-0">
                    <div className="absolute w-full h-full top-0 left-0 bg-[#0095fe] rounded-[50px] opacity-20" />
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
    </section>
  );
};
