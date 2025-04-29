import Head from "next/head";
import { Hero } from '@/sections/Hero';
import { Services } from '@/sections/services';
import { Harmony } from '@/sections/harmony';
import { Testimonials } from '@/sections/Testimonials';
import { CallToAction } from '@/sections/CallToAction';
import { Faq } from '@/sections/Faq';
import { Footer } from '@/sections/Footer';

export const runtime = "edge";
export default function Home() {
  return <>
    <Hero/>
    <Services/>
    <Harmony/>
    <Testimonials/>
    <CallToAction/>
    <Faq/>
    <Footer/>
  </>
};
