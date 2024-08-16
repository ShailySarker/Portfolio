"use client"
import React from 'react'
import Image from 'next/image'
import facebook from "../../public/images/Facebook.png"
import twitter from "../../public/images/Twitter.png"
import instagram from "../../public/images/Instagram.png"
import linkedIn from "../../public/images/LinkedIn.png"
import { useTheme } from 'next-themes'
import facebookDark from "../../public/images/FacebookDark.png"
import twitterDark from "../../public/images/TwitterDark.png"
import instagramDark from "../../public/images/InstagramDark.png"
import linkedInDark from "../../public/images/LinkedInDark.png"

export default function SocialMedia() {
    const { theme } = useTheme();
    const handleComingSoon = () => {
        alert("Coming Soon!!")
    }
    return (
        <div>
            {
                theme === 'dark' ?
                    <div className='flex lg:gap-6 md:gap-5 gap-4'>
                        <Image onClick={handleComingSoon} className='lg:w-8 md:w-6 w-5' src={facebookDark} alt="logo" />
                        <Image onClick={handleComingSoon} className='lg:w-8 md:w-6 w-5' src={twitterDark} alt="logo" />
                        <Image onClick={handleComingSoon} className='lg:w-8 md:w-6 w-5' src={instagramDark} alt="logo" />
                        <Image onClick={handleComingSoon} className='lg:w-8 md:w-6 w-5' src={linkedInDark} alt="logo" />
                    </div> :
                    <div className='flex lg:gap-6 md:gap-5 gap-4'>
                        <Image onClick={handleComingSoon} className='lg:w-8 md:w-6 w-5' src={facebook} alt="logo" />
                        <Image onClick={handleComingSoon} className='lg:w-8 md:w-6 w-5' src={twitter} alt="logo" />
                        <Image onClick={handleComingSoon} className='lg:w-8 md:w-6 w-5' src={instagram} alt="logo" />
                        <Image onClick={handleComingSoon} className='lg:w-8 md:w-6 w-5' src={linkedIn} alt="logo" />
                    </div>
            }
        </div>
    )
}
