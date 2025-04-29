import harImage from '@/assets/3D_second.png';
import Image from 'next/image';
import Bandage from '@/assets/bandage.png';
import People from '@/assets/Peopletogether.png'
export const Harmony = () => {
    return (
        <section className="harmony py-20">
            <div className="container">
                <div className='md:flex'>
                    <div className="flex">
                        <Image src = {harImage} alt='3d model' className="hidden md:block lg:mt-5 block lg:h-[550px] md:h-[400px] md:w-[1900px]"/>
                    </div>
                    <div className='md:w-[2200px]'>
                        <div className='tag mt-5'>Harmony</div>
                        <h2 className='header-head traking-tighter'>Experience the Best of Both Worlds</h2>
                        <p className='traking-tight mt-2 text-center md:text-left text-[18px]'>At Sukhmanah, we blend ancient wisdom with modern mental health practices. Our holistic approach nurtures your mind and spirit, fostering genuine well-being.</p>
                        <div className="gridNew mt-5">
                            <div>
                                <div className='flex justify-center'>
                                    <Image src = {Bandage} alt="bandage" className=" h-[40px] w-[40px] my-2" />
                                </div>
                                <h3 className="text-xl font-bold my-2">Holistic Healing</h3>
                                <p className='text-sm my-2'>Embrace a balanced approach to mental wellness that honors tradition and innovation.</p>
                            </div>
                            <div>
                                <div className='flex justify-center'>
                                    <Image src = {People} alt="people thoughts" className=" h-[40px] w-[40px] my-2"/>
                                </div>
                                <h3 className="text-xl font-bold my-2">Culturally Sensitive</h3>
                                <p className='text-sm my-2'>Our services respect diverse backgrounds and promote inclusivity in mental health care.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  };
  