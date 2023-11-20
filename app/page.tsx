"use client"
import { useState } from 'react'
import SideBar from '@/app/navbar';

export default function Homepage() {
  const [isNavbarOpen] = useState(false);

  return (
    <div className='bg-white'>
      <SideBar />
      <div className={`lg:ml-60 h-screen overflow-y-auto ${isNavbarOpen ? 'lg:ml-0' : ''}`}>
        <div className='mx-4 my-2 md:mx-8 md:my-3 h-auto '>
          {/* Header */}
          <div className='flex flex-col md:flex-row items-center justify-between'>
            <span className='font-bold font-dmsans text-xl text-[#be123c] '>
              Selamat Datang
            </span>
           
              </div>
            </div>
          </div>
        </div>
  );
}