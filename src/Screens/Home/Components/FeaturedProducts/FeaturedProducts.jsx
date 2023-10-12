import React from 'react'

// import image
import group from "../../../../Assist/Images/Group.png"
import daimand from "../../../../Assist/Images/pngwing.com.png"
import bag1 from "../../../../Assist/Images/image 6.png"
import bag2 from "../../../../Assist/Images/image 7.png"
import creame from "../../../../Assist/Images/Rectangle 3236 (1).png"
import creame2 from "../../../../Assist/Images/Rectangle 3219.png"
import guchiBag from "../../../../Assist/Images/Rectangle 7.png"
import mackup from "../../../../Assist/Images/Rectangle 3969.png"

export const FeaturedProducts = () => {
    return (

        <div className="products">
            <div className="container">
                <div className="top-heading flex flex-col items-center py-16">
                    <div className="daimand relative">
                        <img src={group} alt="image" className='w-12' />
                        <img src={daimand} alt="image" className='w-5 absolute top-[12%] left-1/2 -translate-x-1/2 translate-y-1/2' />
                    </div>

                    <div className="heading mt-3 w-full relative">
                        <h2 className='text-3xl font-noto font-semibold text-center before:absolute before:h-[1px] before:w-[32.33333%] before:bg-black before:left-24 before:top-1/2 after:absolute after:h-[1px] after:w-[32.33333%] after:bg-black after:right-24 after:top-1/2'>Featured Products</h2>
                    </div>
                </div>
            </div>

            <div className="featured-products h-[450px]">
                <div className="flex flex-nowrap w-full gap-6 scrollbar-hidden overflow-auto">

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

            <div className="small-banners py-10">
                <div className="container">
                    <div className="flex flex-1 gap-4">
                        <div className="image flex bg-midGray w-1/2">
                            <div className="content flex flex-1 justify-center items-center">
                                <div className="flex justify-center items-center w-1/2">
                                    <div>
                                        <p className='text-broun font-lato'>90% Off Today</p>
                                        <p className='font-cormorant text-2xl my-2'>Buy Designer Bags</p>
                                        <button className='whitespace-nowrap px-7 py-2 rounded bg-blue text-lg text-white'>Shop Now</button>
                                    </div>
                                </div>

                                <div className="image w-1/2 h-full">
                                    <img src={guchiBag} alt="image" className='w-full h-full' />
                                </div>
                            </div>
                        </div>

                        <div className="image relative">
                            <img src={mackup} alt="image" />
                            <div className="absolute top-[50%] left-16 translate-y-[-50%]">
                                <p className='text-broun font-lato'>90% Off Today</p>
                                <p className='font-cormorant text-2xl my-2'>Buy Designer Bags</p>
                                <button className='whitespace-nowrap px-7 py-2 rounded bg-blue text-lg text-white'>Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
