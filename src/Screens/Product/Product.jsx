import React from 'react'

// import image
import bag from "../../Assist/Images/image 52.png"
import smlBag from "../../Assist/Images/image 6.png"
import bag1 from "../../Assist/Images/image 6.png"
import bag2 from "../../Assist/Images/image 7.png"
import creame from "../../Assist/Images/Rectangle 3236 (1).png"
import creame2 from "../../Assist/Images/Rectangle 3219.png"

// import icons
import { FaStar } from 'react-icons/fa'
import { TbMessageDots } from 'react-icons/tb'
import { PiShoppingCartSimpleBold } from 'react-icons/pi'
import { BiLogoFacebook, BiLogoLinkedin, BiLogoTwitter } from 'react-icons/bi'


export const Product = () => {
    return (
        <>
            <div className="flex">
                <div className="w-1/2 bg-thinGray">
                    <div className="image flex justify-center p-3 border ms-3">
                        <img src={bag} alt="image" />
                    </div>

                    <div className="image-group flex justify-center items-center gap-4 py-6" >
                        <img src={smlBag} alt="image" className='w-14' />
                        <img src={smlBag} alt="image" className='w-14' />
                        <img src={smlBag} alt="image" className='w-14' />
                        <img src={smlBag} alt="image" className='w-14' />

                    </div>
                </div>

                <div className="w-1/2">
                    <div className='p-20 pe-48'>
                        <h2 className='font-cormorant text-[34px]'>Brick Red Bag</h2>
                        <div className="rating flex items-center gap-2">
                            <span>
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
                            </span>
                            <span className='text-lightGray'>3.5</span>
                            <span className='flex items-center text-lightGray'><TbMessageDots /> 120 comment</span>
                        </div>
                        <h2 className='font-cormorant text-[34px] py-6'>$420.00</h2>
                        <p>
                            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
                        </p>
                        <div className="color-options py-6">
                            <p className='text-[18px] text-lightGray'>Colours Available</p>
                            <ul className='flex gap-4 pt-3'>
                                <li className='h-6 w-6 rounded-[50%] bg-black'></li>
                                <li className='h-6 w-6 rounded-[50%] bg-amber-400'></li>
                                <li className='h-6 w-6 rounded-[50%] bg-pink-500'></li>
                                <li className='h-6 w-6 rounded-[50%] bg-pink-950'></li>
                            </ul>
                        </div>
                        <div className="add-to-cart flex gap-4 items-center">
                            <p className='text-[18px] border rounded flex gap-4 px-4 py-2'>
                                <span>-</span>
                                <span>1</span>
                                <span>+</span>
                            </p>
                            <button className='flex items-center gap-2 text-[18px] whitespace-nowrap px-10 py-2 rounded bg-blue text-lg text-white'><PiShoppingCartSimpleBold /> Add to cart</button>
                            <p className='text-[18px] border rounded px-8 py-2'>$420.00</p>
                        </div>
                        <div className="line h-[1px] w-full bg-lightGray my-8"></div>
                        <div className="product-details">

                            <div className="flex mb-4">
                                <p>SKU</p>
                                <p className='ms-12 text-blue'>:</p>
                                <p className='ms-2 text-blue'>SS001</p>
                            </div>
                            <div className="flex mb-4">
                                <p>Category</p>
                                <p className='ms-[11px] text-blue'>:</p>
                                <p className='ms-2 text-blue'>Bag</p>
                            </div>
                            <div className="flex mb-4">
                                <p>Tags</p>
                                <p className='ms-[45px] text-blue'>:</p>
                                <p className='ms-2 text-blue'>Bag & Makeups</p>
                            </div>
                        </div>
                        <div className="share-buttons flex">
                            <p>Share</p>
                            <p className='ms-[38px] text-blue'>:</p>
                            <div className="icons flex gap-3 ms-2">
                                <div className="flex justify-center items-center w-5 h-5 bg-blue rounded-[50%] ">
                                    <BiLogoFacebook className='text-white text-lg' />
                                </div>
                                <div className="flex justify-center items-center w-5 h-5 bg-blue ">
                                    <BiLogoLinkedin className='text-white text-lg' />
                                </div>
                                <div className="flex justify-center items-center w-5 h-5 bg-blue rounded-[50%] ">
                                    <BiLogoTwitter className='text-white text-lg' />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className='p-20 pe-10'>
                <div className="product-details">
                    <div className="specification flex gap-16 py-6 border-b">
                        <h3 className='font-cormorant text-[18px] text-blue relative before:absolute before:h-1 before:w-full before:bg-blue before:bottom-[-5px]'>Product Details</h3>
                        <h2 className='font-cormorant text-[18px] text-lightGray'>Specification</h2>
                        <h3 className='font-cormorant text-[18px] text-lightGray'>Ratings & Reviews</h3>
                    </div>

                    <div className="ratings-reviews pt-10">
                        <p className='text-lightGray mb-8'>
                            100% Bio-washed CotCormorantton – makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.
                        </p>

                        <p className='text-lightGray mb-8'>
                            A key objective is engaging digital marketing customers and allowing them to interact with the brand through servicing and delivery of digital media. Information is easy to access at a fast rate through the use of digital communications.
                        </p>
                        <p className='text-lightGray mb-8'>
                            Users with access to the Internet can use many digital mediums, such as Facebook, YouTube, Forums, and Email etc. Through Digital communications it creates a Multi-communication channel where information can be quickly exchanged around the world by anyone without any regard to whom they are. Social segregation plays no part through social mediums due to lack of face to face communication and information being wide spread instead to a selective audience.
                        </p>
                    </div>
                </div>
            </section>

            <section className='p-20 pb-0 pt-0'>
                <div className="related-products">
                    <div className="heading">
                        <h2 className='font-nato text-[32px]'>Related Products</h2>
                    </div>

                    <div className="featured-products h-[450px] pt-10">
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
                </div>
            </section>
        </>
    )
}
