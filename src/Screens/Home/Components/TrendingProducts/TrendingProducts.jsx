import React from 'react'

// import image
import group from "../../../../Assist/Images/Group.png"
import daimand from "../../../../Assist/Images/pngwing.com.png"
import bag1 from "../../../../Assist/Images/image 6.png"
import bag2 from "../../../../Assist/Images/image 7.png"
import creame from "../../../../Assist/Images/Rectangle 3236 (1).png"
import creame2 from "../../../../Assist/Images/Rectangle 3219.png"

export const TrendingProducts = () => {
    return (
        <div className="container">
            <div className="top-heading flex flex-col items-center py-16">
                <div className="daimand relative">
                    <img src={group} alt="image" className='w-12' />
                    <img src={daimand} alt="image" className='w-5 absolute top-[12%] left-1/2 -translate-x-1/2 translate-y-1/2' />
                </div>

                <div className="heading mt-3 w-full relative">
                    <h2 className='text-3xl font-noto font-semibold text-center before:absolute before:h-[1px] before:w-[32.33333%] before:bg-black before:left-24 before:top-1/2 after:absolute after:h-[1px] after:w-[32.33333%] after:bg-black after:right-24 after:top-1/2'>Trending Products</h2>
                </div>
            </div>

            <div className="featured-products">
                <div className="flex justify-center flex-wrap w-full gap-6 scrollbar-hidden overflow-auto">

                    <div className="card flex-nowrap shrink-0 h-max border w-[200px] p-3">
                        <div className="card-image flex justify-center">
                            <img src={bag1} alt="image" />
                        </div>

                        <div className="content pt-10">
                            <p className='font-cormorant'>Brick red Bag </p>

                            <div className="flex gap-3">
                                <p className='font-cormorant'>$420.00</p>
                                <p className='font-cormorant line-through text-lightGray'>$520.00</p>
                            </div>
                        </div>

                        <div className="button py-4">
                            <button className='w-full whitespace-nowrap px-10 py-2 bg-blue text-lg text-white'>Add To Cart</button>
                        </div>
                    </div>

                    <div className="card flex-nowrap shrink-0 h-max border w-[200px] p-3">
                        <div className="card-image flex justify-center">
                            <img src={bag2} alt="image" />
                        </div>

                        <div className="content pt-10">
                            <p className='font-cormorant'>Brick red Bag </p>

                            <div className="flex gap-3">
                                <p className='font-cormorant'>$420.00</p>
                                <p className='font-cormorant line-through text-lightGray'>$520.00</p>
                            </div>
                        </div>

                        <div className="button py-4">
                            <button className='w-full whitespace-nowrap px-10 py-2 bg-blue text-lg text-white'>Add To Cart</button>
                        </div>
                    </div>

                    <div className="card flex-nowrap shrink-0 h-max border w-[200px] p-3">
                        <div className="card-image flex justify-center">
                            <img src={creame} alt="image" />
                        </div>

                        <div className="content pt-10">
                            <p className='font-cormorant'>Brick red Bag </p>

                            <div className="flex gap-3">
                                <p className='font-cormorant'>$420.00</p>
                                <p className='font-cormorant line-through text-lightGray'>$520.00</p>
                            </div>
                        </div>

                        <div className="button py-4">
                            <button className='w-full whitespace-nowrap px-10 py-2 bg-blue text-lg text-white'>Add To Cart</button>
                        </div>
                    </div>

                    <div className="card flex-nowrap shrink-0 h-max border w-[200px] p-3">
                        <div className="card-image flex justify-center">
                            <img src={creame2} alt="image" />
                        </div>

                        <div className="content pt-10">
                            <p className='font-cormorant'>Brick red Bag </p>

                            <div className="flex gap-3">
                                <p className='font-cormorant'>$420.00</p>
                                <p className='font-cormorant line-through text-lightGray'>$520.00</p>
                            </div>
                        </div>

                        <div className="button py-4">
                            <button className='w-full whitespace-nowrap px-10 py-2 bg-blue text-lg text-white'>Add To Cart</button>
                        </div>
                    </div>

                    <div className="card flex-nowrap shrink-0 h-max border w-[200px] p-3">
                        <div className="card-image flex justify-center">
                            <img src={bag1} alt="image" />
                        </div>

                        <div className="content pt-10">
                            <p className='font-cormorant'>Brick red Bag </p>

                            <div className="flex gap-3">
                                <p className='font-cormorant'>$420.00</p>
                                <p className='font-cormorant line-through text-lightGray'>$520.00</p>
                            </div>
                        </div>

                        <div className="button py-4">
                            <button className='w-full whitespace-nowrap px-10 py-2 bg-blue text-lg text-white'>Add To Cart</button>
                        </div>
                    </div>

                    <div className="card flex-nowrap shrink-0 h-max border w-[200px] p-3">
                        <div className="card-image flex justify-center">
                            <img src={bag2} alt="image" />
                        </div>

                        <div className="content pt-10">
                            <p className='font-cormorant'>Brick red Bag </p>

                            <div className="flex gap-3">
                                <p className='font-cormorant'>$420.00</p>
                                <p className='font-cormorant line-through text-lightGray'>$520.00</p>
                            </div>
                        </div>

                        <div className="button py-4">
                            <button className='w-full whitespace-nowrap px-10 py-2 bg-blue text-lg text-white'>Add To Cart</button>
                        </div>
                    </div>

                    <div className="card flex-nowrap shrink-0 h-max border w-[200px] p-3">
                        <div className="card-image flex justify-center">
                            <img src={creame} alt="image" />
                        </div>

                        <div className="content pt-10">
                            <p className='font-cormorant'>Brick red Bag </p>

                            <div className="flex gap-3">
                                <p className='font-cormorant'>$420.00</p>
                                <p className='font-cormorant line-through text-lightGray'>$520.00</p>
                            </div>
                        </div>

                        <div className="button py-4">
                            <button className='w-full whitespace-nowrap px-10 py-2 bg-blue text-lg text-white'>Add To Cart</button>
                        </div>
                    </div>

                    <div className="card flex-nowrap shrink-0 h-max border w-[200px] p-3">
                        <div className="card-image flex justify-center">
                            <img src={creame2} alt="image" />
                        </div>

                        <div className="content pt-10">
                            <p className='font-cormorant'>Brick red Bag </p>

                            <div className="flex gap-3">
                                <p className='font-cormorant'>$420.00</p>
                                <p className='font-cormorant line-through text-lightGray'>$520.00</p>
                            </div>
                        </div>

                        <div className="button py-4">
                            <button className='w-full whitespace-nowrap px-10 py-2 bg-blue text-lg text-white'>Add To Cart</button>
                        </div>
                    </div>

                </div>
            </div>

            <div className="flex justify-center items-center py-16">
                <button className='whitespace-nowrap px-7 py-2 rounded bg-blue text-lg text-white'>Viwe All</button>
            </div>

        </div>
    )
}
