import React from 'react'
import ContactForm from '../components/contactForm'

export default function ContactLayout() {

    return (
        <div id='contact' className='lg:px-28 md:px-8 px-5 dark:bg-black dark:text-white text-black bg-white lg:pt-24 md:pt-16 pt-12'>
            <div>
                <h3 className='font-semibold lg:text-6xl md:text-4xl text-3xl text-center'>Lets Design Together</h3>
                <div className='flex justify-center'>
                    <p className='lg:text-lg md:text-base text-sm lg:pt-8 md:pt-5 pt-4 lg:w-[60%] md:w-[75%] text-center'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
                </div>
            </div>
            <ContactForm />
        </div>
    )
}
