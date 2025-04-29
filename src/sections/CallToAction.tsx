"use client"
import ArrowRight from '@/assets/arrow-right.svg';
import leaf1 from "@/assets/leaff.png";
import leaf2 from "@/assets/paraleaf.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end","end start"],
  });
  const translateY = useTransform(scrollYProgress, [0,1], [100, -150]);
  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-white to-[#ffd7d7] py-20 overflow-clip">
      <div className="container">
        <div className='text-center relative'>
          <div className="tag">Start Your Journey</div>
          <h1 className="header-head text-center">Begin Your Path To Wellness</h1>
          <p className='text-[17px]'>We're here to support your mental wellness journey.<br/>Whether you have questions about our services or need guidance, feel free to connect with us via email, phone, or our contact form. Our compassionate team is ready to assist you and help you take the first step toward a healthier mind.</p>
          <motion.img
          src={leaf1.src}
          alt='3d leaf 1'
          width={150}
          style={{
            translateY,
          }}
          className='absolute -left-[110px] -top-[15px]'
          />
          <motion.img src={leaf2.src}
          alt='3d leaf 2'
          width={250}
          style={{
            translateY,
            rotate: -30,
          }}
          className='absolute -right-[180px] top-[110px]'
          />
        </div>
        <div className="mt-5 gap-2 p-10 flex justify-center"><button className="bg-gradient-to-r md:text-[18px] from-[#13275C] to-[#0e1b3e] rounded-xl text-white text-[14px] font-semibold tracking-wide mx-5 p-3"><a target="_blank" href='https://wa.me/+91'>Contact Now</a></button><button className="inline-flex md:text-[18px] tracking-wide font-semibold items-center text-[14px]"><span className='schd-btn'>Schedule an Appointment</span><ArrowRight className = "w-7 h-5"/></button></div>
      </div>
    </section>
  );
};
