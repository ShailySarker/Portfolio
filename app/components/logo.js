"use client"
import React from 'react'
import Image from 'next/image'
import logo from "../../public/images/Header_logo.png"
import logoDark from "../../public/images/Header_logoDark.png"
import { useTheme } from 'next-themes';

export default function Logo() {
    const { theme } = useTheme();

    return (
        <div>
            {theme === 'dark' ? (
                <Image className='lg:max-w-60 md:w-40 w-32' src={logoDark} alt="Dark Mode Logo" />
            ) : (
                <Image className='lg:max-w-60 md:w-40 w-32' src={logo} alt="Light Mode Logo" />
            )}
        </div>
    )
}
