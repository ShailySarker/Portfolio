import SocialConnection from "../components/socialConnection"
import Image from 'next/image'
import photo from "../../public/images/Banner_photo.png"

export default function BannerLayout() {
    return (
        <div id='' className='lg:px-28 md:px-8 px-5 dark:bg-black dark:text-white text-black bg-white md:grid md:grid-cols-2 flex flex-col-reverse items-center lg:gap-10 md:gap-5 gap-5 lg:pt-9 md:pt-5 pt-3'>
            <div>
                <h5 className='font-semibold lg:text-2xl md:text-xl text-lg'>Hi I am</h5>
                <h5 className='text-[#FD6F00] font-semibold lg:text-2xl md:text-xl text-lg lg:pt-4 md:pt-1 pt-[2px]'>Muhammad Umair</h5>
                <h3 className='font-bold lg:text-8xl md:text-6xl text-5xl'>UI & UX</h3>
                <h3 className='font-bold lg:text-8xl md:text-6xl text-5xl md:text-right md:pl-0 pl-20'>Designer</h3>
                <p className='lg:text-lg md:text-base text-sm lg:pt-8 md:pt-5 pt-4'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
                <button className='md:py-2 py-[5px] lg:w-40 md:w-36 w-32 lg:text-lg bg-[#FD6F00] text-white rounded-md lg:mt-6 md:mt-4 mt-4'>Hire Me</button>
            </div>
            <div className='flex md:justify-end justify-center'>
                <div className='flex flex-col items-center lg:gap-7 md:gap-6 gap-5'>
                    <div className='lg:w-[90%] md:w-[88%] w-[88%]'>
                        <Image className='' src={photo} alt='banner-photo' />
                    </div>
                    <SocialConnection />
                </div>
            </div>
        </div>
    )
}
