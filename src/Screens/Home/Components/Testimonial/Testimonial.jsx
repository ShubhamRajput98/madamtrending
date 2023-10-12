import React from 'react'

// import image
import pic1 from "../../../../Assist/Images/Ellipse 86.png"
import pic2 from "../../../../Assist/Images/Ellipse 88.png"
import pic3 from "../../../../Assist/Images/Ellipse 87.png"
import { FaStar } from 'react-icons/fa'

export const Testimonial = () => {
    return (
        <div className="container">
            <div className="flex flex-col flex-1 justify-center items-center py-20">
                <div className="heading">
                    <h3 className='font-noto text-3xl'>Testimonials</h3>
                    <p className='font-lato text-[15px] text-lightGray text-center'>What they say</p>
                </div>

                <div className="containt w-full pt-20">
                    <div className="images w-full flex justify-center items-center gap-6">
                        <img src={pic1} alt="picture" className='w-18 h-18' />
                        <img src={pic2} alt="picture" className='outline outline-broun outline-offset-4 outline-1 rounded-[50%]' />
                        <img src={pic3} alt="picture" className='w-18 h-18' />
                    </div>

                    <div className="flex justify-center py-8">
                        <p className='text-center w-1/2'>“Thank you very much i am very happy to be able to work in here the place is really comfortable and very clean high level i like it.”</p>
                    </div>


                    <div className="starts flex  flex-col items-center justify-center">
                        {
                            <div className='flex'>
                                {[...Array(5)].map((star, index) => {
                                    // const starRating = index + 1;
                                    return (
                                        <FaStar
                                            key={index}
                                            className='text-yellow-500'
                                        />
                                    );
                                })}
                            </div>
                        }

                        <p className='font-lato font-bold text-[17px]'>David K.</p>
                        <p className='text-[11px] text-lightGray'>Customer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
