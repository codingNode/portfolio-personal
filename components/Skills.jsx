import React from 'react'
import TechStach from '@/utils/TeachStack'
import Image from 'next/image'

export default function Skills() {
  return (
    <div className='my-6 md:my-16 mx-6 md:mx-16'>
        <h1 className="text-start font-bold text-4xl text-gray-200 mb-5">Tech. Stack</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-20'>
            {
                TechStach.map((item)=>{
                    return(
                        <div key={item.id} className='col-span-1 border-none rounded-xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
                            <div className='flex flex-col items-center p-4'>
                                <Image src={`/${item.logo}`} alt={item.name} className='inline w-10' width={20} height={20}/>
                                <h1 className='font-semibold text-xl mt-3'>{item.name}</h1>
                                <p className='text-sm'>{item.level}</p>
                            </div>
                        </div> 
                    )
                })
            }
        </div>

    </div>
  )
}
