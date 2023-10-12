import React from 'react'

// import image
import logo from "../../Assist/Images/Madam Trending 1.png"

// import icons
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoTwitter } from 'react-icons/bi'
import { FaTelegramPlane } from "react-icons/fa"
import { LuPlane } from "react-icons/lu"
import { TbClock24 } from "react-icons/tb"
import { FaHandHoldingDollar } from "react-icons/fa6"
import { BsFillCreditCard2FrontFill } from "react-icons/bs"

export const Footer = () => {
    return (
        <footer>

            <div className="flex justify-center bg-blue p-16">
                <div className="column flex px-6 py-6 border-r border-white md:px-16">
                    <div className="icon mr-4">
                        <LuPlane className='text-white text-3xl' />
                    </div>

                    <div className="text">
                        <p className='text-white font-[500]'>Free Shipping</p>
                        <p className='text-white text-[14px] font-[400]'>Free shipping all order</p>
                    </div>
                </div>
                <div className="column flex px-6 py-6 border-r border-white md:px-16">
                    <div className="icon mr-4">
                        <TbClock24 className='text-white text-3xl' />
                    </div>

                    <div className="text">
                        <p className='text-white font-[500]'>Support 24/7</p>
                        <p className='text-white text-[14px] font-[400]'>Support 24 hours a day</p>
                    </div>
                </div>
                <div className="column flex px-6 py-6 border-r border-white md:px-16">
                    <div className="icon mr-4">
                        <FaHandHoldingDollar className='text-white text-3xl' />
                    </div>

                    <div className="text">
                        <p className='text-white font-[500]'>Money Return</p>
                        <p className='text-white text-[14px] font-[400]'>30 days for free return</p>
                    </div>
                </div>
                <div className="column flex px-6 py-6 border-white md:px-16">
                    <div className="icon mr-4">
                        <BsFillCreditCard2FrontFill className='text-white text-3xl' />
                    </div>

                    <div className="text">
                        <p className='text-white font-[500]'>100% Payment Secure</p>
                        <p className='text-white text-[14px] font-[400]'>We ensure secure payment</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="flex justify-center py-16">

                    {/* first column */}
                    <div className="first-column w-[33.3333%]">
                        <div className="logo">
                            <img src={logo} />
                        </div>

                        {/* text */}
                        <div className="text py-4">
                            <p className='leading-7'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            </p>
                        </div>

                        {/* icons */}
                        <div className="icons flex gap-3">
                            <div className="flex justify-center items-center w-8 h-8 bg-blue rounded-[50%] ">
                                <BiLogoFacebook className='text-white text-lg' />
                            </div>
                            <div className="flex justify-center items-center w-8 h-8 bg-blue rounded-[50%] ">
                                <BiLogoTwitter className='text-white text-lg' />
                            </div>
                            <div className="flex justify-center items-center w-8 h-8 bg-blue rounded-[50%] ">
                                <BiLogoLinkedin className='text-white text-lg' />
                            </div>
                            <div className="flex justify-center items-center w-8 h-8 bg-blue rounded-[50%] ">
                                <BiLogoInstagram className='text-white text-lg' />
                            </div>
                        </div>
                    </div>

                    {/* second column */}
                    <div className="second-column flex justify-center w-[33.3333%]">
                        <div>
                            <div className="heading">
                                <h2 className='text-xl font-cormorant text-broun'>MENU</h2>
                            </div>

                            <div className="list pt-3">
                                <ul className='leading-[2.7em]'>
                                    <li>Home</li>
                                    <li>Shop</li>
                                    <li>Products</li>
                                    <li>Bags</li>
                                    <li>Cosmetics</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* third column */}
                    <div className="third-column w-[33.3333%]">
                        <div className="heading">
                            <h2 className='text-xl font-cormorant text-broun'>SUPPORT</h2>
                        </div>

                        <div className="list pt-3">
                            <ul className='leading-[2.7em]'>
                                <li>Frequently Asked Questions</li>
                                <li>Returns and Refunds</li>
                                <li>CGV</li>
                                <li>Legal Notice</li>
                                <li>Track my order</li>
                            </ul>
                        </div>
                    </div>

                    {/* fourth column */}
                    <div className="fourth-column w-[33.3333%]">
                        <div className="heading">
                            <h2 className='text-xl font-cormorant text-broun'>SUPPORT</h2>
                        </div>

                        <div className="text">
                            <p>Subscribe to the newsletter and get some crispy stuff every week.</p>
                        </div>

                        <div className="mail-input relative mt-6">
                            <input type="emal" className='border border-black outline-none rounded py-2 ps-6 pe-10' required placeholder='Enter your e-mail here' />
                            <div className="flex justify-center items-center h-full w-12 bg-blue rounded-r absolute right-0 top-0">
                                <FaTelegramPlane className='text-xl text-white' />
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <div className="flex justify-center items-center p-8 border-t">
                <p className='text-lightGray'>Copyright © 2022 pretty stonese All Rights Reserved.</p>
            </div>
        </footer>
    )
}
