import React from 'react'
import Link from 'next/link'
import { IoIosArrowBack } from 'react-icons/io'
function ProductArticle (item) {
  return (
    <article
      key={item.id}
      className='w-full px-2 mt-4 transition duration-300 bg-white rounded-md shadow-lg md:w-6/12 hover:shadow-2xl'
    >
      <Link href={`/${item.id}`}>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <img src={item.img} alt='#' className='w-16 h-16 rounded-full' />
            <div className='flex flex-col gap-2 mt-2 mr-3'>
              {item.title}

              <span className='text-sm font-normal gray-text md:text-base'>
                {item.professional}
              </span>
              <span className='text-sm font-normal gray-text md:text-base'>
                {item.experince} سال سابقه
              </span>
            </div>
          </div>
          <div className=''>
            <IoIosArrowBack className='text-3xl text-sky-600' />
          </div>
        </div>
      </Link>
    </article>
  )
}

export default ProductArticle
