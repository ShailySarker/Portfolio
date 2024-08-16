"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { testimonialsData } from '../data/testimonialData'

export default function TestimonialsLayout() {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [testimonialsData?.length]);

    const handleTabClick = (index) => {
        setCurrentIndex(index);
    };
    return (
        <div id='testimonials' className='lg:px-28 md:px-8 px-5 dark:bg-black dark:text-white text-black bg-white lg:pt-24 md:pt-16 pt-12'>
           <div>
                <h3 className='font-semibold lg:text-6xl md:text-4xl text-3xl text-center'>Testimonials</h3>
                <div className='flex justify-center'>
                    <p className='lg:text-lg md:text-base text-sm lg:pt-8 md:pt-5 pt-4 lg:w-[60%] md:w-[75%] text-center'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
                </div>
            </div>
            <div className='lg:mt-16 md:mt-14 mt-10 lg:w-[80%] md:w-[90%] mx-auto'>
                <div className='flex md:flex-row flex-col lg:gap-12 md:gap-6 gap-5 items-center bg-[#F8F8F8] lg:py-12 lg:px-10 md:py-9 md:px-8 py-5 px-5 rounded-xl'>
                    <div className='md:w-1/4 w-[48%]'>
                        <Image className='rounded-full' src={testimonialsData[currentIndex]?.image} alt='Reviewer Image' />
                    </div>
                    <div className='md:w-3/4 relative'>
                        <p className='relative flex-wrap text-justify'>
                            <span className='absolute top-[-3px] left-[-15px] text-[#FD6F00] font-bold lg:text-xl md:text-xl text-xl'>“</span>
                            <span className='text-[#424242] lg:text-lg md:text-base text-sm'>
                                {testimonialsData[currentIndex]?.message}
                            </span>
                            <span className='relative -bottom-[12px] -right-[3px] text-[#FD6F00] font-bold lg:text-xl md:text-xl text-xl'>”</span>
                        </p>
                        <h5 className='font-semibold text-black lg:text-lg md:text-base text-sm lg:pt-4 md:pt-3 pt-2'>
                            {testimonialsData[currentIndex]?.name}
                        </h5>
                        <h5 className='text-black lg:text-base md:text-sm text-xs lg:pt-1 pt-[2px]'>
                            {testimonialsData[currentIndex]?.position}
                        </h5>
                    </div>

                </div>
            </div>

            {/* Tab bar */}
            <div className='flex justify-center lg:mt-14 md:mt-12 mt-8'>
                {testimonialsData?.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => handleTabClick(index)}
                        className={`lg:h-[10px] md:h-2 h-[6px] lg:w-10 md:w-8 w-6 rounded-xl mx-[6px] cursor-pointer ${currentIndex === index ? 'bg-[#FD6F00]' : 'bg-[#e0e0e0]'
                            }`}
                    />
                ))}
            </div>

        </div >
    )
}
