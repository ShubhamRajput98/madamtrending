import React from 'react'

// import image
import first from "../../../../Assist/Images/image 34.png"
import second from "../../../../Assist/Images/Rectangle 2.png"

export const Banner = () => {
    return (
        <div className='flex h-[774px] w-full relative'>

            {/* first image */}
            <div className="w-1/2">
                <img src={first} alt='image' className='h-full w-full object-center object-cover' />
            </div>

            {/* second image */}
            <div className="w-1/2">
                <img src={second} alt='image' className='h-full w-full object-center object-cover' />
            </div>

            <div className="flex justify-center items-center h-full w-full bg-overlay absolute top-0 left-0">
                <div className="content flex flex-col items-center gap-12">

                    <div className="heading text-center">
                        <h1 className='text-white font-noto font-extrabold text-[65px]'>SALE UP TO</h1>
                        <h1 className='text-white font-noto font-extrabold text-[65px]'>80% OFF</h1>
                    </div>

                    <div className="button">
                        <button className='border border-white rounded text-white font-noto font-extrabold text-[28px] px-6 py-1 transition hover:bg-blue hover:border-transparent'>
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
