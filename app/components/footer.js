"use client"
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import logo from "../../public/images/Header_logo.png"
import logoDark from "../../public/images/Header_logoDark.png"
import facebook from "../../public/images/Facebook.png"
import twitter from "../../public/images/Twitter.png"
import instagram from "../../public/images/Instagram.png"
import linkedIn from "../../public/images/LinkedIn.png"
import { useTheme } from 'next-themes'
import facebookDark from "../../public/images/FacebookDark.png"
import twitterDark from "../../public/images/TwitterDark.png"
import instagramDark from "../../public/images/InstagramDark.png"
import linkedInDark from "../../public/images/LinkedInDark.png"

export default function Footer() {
    const { theme } = useTheme();
    return (
        <div>
            <div className='dark:bg-black dark:text-white bg-[rgb(248,248,248)] text-black flex flex-col items-center lg:gap-20 md:gap-14 gap-12 lg:py-12 md:py-8 py-6'>
                <div className='lg:mt-8 md:mt-5 mt-4'>
                    {theme === 'dark' ? (
                        <Image className='lg:max-w-60 md:w-40 w-32' src={logoDark} alt="Dark Mode Logo" />
                    ) : (
                        <Image className='lg:max-w-60 md:w-40 w-32' src={logo} alt="Light Mode Logo" />
                    )}
                </div>
                <div className='md:flex md:flex-row grid grid-cols-3 lg:gap-8 md:gap-6 gap-y-[10px] gap-x-5 lg:text-lg '>
                    <Link href="#">Home</Link>
                    <Link href="#about">About Me</Link>
                    <Link href="#services">Services</Link>
                    <Link href="#projects">Projects</Link>
                    <Link href="#testimonials">Testimonials</Link>
                    <Link href="#contact">Contact</Link>
                </div>
                <div>
                    {
                        theme === 'dark' ?
                            <div className='flex lg:gap-6 md:gap-5 gap-4'>
                                <Image className='lg:w-8 md:w-6 w-5' src={facebookDark} alt="logo" />
                                <Image className='lg:w-8 md:w-6 w-5' src={twitterDark} alt="logo" />
                                <Image className='lg:w-8 md:w-6 w-5' src={instagramDark} alt="logo" />
                                <Image className='lg:w-8 md:w-6 w-5' src={linkedInDark} alt="logo" />
                            </div> :
                            <div className='flex lg:gap-6 md:gap-5 gap-4'>
                                <Image className='lg:w-8 md:w-6 w-5' src={facebook} alt="logo" />
                                <Image className='lg:w-8 md:w-6 w-5' src={twitter} alt="logo" />
                                <Image className='lg:w-8 md:w-6 w-5' src={instagram} alt="logo" />
                                <Image className='lg:w-8 md:w-6 w-5' src={linkedIn} alt="logo" />
                            </div>
                    }
                </div>
            </div>
            <div className='bg-[#545454] lg:py-5 md:py-4 py-3'>
                <p className='text-[#FFFFFF] text-center lg:text-lg md:text-base text-sm'>© 2023 <span className='font-bold text-[#FD6F00]'>Mumair</span> All Rights Reserved , Inc.</p>
            </div>
        </div>
    )
}
