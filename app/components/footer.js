
import Link from 'next/link'
import React from 'react'
import SocialMedia from './socialMedia'
import Logo from './logo'

export default function Footer() {
    return (
        <div>
            <div className='dark:bg-black dark:text-white bg-[rgb(248,248,248)] text-black flex flex-col items-center lg:gap-20 md:gap-14 gap-12 lg:py-12 md:py-8 py-6'>
                <div className='lg:mt-8 md:mt-5 mt-4'>
                    <Logo />
                </div>
                <div className='md:flex md:flex-row grid grid-cols-3 lg:gap-8 md:gap-6 gap-y-[10px] gap-x-5 lg:text-lg '>
                    <Link href="#">Home</Link>
                    <Link href="#about">About Me</Link>
                    <Link href="#services">Services</Link>
                    <Link href="#projects">Projects</Link>
                    <Link href="#testimonials">Testimonials</Link>
                    <Link href="#contact">Contact</Link>
                </div>
                <SocialMedia />
            </div>
            <div className='bg-[#545454] lg:py-5 md:py-4 py-3'>
                <p className='text-[#FFFFFF] text-center lg:text-lg md:text-base text-sm'>© 2023 <span className='font-bold text-[#FD6F00]'>Mumair</span> All Rights Reserved , Inc.</p>
            </div>
        </div>
    )
}
