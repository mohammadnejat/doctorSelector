import { useRouter } from 'next/router'
import React from 'react'
import { IoHeartCircleOutline } from 'react-icons/io5'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
function Footer () {
  const router = useRouter()
  return (
    <>
      <div className='bottom-0 left-0 right-0 flex justify-center h-full mt-2 mb-1 text-base text-center bg-white shadow-lg md:text-2xl'>
        <h1>ساخته شده توسط سیدمحمد نجات </h1>
        <IoHeartCircleOutline className='text-3xl text-cyan-400' />
      </div>
      <div
        className='fixed cursor-pointer md:text-2xl bottom-14 md:!left-14'
        onClick={() => router.push('https://github.com/mohammadnejat')}
      >
        <TfiHeadphoneAlt className='p-1 text-5xl text-white border-2  rounded-full md:text-5xl bg-[#0EA5E9]' />
      </div>
    </>
  )
}

export default Footer
