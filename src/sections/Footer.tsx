import footerLogo from "@/assets/android-chrome-512x512.png";
import Image from "next/image";
import Insta from "@/assets/social-insta.svg";
import LinkedIn from "@/assets/social-linkedin.svg";
import Twitter from "@/assets/social-x.svg";
export const Footer = () => {
  return <footer className="bg-gradient-to-r from-[#F4E4FB] to-[#ffd7d7] py-10 text-center">
    <div className="container">
      <div className="flex justify-center">
        <Image src={footerLogo} alt="logo" height={50}/>
      </div>
      <nav className="flex flex-col gap-5 mt-5 md:flex-row md:justify-center">
        <a href="">About</a>
        <a href="">Services</a>
        <a href="">Help</a>
        <a href="">Contact</a>
      </nav>
      <div className="flex justify-center gap-5 mt-5">
        <Image src={Insta} alt="instagram" width={24} height={24}/>
        <Image src={LinkedIn} alt="linkedin" width={24} height={24}/>
        <Image src={Twitter} alt="twitter" width={24} height={24}/>
      </div>
      <p className="mt-6">&copy; 2025 Sukhmanah, Inc. All rights reserved.</p>
    </div>
  </footer>
};
