import React from 'react'

// improt image
import cosmatics from "../../../../Assist/Images/Rectangle 3274.png"

export const Cosmatics = () => {
    return (
        <div className="cosmatics relative">
            <img src={cosmatics} alt="image" className='w-full object-cover object-center' />

            <div className="flex flex-col justify-center items-center px-6 py-20 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-1/2 bg-lightPink">
                <h2 className='font-prata text-[40px]'>Make up Cosmatics</h2>
                <h2 className='font-prata text-[48px] text-blue'>Upto 50% offer</h2>
                <h2 className='font-prata text-[32px] text-lightBlue'>MEGA SALE</h2>
            </div>
        </div>
    )
}
