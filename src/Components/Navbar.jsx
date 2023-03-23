    import React, { useState } from 'react'
    import { Link } from 'react-scroll'
    import {FaBars,FaTimes } from 'react-icons/fa';
    export const Navbar = () => {
        const [nav, setNav] = useState(false)
        const handleClick = () => setNav(!nav)

        const OpenNav =()=> setNav(!nav)
    return (
        <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
            <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>BRAND.</h1>
            <ul className='hidden md:flex'>
            <li className='hover:text-gray-600 duration-300'><Link to="home" smooth={true} duration={500}>Home</Link></li>
            <li className='hover:text-gray-600 duration-300'><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
            <li className='hover:text-gray-600 duration-300'><Link to="support" smooth={true} offset={-50} duration={500}>Support</Link></li>
            <li className='hover:text-gray-600 duration-300'><Link to="platforms" smooth={true} offset={-100} duration={500}>Platforms</Link></li>
            <li className='hover:text-gray-600 duration-300'><Link to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li>
            </ul>
            </div>
            <div className='hidden md:flex pr-4'>
            <button className='border-none bg-transparent text-black mr-4'>
                Sign In
            </button>
            <button className='px-8 py-3'>Sign Up</button>
            </div>
            <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ?<FaBars size={22} onClick={() => OpenNav()} className="w-[20px] cursor-pointer" /> :<FaTimes onClick={() => OpenNav()} size={22} className="w-[20px]  cursor-pointer" />}
            
            </div>
        </div>

        <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
            <li className='border-b-2 border-zinc-300 w-full hover:text-indigo-500 hover:border-indigo-600 hover:translate-x-1 duration-300'><Link onClick={OpenNav} to="home" smooth={true} duration={500}>Home</Link></li>
            <li className='border-b-2 border-zinc-300 w-full hover:text-indigo-500 hover:border-indigo-600 hover:translate-x-1 duration-300'><Link onClick={OpenNav} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
            <li className='border-b-2 border-zinc-300 w-full hover:text-indigo-500 hover:border-indigo-600 hover:translate-x-1 duration-300'><Link onClick={OpenNav} to="support" smooth={true} offset={-50} duration={500}>Support</Link></li>
            <li className='border-b-2 border-zinc-300 w-full hover:text-indigo-500 hover:border-indigo-600 hover:translate-x-1 duration-300'><Link onClick={OpenNav} to="platforms" smooth={true} offset={-100} duration={500}>Platforms</Link></li>
            <li className='border-b-2 border-zinc-300 w-full hover:text-indigo-500 hover:border-indigo-600 hover:translate-x-1 duration-300'><Link onClick={OpenNav} to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li>

            <div className='flex flex-col my-4'>
                <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
                <button className='px-8 py-3'>Sign Up</button>
            </div>
        </ul>
        </div>
    )
    }
