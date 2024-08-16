import React from 'react'
import service1 from "../../public/images/Services_service1.png"
import service2 from "../../public/images/Services_service2.png"
import service3 from "../../public/images/Services_service3.png"
import service4 from "../../public/images/Services_service4.png"
import Image from 'next/image'

export default function ServicesLayout() {
    return (
        <div id='services' className='lg:px-28 md:px-8 px-5 dark:bg-black dark:text-white text-black bg-white lg:pt-24 md:pt-16 pt-12'>
            <div>
                <h3 className='font-semibold lg:text-6xl md:text-4xl text-3xl text-center'>Services</h3>
                <div className='flex justify-center'>
                    <p className='lg:text-lg md:text-base text-sm lg:pt-8 md:pt-5 pt-4 lg:w-[60%] md:w-[75%] text-center'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
                </div>
            </div>
            <div className='grid lg:grid-cols-4 grid-cols-2 lg:gap-7 md:gap-6 gap-4 lg:mt-16 md:mt-14 mt-10'>
                <div className='flex flex-col lg:gap-6 md:gap-5 gap-3 bg-[#F8F8F8] lg:py-10 lg:px-6 md:py-8 md:px-5 py-6 px-3 rounded-xl'>
                    <Image src={service1} alt='service1' />
                    <h3 className='font-semibold lg:text-2xl md:text-xl text-lg text-black'>UI/UX</h3>
                    <p className='lg:text-lg md:text-base text-sm text-black'>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
                </div>
                <div className='flex flex-col lg:gap-6 md:gap-5 gap-3 bg-[#F8F8F8] lg:py-10 lg:px-6 md:py-8 md:px-5 py-6 px-3 rounded-xl'>
                    <Image src={service2} alt='service2' />
                    <h3 className='font-semibold lg:text-2xl md:text-xl text-lg text-black'>Web Design</h3>
                    <p className='lg:text-lg md:text-base text-sm text-black'>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
                </div>
                <div className='flex flex-col lg:gap-6 md:gap-5 gap-3 bg-[#F8F8F8] lg:py-10 lg:px-6 md:py-8 md:px-5 py-6 px-3 rounded-xl'>
                    <Image src={service3} alt='service3' />
                    <h3 className='font-semibold lg:text-2xl md:text-xl text-lg text-black'>App Design</h3>
                    <p className='lg:text-lg md:text-base text-sm text-black'>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
                </div>
                <div className='flex flex-col lg:gap-6 md:gap-5 gap-3 bg-[#F8F8F8] lg:py-10 lg:px-6 md:py-8 md:px-5 py-6 px-3 rounded-xl'>
                    <Image src={service4} alt='service4' />
                    <h3 className='font-semibold lg:text-2xl md:text-xl text-lg text-black'>Graphic Design</h3>
                    <p className='lg:text-lg md:text-base text-sm text-black'>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
                </div>
            </div>
        </div>
    )
}
