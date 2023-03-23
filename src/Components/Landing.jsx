import React, { useEffect } from 'react'
import Ladningbg from "../Images/cyber-bg.png"
import {BiCoinStack} from 'react-icons/bi'
import {AiFillDatabase} from 'react-icons/ai'
import {GoCloudDownload} from 'react-icons/go'
import {MdApi} from 'react-icons/md'
import Aos from 'aos'
import "aos/dist/aos.css"

export const Landing = () => {
    useEffect(() => {
        Aos.init({duration:1000})
    },[])
    return (
<div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8' data-aos="fade-right">
                <p className='text-2xl'>Unique Sequencing & Production</p>
                <h1 className='py-3 text-5xl md:text-7xl font-bold'>Cloud Management</h1>
                <p className='text-2xl'>This is our Tech brand.</p>
                <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
            </div>
            <div>
                <img className='w-full' src={Ladningbg} alt="/" />
            </div>
            <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl' >
                <p>Data Services</p>
                <div className='flex justify-between flex-wrap px-4 mt-2' >
                    <p className='flex px-4 py-2 text-slate-500'><BiCoinStack className='h-6  mr-1.5 text-indigo-600' /> App Security</p>
                    <p className='flex px-4 py-2 text-slate-500'><AiFillDatabase className='h-6  mr-1.5 text-indigo-600' /> Dashboard Design</p>
                    <p className='flex px-4 py-2 text-slate-500'><GoCloudDownload className='h-6  mr-1.5 text-indigo-600' /> Cloud Data</p>
                    <p className='flex px-4 py-2 text-slate-500'><MdApi className='h-6 mr-1.5 text-indigo-600' /> API</p>
                </div>
            </div>
        </div>
    </div>
    )
}
