"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { projectData } from '../data/projectData'

export default function ProjectsLayout() {

    const [toggle, setToggle] = useState(3);
    const [showAll, setShowAll] = useState(false);

    const updateToggle = (id) => {
        setToggle(id);
    };
    const handleToggle = () => {
        setShowAll(!showAll);
    };

    const filterUIData = projectData.filter(project => project?.type === "UI");
    const filterWebDesignData = projectData.filter(project => project?.type === "webDesign");
    const filterAppDesignData = projectData.filter(project => project?.type === "appDesign");
    const filterGraphicDesignData = projectData.filter(project => project?.type === "graphicDesign");
    return (
        <div id='projects' className='lg:px-28 md:px-8 px-5 dark:bg-black dark:text-white text-black bg-white lg:pt-24 md:pt-16 pt-12'>
            <div>
                <h3 className='font-semibold lg:text-6xl md:text-4xl text-3xl text-center'>My Projects</h3>
                <div className='flex justify-center'>
                    <p className='lg:text-lg md:text-base text-sm lg:pt-8 md:pt-5 pt-4 lg:w-[60%] md:w-[75%] text-center'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
                </div>
            </div>
            <div className='flex md:flex-row flex-wrap justify-center lg:gap-4 md:gap-[14px] gap-3 lg:mt-14 md:mt-12 mt-8'>
                <button className={`md:py-2 py-1 lg:px-5 md:px-4 px-3 rounded-xl border-[1px] border-[#545454] font-medium lg:text-lg text-base ${toggle === 1 ? " all bg-[#FD6F00] text-white" : "bg-[#F8F8F8] text-black"}`} onClick={() => updateToggle(1)}>All</button>
                <button className={`md:py-2 py-1 lg:px-5 md:px-4 px-3 rounded-xl border-[1px] border-[#545454] font-medium lg:text-lg text-base ${toggle === 2 ? "uiUx bg-[#FD6F00] text-white" : "bg-[#F8F8F8] text-black"}`} onClick={() => updateToggle(2)}>UI/UX</button>
                <button className={`md:py-2 py-1 lg:px-5 md:px-4 px-3 rounded-xl border-[1px] border-[#545454] font-medium lg:text-lg text-base ${toggle === 3 ? "webDesign bg-[#FD6F00] text-white" : "bg-[#F8F8F8] text-black"}`} onClick={() => updateToggle(3)}>Web Design</button>
                <button className={`md:py-2 py-1 lg:px-5 md:px-4 px-3 rounded-xl border-[1px] border-[#545454] font-medium lg:text-lg text-base ${toggle === 4 ? "appDesign bg-[#FD6F00] text-white" : "bg-[#F8F8F8] text-black"}`} onClick={() => updateToggle(4)}>App Design</button>
                <button className={`md:py-2 py-1 lg:px-5 md:px-4 px-3 rounded-xl border-[1px] border-[#545454] font-medium lg:text-lg text-base ${toggle === 5 ? "graphicDesign bg-[#FD6F00] text-white" : "bg-[#F8F8F8] text-black"}`} onClick={() => updateToggle(5)}>Graphic Design</button>
            </div>
            <div className='lg:mt-16 md:mt-14 mt-10'>
                {/* all data */}
                <div className={toggle === 1 ? "all" : "hidden"}>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-x-6 md:gap-y-10 gap-7'>
                        {projectData?.slice(0, showAll ? projectData.length : 3)?.map((project) => (
                            <div key={project?.id}>
                                <Image className='rounded-2xl' src={project?.image} alt={`Project ${project?.id} Image`} />
                                <p className='text-[#FD6F00] lg:text-lg md:text-base text-sm lg:pt-8 md:pt-5 pt-4'>
                                    {project?.type === "UI" && <span>UI/UX</span>}
                                    {project?.type === "webDesign" && <span>Web Design</span>}
                                    {project?.type === "appDesign" && <span>App Design</span>}
                                    {project?.type === "graphicDesign" && <span>Graphic Design</span>}
                                </p>
                                <h3 className='lg:pt-[2px] pt-[1px] font-bold lg:text-xl md:text-lg text-base'>{project?.title}</h3>
                            </div>
                        ))}
                    </div>
                    {projectData.length > 3 && (
                        <div className='lg:mt-12 md:mt-10 mt-8 flex justify-center'>
                            <button
                                onClick={handleToggle}
                                className='md:py-2 py-[5px] lg:w-40 md:w-36 w-32 lg:text-lg bg-[#FD6F00] text-white font-medium rounded-md'
                            >
                                {showAll ? 'Show Less' : 'Show More'}
                            </button>
                        </div>
                    )}
                </div>
                {/* UI/UX Projects */}
                <div className={toggle === 2 ? "uiUx" : "hidden"}>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-x-6 md:gap-y-10 gap-7'>
                        {
                            filterUIData?.map((project) => (
                                <div key={project?.id}>
                                    <Image className='rounded-2xl' src={project?.image} alt={`Project ${project?.id} Image`} />
                                    <p className='text-[#FD6F00] lg:text-lg md:text-base text-sm lg:pt-8 md:pt-5 pt-4'>
                                        {project?.type === "UI" && <span>UI/UX</span>}
                                    </p>
                                    <h3 className='lg:pt-[2px] pt-[1px] font-bold lg:text-xl md:text-lg text-base'>{project?.title}</h3>
                                </div>

                            ))
                        }
                    </div>
                </div>
                {/* Web Design Projects */}
                <div className={toggle === 3 ? "webDesign" : "hidden"}>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-x-6 md:gap-y-10 gap-7'>
                        {
                            filterWebDesignData?.map((project) => (
                                <div key={project?.id}>
                                    <Image className='rounded-2xl' src={project?.image} alt={`Project ${project?.id} Image`} />
                                    <p className='text-[#FD6F00] lg:text-lg md:text-base text-sm lg:pt-8 md:pt-5 pt-4'>
                                        {project?.type === "webDesign" && <span>Web Design</span>}
                                    </p>
                                    <h3 className='lg:pt-[2px] pt-[1px] font-bold lg:text-xl md:text-lg text-base'>{project?.title}</h3>
                                </div>

                            ))
                        }
                    </div>
                </div>
                {/* App Design Projects */}
                <div className={toggle === 4 ? "appDesign" : "hidden"}>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-x-6 md:gap-y-10 gap-7'>
                        {
                            filterAppDesignData?.map((project) => (
                                <div key={project?.id}>
                                    <Image className='rounded-2xl' src={project?.image} alt={`Project ${project?.id} Image`} />
                                    <p className='text-[#FD6F00] lg:text-lg md:text-base text-sm lg:pt-8 md:pt-5 pt-4'>
                                        {project?.type === "appDesign" && <span>App Design</span>}
                                    </p>
                                    <h3 className='lg:pt-[2px] pt-[1px] font-bold lg:text-xl md:text-lg text-base'>{project?.title}</h3>
                                </div>

                            ))
                        }
                    </div>
                </div>
                {/* Graphic Design Projects */}
                <div className={toggle === 5 ? "graphicDesign" : "hidden"}>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-x-6 md:gap-y-10 gap-7'>
                        {
                            filterGraphicDesignData?.map((project) => (
                                <div key={project?.id}>
                                    <Image className='rounded-2xl' src={project?.image} alt={`Project ${project?.id} Image`} />
                                    <p className='text-[#FD6F00] lg:text-lg md:text-base text-sm lg:pt-8 md:pt-5 pt-4'>
                                        {project?.type === "graphicDesign" && <span>Graphic Design</span>}
                                    </p>
                                    <h3 className='lg:pt-[2px] pt-[1px] font-bold lg:text-xl md:text-lg text-base'>{project?.title}</h3>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
