import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
export const About = () => {
    useEffect(() => {
        Aos.init({duration:1000})
    },[])
    return (
    <div name='about' className='w-full my-32' data-aos="fade-up">
    <div className='max-w-[1240px] mx-auto'>
        <div className='text-center'>
            <h2 className='text-4xl font-bold'>Trusted by developers across the world</h2>
            <p className='text-2xl py-6 text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque asperiores earum placeat veritatis dignissimos itaque.</p>
        </div>

        <div className='grid md:grid-cols-3 gap-4 px-2 text-center '>
            <div className='border duration-300 py-8 rounded-xl shadow-xl hover:scale-105' >
                <p className='text-6xl font-bold text-indigo-600'>100%</p>
                <p className='text-gray-500 mt-2'>Completion</p>
            </div>
            <div  className='border py-8 duration-300 rounded-xl shadow-xl hover:scale-105' >
                <p className='text-6xl font-bold text-indigo-600'>24/7</p>
                <p className='text-gray-500 mt-2'>Delivery</p>
            </div>
            <div className='border py-8 duration-300 rounded-xl shadow-xl hover:scale-105 hover:shadow-2xl' >
                <p className='text-6xl font-bold text-indigo-600'>100K</p>
                <p className='text-gray-500 mt-2'>Transactions</p>
            </div>
        </div>
    </div>
</div>
    )
}
