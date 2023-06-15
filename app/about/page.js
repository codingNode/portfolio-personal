import React from 'react'
import Link from 'next/link'
import {BiArrowBack, } from 'react-icons/bi'
import {TiTick} from 'react-icons/ti'

const education=[
    {
        id: 1,
        degree: 'MS Electrcial Engineering',
        year: '2023',
        inst: 'UET, Lahore'
    },
    {
        id: 2,
        degree: 'BS Electrical Engineering',
        year: '2015',
        inst: 'UET, Lahore'
    }
]

const Certificates= [
    {
        id: 1,
        name: 'Full-Stack Web Development with React-Specialization',
        year: '2021',
        courses: 'React | Expressjs | MongoDB | Nodejs',
        inst: 'Coursera',
        link: 'https://www.coursera.org/account/accomplishments/specialization/NWZWQTDBLDYD'
    },
    {
        id: 2,
        name: 'Meta React Native-Specialization',
        year: '2023',
        courses: ' Mobile Development | Version Control | React Basics | Principle of UI/UX | JavaScript | Working with data',
        inst: 'Coursera',
        link: 'https://www.coursera.org/account/accomplishments/specialization/8YTBZEP8WV3J'
    },
    {
        id: 3,
        name: 'JavaScript, jQuery, and JSON',
        year: '2022',
        courses: 'HTML & CSS | Javascript | jQuery | JSON ',
        inst: 'Coursera',
        link: 'https://www.coursera.org/account/accomplishments/verify/PTP3REAE5YA2'
    },
    {
        id: 4,
        name: 'Front-End JavaScript Frameworks: Angular',
        year: '2022',
        courses: 'Angular JS | Typescript',
        inst: 'Coursera',
        link: 'https://www.coursera.org/account/accomplishments/verify/9YKACFY4ESLD'
    },
    {
        id: 5,
        name: 'AWS: Publish a NodeJS Website from Scratch',
        year: '2023',
        courses: 'AWS',
        inst: 'Coursera',
        link: 'https://www.coursera.org/account/accomplishments/verify/8LDYSCCS6W5R'
    },
    {
        id: 6,
        name: 'Python for Data Science, AI & Development',
        year: '2023',
        courses: 'Python | AI | APIs Integration',
        inst: 'Coursera',
        link: 'https://www.coursera.org/account/accomplishments/verify/WS6C6KK75KC4'
    },
    {
        id: 7,
        name: 'Introduction to Cloud Computing',
        year: '2023',
        courses: 'Cloud Native | DevOps | Iaas, Paas & Saas | Cloud Computing',
        inst: 'Coursera',
        link: 'https://www.coursera.org/account/accomplishments/verify/KQBLZU6NBESQ'
    },
]

export default function About() {
  return (
    <div className='min-h-screen bg-slate-800 flex flex-col items-center'>
        
        <div className='mt-20 md:mt-48 text-3xl'>
            <Link href='/' className='flex flex-row'><BiArrowBack className='mt-1 mr-5 text-gray-300'/> <p className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-transparent bg-clip-text'>to Home Page</p></Link>
        </div>
        
        <div className='text-start my-5'>
        <div className='mb-10'>
            <h1 className='text-gray-300 text-4xl font-bold underline'>Education</h1>
            {
                education.map((item)=>{
                    return(
                        <div key={item.id}>
                            <ul className='list-none text-gray-300 mt-8'>
                                <li className='flex flex-row text-2xl font-medium'>
                                    <TiTick />     
                                   <p className=''>{item.degree}</p>          
                                </li>
                                <li className='ml-5 text-sm'> <p>{item.year} | {item.inst}</p></li>

                            </ul>

                        </div>
                    )
                })
            }
        </div>

        <div>
            <h1 className='text-4xl text-gray-300 font-bold underline mb-10'>Certifications</h1>
            <ul className='list-none text-gray-300 mt-8'>
            {
                Certificates.map((item)=>{
                    return(
                        <div key={item.id} className='my-10'>
                            
                                <li className='flex flex-row text-2xl font-medium'>
                                    <TiTick />
                                    <p>{item.name}</p>
                                </li>
                                <div>
                                <li><p className='ml-5 text-sm text-gray-400'>{item.year}</p></li>
                                <li className='ml-5 text-sm text-gray-400'>{item.courses}</li>
                                <li className='ml-5 text-sm text-gray-400'>{item.inst} | {item.link}</li>
                                </div>
                                
                            

                        </div>
                    )
                })
            }
            </ul>
        </div>
        </div>
    </div>
  )
}
