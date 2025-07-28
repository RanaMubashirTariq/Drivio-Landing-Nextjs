import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../app/ui/avatar";
import { Card, CardContent } from "../../../app/ui/card";

// Testimonial data for mapping
const testimonials = [
  {
    id: 1,
    name: "Jane Cooper",
    role: "gorgy kste",
    text: "This Drivio is very cool, very   friendly, fast and very friendly and clear service  and good service.",
    avatarSrc: "/ellipse-4-2.png",
    featured: false,
  },
  {
    id: 2,
    name: "Leslie Alexander",
    role: "jmma jijm",
    text: "A very comfortable and safe taxi, with super friendly and clear service at a very affordable price.",
    avatarSrc: "/ellipse-4.png",
    featured: false,
  },
  {
    id: 3,
    name: "Cody Fisher",
    role: "bassjd wesh",
    text: "It must have been very comfortable with this Drivio service, cheap, friendly, affordable.",
    avatarSrc: "/ellipse-4-1.png",
    featured: false,
  },
];

export default function CustomerTestimonialsSection () {
  return (
    <section className="w-full py-10  bg-[#f3f3f3] px-[120px] max-[1300px]:px-[60px] max-[1100px]:px-[50px] max-[767px]:px-[25px]">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-8 min-[770px]:mb-10 md:mb-16 text-center">
          <h2 className="font-semibold text-[40px] text-[#001422] leading-[72px]  [font-family:'sora'] max-[1100px]:text-[36px] max-[1100px]:leading-[48px]  max-[767px]:text-[28px] max-[767px]:leading-[38px]">
            What Our Customers
            <br />
            Have To Say
          </h2>
          <p className="font-normal text-base text-[#9a9a9a] [font-family:'sora'] leading-[32px] ">
            Here's what our customers say with CareHealth
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 min-[767px]:grid-cols-2 lg:grid-cols-3 gap-4 min-[320px]:gap-5 min-[770px]:gap-6 justify-items-center">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className={`w-full max-w-[462px] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group ${
                testimonial.featured
                  ? "bg-[#0095fe] text-white shadow-[10px_24px_54px_#0000000f] min-h-[300px] min-[320px]:min-h-[320px] min-[770px]:min-h-[340px]"
                  : "bg-white text-[#9a9a9a] border border-solid border-[#ededed] hover:bg-[#0095fe] hover:text-white min-h-[260px] min-[320px]:min-h-[280px] min-[770px]:min-h-[300px]"
              } rounded-[16px] min-[320px]:rounded-[18px] min-[770px]:rounded-[20px] ${
                testimonial.featured ? "" : "md:mt-[31px]"}
                ${testimonial.id === 3 ? "max-[900px]:col-span-2 max-[900px]:mx-auto max-[767px]:col-span-1" :  ""}
                `}
            >
              <CardContent className="p-4 min-[320px]:p-5 min-[770px]:p-6 md:p-8">
                <div className="flex items-center">
                <Avatar
                      className={`w-10 h-10 min-[770px]:w-10 min-[770px]:h-10 ${
                        testimonial.featured ? "w-12 h-12" : "group-hover:w-12 group-hover:h-12"
                      } rounded-full border-2 border-white shadow-md transition-all duration-300`}
                    >

                    <AvatarImage
                      src={testimonial.avatarSrc}
                      alt={testimonial.name}
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-[#c4c4c4] text-white font-semibold">
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="ml-3 min-[320px]:ml-4">
                    <p
                      className={`font-bold transition-colors duration-300 ${
                        testimonial.featured
                          ? "text-white text-sm min-[320px]:text-base"
                          : "text-[#001422] group-hover:text-white text-xs min-[320px]:text-sm"
                      } tracking-[0.50px] [font-family:'sora']`}
                    >
                      {testimonial.name}
                    </p>
                    <p
                      className={`transition-colors duration-300 ${
                        testimonial.featured
                          ? "text-white/90 text-xs min-[320px]:text-sm"
                          : "text-[#9a9a9a] group-hover:text-white/90 text-[10px] min-[320px]:text-xs"
                      } font-normal tracking-[0.50px] [font-family:'sora']`}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <p
                  className={`transition-colors duration-300 ${
                    testimonial.featured
                      ? "text-white mt-[25px] "
                      : "text-[#9a9a9a] group-hover:text-white mt-4 min-[320px]:mt-5 min-[770px]:mt-6"
                  } font-normal text-base leading-[40px] [font-family:'sora']`}
                >
                  {testimonial.text}
                </p>

                <div className="flex mt-10  max-[767px]:mt-5 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`${
                        testimonial.featured 
                          ? "w-5 h-5 min-[320px]:w-6 min-[320px]:h-6 min-[770px]:w-7 min-[770px]:h-7" 
                          : "w-4 h-4 min-[320px]:w-5 min-[320px]:h-5 group-hover:w-6 group-hover:h-6"
                      } flex items-center justify-center transition-all duration-300`}
                    >
                      {testimonial.featured ? (
                        <img
                          className="w-3 h-[12px] min-[320px]:w-4 min-[320px]:h-[15px]"
                          alt="Star"
                          src="/star-1-1.svg"
                        />
                      ) : (
                        <img
                          className={`w-2 h-2 min-[320px]:w-[10px] min-[320px]:h-[10px] group-hover:w-6 group-hover:h-6 transition-all duration-300`}
                          alt="Star"
                          src="/star-1.svg"
                        />
                      )}
                    </div>

                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
