import React from 'react'
import photo from "../../public/images/About_photo.png"
import Image from 'next/image'
import ProgressBar from '@/app/components/progressBar'

export default function AboutLayout() {
  return (
    <div id='about' className='lg:px-28 md:px-8 px-5 dark:bg-black dark:text-white text-black bg-white md:grid grid-cols-2 flex flex-col items-center lg:gap-0 md:gap-3 gap-5 lg:pt-24 md:pt-16 pt-12'>
      <div className='lg:w-[90%] md:w-[100%] w-[88%]'>
        <Image className='' src={photo} alt='aboutMe Photo' />
      </div>
      <div>
        <h3 className='font-semibold lg:text-6xl md:text-4xl text-3xl '>About Me </h3>
        <p className=' lg:text-lg md:text-base text-sm lg:pt-8 md:pt-5 pt-4'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
        <div className='lg:pt-3 md:pt-3 pt-4'>
          <ProgressBar label="UX" value={89} />
          <ProgressBar label="Website Design" value={80} />
          <ProgressBar label="App Design" value={94} />
          <ProgressBar label="Graphic Design" value={90} />
        </div>
      </div>
    </div>
  )
}
