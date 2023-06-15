import React from 'react'
import NavBar from '@/components/navbar'
import Header from '@/components/Header'
import Skills from '@/components/Skills'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
        <div className='min-h-screen bg-slate-800 flex flex-col'>
                <div className='sticky top-0 z-30'><NavBar /></div>       
               <Header />
               <Skills />
               <Footer />
        </div>
    </main>
  )
}
