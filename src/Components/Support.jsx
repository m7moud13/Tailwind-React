import React from 'react'
import support from '../Images/support.jpg'
import {HiPhone,HiOutlineArrowNarrowRight} from 'react-icons/hi';
import {AiOutlinePhone} from 'react-icons/ai';
import {MdSupport} from 'react-icons/md';
import {BiChip} from 'react-icons/bi';

export const Support = () => {

    return (
    <div name='support' className='w-full mt-24'>
        <div className='w-full h-[700px] bg-gray-900/90 absolute'>
            <img className='w-full h-full object-cover mix-blend-overlay' src={support} alt="/" />
        </div>
        
        <div className='max-w-[1240px] mx-auto text-white relative'>
            <div className='px-4 py-12'>
                <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Support</h2>
                <h3 className='text-5xl font-bold py-6 text-center'>Finding the right team</h3>
                <p className='py-4 text-3xl text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In repudiandae veritatis ratione error tenetur, voluptates architecto possimus ad! Omnis minima ea quidem quisquam unde beatae, minus illo et cum vel?</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <HiPhone size={30} className='w-16  py-1 bg-indigo-600 text-white rounded-lg mt-[-50px]' />
                        <h3 className='font-bold text-2xl my-6'>Sales</h3>
                        <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4 cursor-pointer'>
                        <p className='flex items-center text-indigo-600'>Contact Us <HiOutlineArrowNarrowRight className='ml-2' /></p>
                    </div>
                </div>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <MdSupport size={30}  className='w-16 py-1 bg-indigo-600 text-white rounded-lg mt-[-50px]'  />
                        <h3 className='font-bold text-2xl my-6'>Technical Support</h3>
                        <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4 cursor-pointer'>
                        <p className='flex items-center text-indigo-600'>Contact Us <HiOutlineArrowNarrowRight className=' ml-2' /></p>
                    </div>
                </div>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <BiChip size={30} className='w-16  py-1 bg-indigo-600 text-white rounded-lg mt-[-50px]'  />
                        <h3 className='font-bold text-2xl my-6'>Media Inquiries</h3>
                        <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4  cursor-pointer'>
                        <p className='flex items-center text-indigo-600'>Contact Us <HiOutlineArrowNarrowRight className=' ml-2' /></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
