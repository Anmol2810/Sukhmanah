import Image from 'next/image';
import MenuIcon from "@/assets/menu.svg";
import logo from '@/assets/logo.png';
export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className='py-1'>
        <div className= "container">
          <div className = "flex items-center justify-between">
            <Image src = {logo} alt = "new logo" height={70} width={70}/>
            <MenuIcon className=" h-5 w-5 md:hidden"/>
            <nav className="hidden md:flex gap-6 text-black/60 items-center capitalize">
              <a href='/'>home</a>
              <a href='/about'>about</a>
              <a href='/#services'>our services</a>
              {/* <a href='#'>blog</a> */}
              <button style={{
                backgroundColor: '#FFA0A0'
              }} className="text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">Connect with us</button>
            </nav>        
          </div>
        </div>
      </div>
    </header>
  );
};
