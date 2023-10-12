import React from 'react'

// improt image
import group from "../../../../Assist/Images/Group.png"
import daimand from "../../../../Assist/Images/pngwing.com.png"
import creame from "../../../../Assist/Images/Rectangle 3279.png"
import leady from "../../../../Assist/Images/Group 48096795.png"
import bag from "../../../../Assist/Images/Rectangle 5.png"
import arrow from "../../../../Assist/Images/arrow.png"


export const BagsAndMackup = () => {
    return (
        <div className="container">
            <div className="top-heading flex flex-col items-center py-16">
                <div className="daimand relative">
                    <img src={group} alt="image" className='w-12' />
                    <img src={daimand} alt="image" className='w-5 absolute top-[12%] left-1/2 -translate-x-1/2 translate-y-1/2' />
                </div>

                <div className="heading mt-3 w-full relative">
                    <h2 className='text-3xl font-noto font-semibold text-center before:absolute before:h-[1px] before:w-[32.33333%] before:bg-black before:left-0 before:top-1/2 after:absolute after:h-[1px] after:w-[32.33333%] after:bg-black after:right-0 after:top-1/2'>Explore Popular Bags & Makeups</h2>
                </div>
            </div>

            <div className="bags-makcup">
                <div className="flex">
                    <div className="containt h-full w-1/2 pe-2 relative">
                        <img src={creame} alt="image" className='w-full h-full' />

                        <div className="absolute top-20 left-0 rounded px-10 py-2 bg-blue text-2xl text-white">
                            New
                        </div>

                        <div className="absolute top-48 left-8">
                            <h3 className='font-noto py-2 text-3xl text-white'>face Cream</h3>
                            <p className='flex gap-4 font-noto py-2 text-lg text-white'>Explore now <img src={arrow} className='h-[22px] w-[22px]' /> </p>
                        </div>
                    </div>

                    <div className="containt h-full w-1/2 ps-2">
                        <div className="pb-2 h-1/2 relative">
                            <img src={leady} alt="image" className='h-[300px] w-full' />
                        </div>
                        <div className="pt-3 h-1/2 relative">
                            <img src={bag} alt="image" className='h-[300px] w-full' />
                            <div className="absolute top-7 left-0 rounded px-10 py-2 bg-blue text-lg text-white">
                                New
                            </div>
                            <div className="absolute top-28 left-8">
                                <h3 className='font-noto py-2 text-3xl text-white'>New Colloection <br /> Bags</h3>
                                <p className='flex gap-4 font-noto py-2 text-lg text-white'>Explore now <img src={arrow} className='h-[22px] w-[22px]' /> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
