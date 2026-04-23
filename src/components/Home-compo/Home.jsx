import React from 'react'
// import studentA from "../../assets/studentA.png"
import ritikimage from "../../assets/ritikimage.jpeg"
import TextChange from '../TextChange'


const Home = () => {
    return (
        <div className='bg-[#ffffe3] text-black flex flex-col md:flex-row w-full h-auto justify-between items-center md:items-end p-5 md:p-10 lg:p-20 gap-8 relative pb-[50px]'>
            <div className='w-full md:w-1/2 md:pt-10 relative z-10 text-center md:text-left'>
                <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'><TextChange /></h1>
                <p className='text-sm md:text-2xl tracking-tight mb-[50px]'>I am a Data Analytics enthusiast with a background in BBA and hands-on experience in data cleaning, data visualization, and data analysis. I work with tools like Microsoft Excel and SQL to transform raw data into meaningful insights using pivot tables, charts, and dashboards.
                   
                </p>
                <a href='https://wa.me/7428612412'target='blank'>
                <button className='mt-1 md:mt-10 text-white py-2 px-6 text-sm md:text-lg md:px-7 opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] mb-[20px]'>Contact Me</button></a>
            </div>
            <div className='w-full md:w-1/2 flex items-end justify-center relative z-20 md:ml-16'><img className='w-[60%] md:w-[70%] lg:w-[85%] max-w-xs md:max-w-md lg:max-w-lg h-auto aspect-square object-cover animate-updown rounded-full' src={ritikimage} alt="" /></div>
        </div>
    )
}

export default Home
