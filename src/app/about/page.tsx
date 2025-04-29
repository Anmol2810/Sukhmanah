"use client";
import { motion } from "framer-motion";
import lotus from '@/assets/lotus 1.png';
import Image from 'next/image';
import { Sacramento } from 'next/font/google';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

export const runtime = "edge";

const sacramento = Sacramento({
  subsets: ['latin'],
  weight: '400',
});

export default function Aboutpage() {
    return (
        <motion.div initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{ duration: 1.3 }}>
        <section className='h-[73vh]'>
            <audio autoPlay loop src="../meditation-music-aboutPage.mp3"/>
            <Parallax pages={3} className='overflow-x-hidden'>
                <ParallaxLayer 
                offset={0}
                speed={1}
                factor={13}
                className='para'/>

                <ParallaxLayer 
                offset={2}
                speed={1}
                factor={1}
                />
                <ParallaxLayer 
                offset={0.17}
                speed={0.5}>
                    <div className='flex justify-center'>
                        <h1 className='text-4xl md:text-5xl font-bold leading-snug text-center text-[#13275C]'>The Journey of<br /><strong className={sacramento.className}><span className="text-[#FF8BD1] text-[66px]">sukh</span><span className="text-[#13275C] text-[66px]">manah</span></strong><br/>in Mental Healthcare</h1>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                offset={0.95}
                speed={1}>
                    <div>
                        <h1 className='header-head mx-10 my-5'>Founding Year</h1>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                offset={0.96}
                speed={1}
                className='flex justify-center md:justify-end'>
                    <div>
                        <p className='text-[#13275C] text-xl mx-10 w-[300px] mt-20 text-center md:text-left md:mt-5'>Sukhmanah was established in 2010, merging ancient wisdom with contemporary mental health practices.</p>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                offset={1}
                speed={1}>
                    <div>
                        <h1 className='header-head mx-10 my-5'>Key Milestones</h1>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                offset={1}
                speed={1}
                className='flex justify-center md:justify-end'>
                    <div>
                        <p className='text-[#13275C] text-xl mx-10 w-[300px] mt-20 text-center md:text-left md:mt-5'>In 2015, we launched our first community outreach program, enhancing mental health awareness.</p>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                offset={1.9}
                speed={1}>
                    <div>
                        <h1 className='header-head mx-10 my-5'>Innovative Services</h1>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                offset={1.9}
                speed={1}
                className='flex justify-center md:justify-end'>
                    <div>
                        <p className='text-[#13275C] text-xl mx-10 w-[300px] mt-20 text-center md:text-left md:mt-5'>Our unique therapy methods were recognized in 2018, setting new standards in mental healthcare.</p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                offset={2}
                speed={1}>
                    <div>
                        <h1 className='header-head mx-10 my-5'>Recent Achievements</h1>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                offset={2}
                speed={1}
                className='flex justify-center md:justify-end'>
                    <div>
                        <p className='text-[#13275C] text-xl mx-10 w-[300px] mt-20 text-center md:text-left md:mt-5'>In 2023, we expanded our online resources, making mental health support accessible to all.</p>
                    </div>
                </ParallaxLayer>                    
                <ParallaxLayer 
                offset={2.5}
                speed={0.5}
                factor={2}
                className='para2'/>
                <ParallaxLayer className='opacity-10 md:opacity-100'
                sticky={{start:0.28, end:1.3}}
                speed={0.05}
                >
                    <div className='flex justify-center'>
                        <Image src = {lotus} alt='lotus' className='mt-20' width={400} height={350}/>
                    </div>
                </ParallaxLayer>
            </Parallax>
        </section>
        </motion.div>
    );
};