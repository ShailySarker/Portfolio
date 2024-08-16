"use client"
import React from 'react'

export default function ContactForm() {
    const handleEmailSubmission = (e) => {
        event.preventDefault();
        const email = e?.target?.email?.value;
        const gmailRegex = /^[a-zA-Z0-9._-]+@gmail\.com$/;
        if (!gmailRegex.test(email)) {
            alert("Email is not in the correct format!");
            return;
        }
        else {
            alert("Your email is submitted successfully !!");
            console.log(email);
            e?.target?.reset();
        }

    }
    return (
        <div>
            <form action="" onSubmit={handleEmailSubmission} className='flex md:flex-row flex-col md:justify-center items-center lg:gap-4 md:gap-3 gap-3 lg:pt-16 md:pt-14 pt-10 lg:pb-24 md:pb-20 pb-16'>
                <input className="shadow-sm lg:py-[10px] md:py-2 py-[5px] lg:px-4 md:px-5 px-4 border-2 border-[#AFAFAF] bg-[#F8F8F8] rounded-lg placeholder:text-[#797979] lg:w-2/5 md:w-1/2 w-5/6" type="email" name="email" id="" required placeholder='Enter Your Email' />
                <button className='shadow-sm lg:py-[10px] md:py-2 py-[5px] lg:w-40 md:w-32 w-[120px] lg:text-lg bg-[#FD6F00] text-white rounded-lg font-medium'>Contact Me</button>
            </form>
        </div>
    )
}
