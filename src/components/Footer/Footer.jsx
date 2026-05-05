import React from 'react'
import { MdOutlineEmail } from "react-icons/md"
import { FaGithub } from 'react-icons/fa'
import { CiLinkedin } from "react-icons/ci"
import { HiPhone } from 'react-icons/hi'
import { FaFacebook } from 'react-icons/fa'

const Footer = () => {
    return (
        <div id='Footer' className='flex flex-col lg:flex-row justify-between lg:justify-around bg-[#0e1946] text-white p-6 lg:p-12 items-start lg:items-center gap-4 lg:gap-0'>
            <div className='mt-2 lg:mt-0 text-left lg:text-left'>
                <h1 className='text-xl lg:text-5xl xl:text-6xl font-bold'>Contact</h1>
                <h3 className='text-xs lg:text-lg xl:text-2xl font-normal mt-1'>Feel free to reach out</h3>

            </div>
            <ul className='text-sm lg:text-lg xl:text-xl mb-2 lg:mb-0 text-left lg:text-left'>
                {/* <li className='flex gap-1 items-center'>
                    <MdOutlineEmail size={30} />
                    mohittt1642002@gmail.com 
                </li> */}
                <li className='flex gap-1 items-center'>
                    <MdOutlineEmail size={30}/><a href='mailto: anjgovltd@gmail.com' target='_blank' rel='noopener noreferrer'> anjgovltd@gmail.com</a>
                </li>
             
                <li className='flex gap-1 items-center'>
                    <CiLinkedin size={30} /><a href='https://www.linkedin.com/in/ritik-roshan-jha-a44779398' target='_blank' rel='noopener noreferrer'>
                  www.linkedin.com/in/ritik-roshan-jha-a44779398 </a>
                </li>
                <li className='flex gap-1 items-center'>
                    <FaFacebook size={30} /><a href='https://www.facebook.com/share/1JLnXd6Zgf/' target='_blank' rel='noopener noreferrer'>
                    www.facebook.com/Ritik.jha</a>
                </li>
                 <a href='https://wa.me/9773657224'target='blank' rel=''>
                <li className='flex gap-2 items-center'>
                    <HiPhone size={25} /> 
                    97736 57224
                </li></a>
                {/* <li className='flex gap-2 items-center'>
                    <FaTwitter size={25} />
                    @ArvindPal696706

                </li> */}
            </ul>
        </div>
    )
}

export default Footer
