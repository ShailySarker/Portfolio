"use client"
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'
import { MdSunny } from "react-icons/md";
import { BsMoonStars } from "react-icons/bs";

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <div>
            <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            // className="p-2 bg-gray-200 dark:bg-gray-800 rounded"
            >
                {theme === 'dark' ? <MdSunny className='lg:text-2xl md:text-xl' /> : <BsMoonStars className='lg:text-2xl md:text-xl' />}
            </button>
        </div>
    );
};

export default ThemeToggle;