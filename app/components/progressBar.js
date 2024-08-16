"use client"
import React from 'react';

export default function ProgressBar({ label, value }) {
    return (
        <div className='lg:mb-4 md:mb-3 mb-2'>
            <div className='font-semibold lg:mb-4 md:mb-3 mb-2 lg:text-xl md:text-lg text-base'>{label}</div>
            <div className='lg:h-3 md:h-2 h-2' style={{ position: 'relative', backgroundColor: '#e0e0e0', borderRadius: '10px' }}>
                <div style={{ height: '100%', width: `${value}%`, backgroundColor: '#ff6600', borderRadius: '10px', position: 'relative', transition: 'width 0.3s ease-in-out' }}>
                    <div className='shadow-md lg:w-7 lg:h-7 md:w-6 md:h-6 w-5 h-5' style={{
                        position: 'absolute',
                        top: '50%',
                        right: 0,
                        transform: 'translate(50%, -50%)', 
                        backgroundColor: '#e0e0e0',
                        border: '2px solid #ff6600',
                        borderRadius: '50%',
                    }}></div>
                </div>
            </div>
        </div>

    )
}

