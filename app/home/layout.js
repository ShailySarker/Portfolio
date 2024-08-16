import React from 'react'
import BannerLayout from './banner'
import AboutLayout from './about'
import ServicesLayout from './services'

export default function HomeLayout() {
    return (
        <>
            <BannerLayout />
            <AboutLayout />
            <ServicesLayout />
        </>
    )
}
