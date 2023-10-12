import React from 'react'

// import icons
import { BiSearch } from 'react-icons/bi'
import { AiOutlineHeart } from 'react-icons/ai'
import { FiShoppingBag } from 'react-icons/fi'

// import images
import logo from '../../Assist/Images/Madam Trending 1.png'
import { NavLink, useLocation } from 'react-router-dom'

export const Header = () => {

  const location = useLocation();
  const { pathname } = location;

  console.log(pathname)

  return (
    <>
      {/* header */}

      <header>

        <div className="flex justify-between items-center px-16 py-1">

          {/* search icon */}
          <div className="search">
            <BiSearch className='text-xl' />
          </div>

          {/* logo */}
          <div className="logo ms-[37px]">
            <img src={logo} className='w-16' />
          </div>

          {/* other icons */}
          <div className="oter-icons flex gap-4">
            <AiOutlineHeart className='text-2xl' />
            <FiShoppingBag className='text-2xl' />
          </div>

        </div>

      </header>

      {/* nav */}
      <nav>

        {/* nav links */}
        <div className="flex justify-center items-center gap-3 bg-blue p-3">
          <NavLink to={"/"} className={`${pathname == "/" && "font-bold underline underline-offset-1"} flex justify-center items-center w-16 text-white font-noto font-normal transition-all hover:font-bold hover:underline hover:underline-offset-1`}>Home</NavLink>
          <NavLink to={"product"} className={`${pathname == "/product" && "font-bold underline underline-offset-1"} flex justify-center items-center w-16 text-white font-noto font-normal transition-all hover:font-bold hover:underline hover:underline-offset-1`}>Product</NavLink>
        </div>

      </nav>


    </>
  )
}
