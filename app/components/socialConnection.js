"use client"
import React from 'react'
import facebook from "../../public/images/Facebook.png"
import twitter from "../../public/images/Twitter.png"
import instagram from "../../public/images/Instagram.png"
import linkedIn from "../../public/images/LinkedIn.png"
import facebookDark from "../../public/images/FacebookDark.png"
import twitterDark from "../../public/images/TwitterDark.png"
import instagramDark from "../../public/images/InstagramDark.png"
import linkedInDark from "../../public/images/LinkedInDark.png"
import Image from 'next/image'
import { useTheme } from 'next-themes'

export default function SocialConnection() {
    const { theme } = useTheme();
    const handleComingSoon = () => {
        alert("Coming Soon!!")
    }
    return (
        <div >
            {
                theme === 'dark' ?
                    <div className='flex lg:gap-7 md:gap-6 gap-5'>
                        <Image onClick={handleComingSoon} className='lg:w-8 md:w-6 w-5' src={facebookDark} alt="logo" />
                        <Image onClick={handleComingSoon} className='lg:w-8 md:w-6 w-5' src={twitterDark} alt="logo" />
                        <Image onClick={handleComingSoon} className='lg:w-8 md:w-6 w-5' src={instagramDark} alt="logo" />
                        <Image onClick={handleComingSoon} className='lg:w-8 md:w-6 w-5' src={linkedInDark} alt="logo" />
                    </div> :
                    <div className='flex lg:gap-7 md:gap-6 gap-5'>
                        <Image onClick={handleComingSoon} className='lg:w-8 md:w-6 w-5' src={facebook} alt="logo" />
                        <Image onClick={handleComingSoon} className='lg:w-8 md:w-6 w-5' src={twitter} alt="logo" />
                        <Image onClick={handleComingSoon} className='lg:w-8 md:w-6 w-5' src={instagram} alt="logo" />
                        <Image onClick={handleComingSoon} className='lg:w-8 md:w-6 w-5' src={linkedIn} alt="logo" />
                    </div>
            }
        </div >
    )
}
