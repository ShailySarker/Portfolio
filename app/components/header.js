"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import ThemeToggle from './themeToggle'
import { IoMenu } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import Logo from './logo'

export default function Header() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [click, setClick] = useState(false);
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
        setClick(!click);
    };
    const handleComingSoon = () => {
        alert("Coming Soon!!")
    }
    return (
        <nav className='bg-white dark:bg-black text-black dark:text-white'>
            {/* <nav className='top-0 sticky bg-white z-50'> */}
            <div className='lg:px-28 md:px-8 px-5 lg:py-5 md:py-4 py-3 flex justify-between items-center'>
                <Logo />
                <div className='flex items-center gap-10'>
                    <div className='lg:flex lg:gap-8 lg:text-lg lg:block hidden'>
                        <Link href="/">Home</Link>
                        <Link href="#about">About Me</Link>
                        <Link href="#services">Services</Link>
                        <Link href="#projects">Projects</Link>
                        <Link href="#testimonials">Testimonials</Link>
                        <Link href="#contact">Contact</Link>
                    </div>
                    <div className='flex items-center md:gap-4 gap-[10px]'>
                        <ThemeToggle />
                        <button onClick={handleComingSoon} className='lg:block hidden md:py-2 py-[5px] lg:w-40 md:w-36 w-32 lg:text-lg bg-[#FD6F00] text-white rounded-md'>Download CV</button>
                        <div className='lg:hidden visible'>
                            <button onClick={toggleMobileMenu} className=''>
                                {
                                    click ?
                                        <FaXmark className='md:text-2xl text-xl' /> :
                                        <IoMenu className='md:text-2xl text-xl' />

                                }
                            </button>
                            {
                                isMobileMenuOpen &&
                                <div style={{ zIndex: 9999 }} className="dark:bg-black dark:text-white text-black bg-white lg:hidden absolute md:top-16 top-14 md:right-8 right-5 px-4 md:py-5 py-4 md:w-[185px] w-40 rounded-md shadow-lg border-4 border-[#FD6F00]">

                                    <div className='flex flex-col lg:gap-8 md:gap-3 gap-2 md:text-base lg:hidden visible'>
                                        <Link href="/">Home</Link>
                                        <Link href="#about">About Me</Link>
                                        <Link href="#services">Services</Link>
                                        <Link href="#projects">Projects</Link>
                                        <Link href="#testimonials">Testimonials</Link>
                                        <Link href="#contact">Contact</Link>
                                        <button onClick={handleComingSoon} className='lg:hidden visible md:py-2 py-[5px] lg:w-40 md:w-36 w-32 lg:text-lg bg-[#FD6F00] text-white rounded-md'>Download CV</button>

                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
