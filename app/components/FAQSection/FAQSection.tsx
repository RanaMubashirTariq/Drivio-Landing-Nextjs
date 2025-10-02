import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../app/ui/accordion";

export default function FAQSection () {
  const faqItems = [
    {
      question: "Why should I choose Drivio?",
      answer:
        "Because Drvio is a very special taxi with more than 3 m people who are very happy with all the services we provide, and it's clear that our prices are very affordable for all people",
    },
    {
      question: "Why is Drivio cheap?",
      answer: "We keep operations lean and prioritize value, not just profit.",
    },
    {
      question: "Why is Drivio's service so friendly?",
      answer: "We train our staff to always prioritize friendliness and safety.",
    },
    {
      question: "24/7 customer services?",
      answer: "Yes! Our support team is available round the clock.",
    },
    {
      question: "How to order Drivio?",
      answer: "Download the app, register, and book your ride in 2 taps.",
    },
  ];

  const RightArrowIcon = ({ className = "text-[#140C44]" }) => (
    <svg
      className={`transition-transform duration-300 ease-in-out  ${className}`}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 6L15 12L9 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <section className="w-full max-w-[1500px] mx-auto py-10 px-[120px] max-[1300px]:px-[60px] max-[1100px]:px-[50px] max-[767px]:px-[25px] bg-[#f3f3f3]">
      <div className="flex flex-col items-center gap-4 mb-6">
        <h2 className="font-['sora'] font-semibold text-[#001422] text-[56px] max-[1500px]:text-[40px] text-center leading-[72px] max-[1000px]:text-[36px] max-[1000px]:leading-[48px] max-[767px]:text-[26px] max-[767px]:leading-[36px]">
          Frequently Asked Questions
          <br />
          (faq)
        </h2>
        <p className="w-[500px] max-[1500px]:w-[444px] font-['sora'] font-normal text-[#9a9a9a] text-lg max-[1500px]:text-base max-[767px]:text-sm max-[767px]:leading-[24px] text-center leading-[180%] max-[767px]:w-full">
          Our Browser Faq Below, If You Can't Find The Answer In Gready
        </p>
      </div>

<Accordion
  type="single"
  collapsible
  className="space-y-3 min-[416px]:space-y-4 w-full"
>

        {faqItems.map((item, index) => (
          <AccordionItem
            key={`item-${index}`}
            value={`item-${index}`}
            className="group bg-white text-[#140C44]  rounded-[16px] border border-[#ededed] transition-all duration-300
              hover:bg-[#0095fe] hover:text-white
              data-[state=open]:bg-[#0095fe] data-[state=open]:text-white"
          >
            <AccordionTrigger
              className="flex justify-between items-center w-full max-[767px]:px-4 max-[767px]:py-4 md:px-6 md:py-6 lg:px-10 lg:py-8
                font-['sora']  font-semibold text-[24px] max-[1500px]:text-[20px] max-[767px]:text-[18px] text-start transition-all duration-300 [&>svg]:hidden group hover:no-underline"
            >
              <span>{item.question}</span>
              <span>
                <RightArrowIcon className="transform text-[140c44] transition-transform duration-300 group-data-[state=open]:rotate-90" />
              </span>
            </AccordionTrigger>
            <AccordionContent
              className="px-4 min-[416px]:px-6 pb-3 min-[416px]:pb-4 md:px-10 md:pb-8
                font-['sora'] font-normal text-lg max-[1500px]:text-base max-[767px]:text-[15px] max-[767px]:leading-[24px] max-[1100px]:leading-[27px] leading-10 transition-all duration-300"
            >
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
