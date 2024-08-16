import React from 'react'
import BannerLayout from './banner'
import AboutLayout from './about'
import ServicesLayout from './services'
import ProjectsLayout from './projects'

export default function HomeLayout() {
    return (
        <>
            <BannerLayout />
            <AboutLayout />
            <ServicesLayout />
            <ProjectsLayout />
        </>
    )
}
