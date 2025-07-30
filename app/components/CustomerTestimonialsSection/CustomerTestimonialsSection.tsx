'use client'
import React , {useState} from "react";
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
        {/* Section Header */}
           <div className="w-full max-w-[1200px] mx-auto flex flex-col item-center gap-10">
                                <div className="flex flex-col items-center    text-center">
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
        <div className="grid grid-cols-1 min-[767px]:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="w-full max-w-[462px] cursor-pointer transition-all duration-300 rounded-[20px] p-6 bg-white text-[#9a9a9a] border border-[#ededed] hover:bg-[#0095fe] hover:text-white hover:scale-[1.02] hover:shadow-lg"
            >
              <div>
                <div className="flex items-center mb-4">
                  <Avatar className="rounded-full border-2 border-white shadow-md w-10 h-10 hover:w-12 hover:h-12 transition-all duration-300">
                    <AvatarImage src={testimonial.avatarSrc} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="ml-3">
                    <p className="font-bold text-sm text-[#001422] group-hover:text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-xs group-hover:text-white">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <p className="text-base leading-[40px] font-['sora'] max-[1100px]:leading-[27px]">
                  {testimonial.text}
                </p>

                {/* Stars */}
                <div className="flex mt-6 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      src="/star-1.svg"
                      alt="star"
                      className="w-5 h-5 group-hover:hidden"
                    />
                  ))}
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      src="/star-1-1.svg"
                      alt="star active"
                      className="w-6 h-6 hidden group-hover:inline"
                    />
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
           </div>
    </section>
  );
};
