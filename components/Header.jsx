import React from 'react'
import profilePic from '../public/images/pic.png'
import Image from 'next/image'

export default function Header() {
  return (
    <div className='grid grid-cols-10 bg-gray-300  drop-shadow-[0px_4px_9px_rgba(0,255,255,0.6)]'>
        <div className='col-span-full md:col-start-1 md:col-span-6 mx-6 md:mx-16 my-4 md:mt-16'>
            <div className='flex flex-col'>
                <h1 className='text-xl md:text-5xl text-[#154c79] font-bold'>Hi, I am Hasnat Gulbaz!</h1>
                <p className='text-xs md:text-base text-gray-800 tracking-normal md:tracking-widest md:leading-10 text-justify md:font-medium mt-2 md:mt-4'>
                I am a skilled full stack developer with 2 years of professional experience in building websites using MERN and MEAN technologies. Additionally, I possess a working knowledge of React Native. Throughout my career, I have also gained experience in PHP, Python, and integrating OpenAI APIs etc. In addition to my technical expertise, I have developed excellent communication skills, enabling me to effectively interact with clients and stakeholders.
                </p>
            </div>
        </div>
        <div className='md:col-start-7 md:col-span-4 md:my-5'>
            <Image className='hidden md:inline-flex w-48 md:w-96 h-auto md:ml-10 ' src={profilePic} alt='Profile Image'/>
        </div>
        
    </div>
  )
}
