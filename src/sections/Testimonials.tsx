"use client"
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import React from "react";
const testimonials = [
  {
    text: "Sukhmanah helped me find peace during my toughest days. Their resources are life-changing!",
    imageSrc: avatar1,
    name: "Raavi M.",
    username: "@raavihere",
  },
  {
    text: "I've never felt more understood and supported. Sukhmanah is a haven for mental wellness.",
    imageSrc: avatar2,
    name: "Josh Kumar",
    username: "@jkofficial",
  },
  {
    text: "Sukhmanah gave me tools to manage my anxiety better. I can't thank them enough!",
    imageSrc: avatar3,
    name: "Arjun Raj",
    username: "@itsarjunnn",
  },
  {
    text: "From meditation guides to stress-relief tips, Sukhmanah has everything I need for a calmer mind",
    imageSrc: avatar4,
    name: "Nikhil Ramakrishnan",
    username: "@nikhilonmusic",
  },
  {
    text: "he personalized plans on Sukhmanah work wonders. It's like having a personal therapist online!",
    imageSrc: avatar5,
    name: "Vikram lizo",
    username: "@lizoVikram",
  },
  {
    text: "The guided exercises and advice on Sukhmanah have transformed my daily mindset. I feel so much lighter!",
    imageSrc: avatar6,
    name: "Anjali T.",
    username: "@unburned",
  },
  {
    text: "Thanks to Sukhmanah, I've learned to prioritize my well-being. It's more than a website—it's a lifeline.",
    imageSrc: avatar7,
    name: "Jai Patel",
    username: "@jpatelsdesign",
  },
  {
    text: "Sukhmanah made self-care easy and approachable. I feel more in control of my emotions now.",
    imageSrc: avatar8,
    name: "Simran Kaur",
    username: "@siiimran",
  },
  {
    text: "Sukhmanah's blogs and expert advice have been my go-to for mental health support. Highly recommended!",
    imageSrc: avatar9,
    name: "Ritik Sharma",
    username: "@iamritik",
  },
];

const firstCol = testimonials.slice(0, 3);
const secondCol = testimonials.slice(3, 6);
const thirdCol = testimonials.slice(6, 9);

const TestimonialsColumn = (props: { className?: string; testimonials: typeof testimonials; duration?: number }) => (
  <div className={twMerge("flex flex-col gap-6 pb-6", props.className)}>
  <motion.div animate={{
    translateY: "-50%",
  }} transition={{
    duration: props.duration || 10,
    repeat: Infinity,
    ease: "linear",
    repeatType: "loop",
  }}
  >
    {[...new Array(2)].fill(0).map((_, index)=>(
      <React.Fragment key={index}>
        {props.testimonials.map(({ text, imageSrc, name, username }) => (
          <div className="revCard" key={username}>
            <div>{text}</div>
            <div className="flex items-center gap-2 mt-5">
              <Image
                src={imageSrc}
                alt={name}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full"
              />
              <div className="flex flex-col">
                <div className="font-bold tracking-tight leading-5">{name}</div>
                <div className="leading-5 tracking-tight">{username}</div>
              </div>
            </div>
          </div>
        ))}
      </React.Fragment>
    ))}
  </motion.div>
  </div>
);

export const Testimonials = () => {
  return <section id="blog" className="bg-white py-20">
    <div className="container">
      <h2 className="header-head">Client Feedback</h2>
      <p className="text-center md:text-left text-xl leading-[30px] tracking-tight text-[#010D3E] mt-5">At Sukhmanah, we believe that every journey towards mental wellness is unique. Our clients have shared stories of renewed hope, resilience, and transformation, inspiring others to seek the support they deserve. Here's what some of them have to say about their experience with us.</p>
      <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
        <TestimonialsColumn testimonials={firstCol} duration={15} />
        <TestimonialsColumn testimonials={secondCol} duration={19} className="hidden md:block"/>
        <TestimonialsColumn testimonials={thirdCol} duration={17} className="hidden lg:block"/>
      </div>
    </div>
  </section>;
};
