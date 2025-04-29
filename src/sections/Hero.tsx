"use client"
import cogImage from "@/assets/3D_first.png";
import Image from 'next/image';
import Leaf from "@/assets/leaff.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end","end start"],
  });
  const translateY = useTransform(scrollYProgress, [0,1], [-150, 200]);
  return (
    <motion.div initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{ duration: 1.3 }}>
    <section ref={heroRef}
      className="hero-section pb-10"
    >
      <div className="container">
        <div className="md:flex">
          <div className="md:pt-20">
          <h1 style={{color : "#191B45"}}className="lg:text-5xl text-4xl font-black tracking-tighther">Embrace Wellness:<br />
          Ancient Wisdom<span style={{color:"#FC9E9C"}}> Meets Modern </span>Care</h1>
          <p className="text-xl text-[#191B45] tracking-tight mt-5 lg:pr-3">Welcome to Sukhmanah, where we harmonize traditional healing practices with contemporary mental health approaches. Our mission is to foster happiness and comfort for your mind and spirit.</p>
          </div>
          <div className="flex">
            <motion.img src = {cogImage.src} alt='3d model' className="block lg:h-[600px] w-[1500px]"
            animate={{
              translateY:[-10,10],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 4,
              ease: "easeInOut",
            }}
            />
            <motion.img src = {Leaf.src} alt="leaf" width={144} height={144} className="hidden lg:block absolute top-[580px] left-[1100px]"
             style={{
              translateY: translateY,
             }}/> 
          </div>
      </div>
    </div>
    </section>
    </motion.div>
  );
};
