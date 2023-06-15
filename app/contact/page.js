import React from 'react'
import {BsWhatsapp, BsGithub} from 'react-icons/bs'
import {BiMailSend, BiArrowBack} from 'react-icons/bi'
import Link from 'next/link'

export default function page() {
  return (
    <div className='min-h-screen bg-slate-800 flex flex-col items-center text-white justify-center'>

        <div className='text-3xl mb-20'>
            <Link href='/' className='flex flex-row'><BiArrowBack className='mt-1 mr-5 text-gray-300'/> <p className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-transparent bg-clip-text'>to Home Page</p></Link>
        </div>
            <h1 className='font-extrabold text-6xl underline text-start'>Contact Information</h1>
            <div className='flex flex-col items-start'>
            <div className='flex flex-row text-2xl mt-12'>
                <BsWhatsapp/> <p className='ml-5 underline'>+92-312-4115021</p>
            </div>
            <div className='flex flex-row text-2xl mt-8 '>
                <BiMailSend /> <p className='ml-5 underline'>hasnatuetian45@gmail.com</p>
            </div>
            <div className='flex flex-row text-2xl mt-8 '>
                <BsGithub /> <p className='ml-5 underline'>codingNode</p>
            </div>
            </div>
    </div>
  )
}
