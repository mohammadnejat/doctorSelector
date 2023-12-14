import MyContext from '@/context/context'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { FaCommentAlt } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa6'
import { MdOutlineContactMail } from 'react-icons/md'
import { PiPhoneCallFill } from 'react-icons/pi'
import { Triangle } from 'react-loader-spinner'

function Products () {
  const { usersData, searchedItems } = useContext(MyContext)
  return (
    <section>
      <div className='md:mx-auto '>
        <div className='grid grid-cols-1 gap-3 px-4 justify-items-center'>
          {!usersData.length ? (
            <div className='p-10 mt-40 bg-white shadow'>
              <Triangle
                height='150'
                width='150'
                color='#4fa94d'
                ariaLabel='triangle-loading'
                wrapperStyle={{}}
                wrapperClassName=''
                visible={true}
              />
            </div>
          ) : !searchedItems.length ? (
            usersData.map(item => (
              <article className='w-full p-4 mt-4 transition duration-300 bg-white rounded-md shadow-lg md:w-6/12 hover:shadow-2xl'>
                <div
                  key={item.id}
                  className='p-3 border border-gray-100 rounded-md'
                >
                  <div className='flex justify-between'>
                    <div className='flex'>
                      {' '}
                      <img
                        src={item.img}
                        alt='#'
                        className='w-20 h-20 rounded-full md:w-24 md:h-24'
                      />
                      <div className='flex flex-col items-center gap-2 mt-2 mr-3'>
                        <p className='text-lg md:text-xl black-text'>
                          {item.title}
                        </p>
                        <span className='text-sm font-normal gray-text md:text-base'>
                          {item.professional}
                        </span>
                      </div>
                    </div>
                    <div className=''>
                      <div className='w-20 p-1 font-medium text-center text-white border rounded-md md:w-24 md:p-2 bg-cyan-800'>
                        <p>{item.city}</p>
                      </div>
                    </div>
                  </div>
                  <div className='flex justify-around'>
                    <div className='flex flex-col items-center'>
                      <p className='text-sm font-bold md:text-base'>
                        {item.works}+
                      </p>
                      <span className='text-xs font-medium gray-text md:text-base'>
                        مشاوره آنلاین
                      </span>
                    </div>
                    <div className='h-[60px] border-r border-gray-200' />
                    <div className='flex flex-col items-center'>
                      <div className='flex gap-4'>
                        <div className='flex items-center'>
                          <FaCommentAlt className='text-base text-gray-400 md:text-xl' />
                          <span>681</span>
                        </div>
                        <div className='flex items-center '>
                          <FaStar className='text-base text-green-600 md:text-xl' />
                          <span>{item.rate}</span>
                        </div>
                      </div>
                      <span className='mt-1 text-base font-normal gray-text'>
                        امتیاز و نظر
                      </span>
                    </div>
                  </div>
                </div>
                <div className='h-[80px] bg-gray-200  flex flex-col gap-4 items-center py-2'>
                  <p className='flex items-center gap-4 text-sm font-normal md:text-base'>
                    مشاوره انلاین{' '}
                    <MdOutlineContactMail className='text-base md:text-2xl' />
                  </p>
                  <p className='flex items-center gap-4 text-sm font-normal md:text-base'>
                    مشاوره تلفنی{' '}
                    <PiPhoneCallFill className='text-base md:text-2xl' />
                  </p>
                </div>
                <div className='w-full mt-2 rounded-md bg-sky-600'>
                  <Link
                    href={`/${item.id}`}
                    className='flex justify-center py-2 text-sm text-white md:text-lg md:py-3 hover:shadow-lg'
                  >
                    مشاوره و اطلاعات بیشتر
                  </Link>
                </div>
              </article>
            ))
          ) : (
            searchedItems.map(item => (
              <article className='w-full p-4 mt-4 transition duration-300 bg-white rounded-md shadow-lg md:w-8/12 hover:shadow-2xl'>
                <div
                  key={item.id}
                  className='p-1 border border-gray-100 rounded-md'
                >
                  <div className='flex justify-between'>
                    <div className='flex'>
                      {' '}
                      <img
                        src={item.img}
                        alt='#'
                        className='w-20 h-20 rounded-full md:w-24 md:h-24'
                      />
                      <div className='flex flex-col items-center gap-2 mt-2 mr-3'>
                        <p className='text-lg md:text-xl black-text'>
                          {item.title}
                        </p>
                        <span className='text-sm gray-text md:text-base'>
                          {item.professional}
                        </span>
                      </div>
                    </div>
                    <div className=''>
                      <div className='w-20 p-1 font-medium text-center text-white border rounded-md md:w-24 md:p-2 bg-cyan-800'>
                        <p>{item.city}</p>
                      </div>
                    </div>
                  </div>
                  <div className='flex justify-around'>
                    <div className='flex flex-col items-center'>
                      <p className='text-sm font-bold md:text-base'>
                        {item.works}+
                      </p>
                      <span className='text-xs gray-text md:text-base'>
                        مشاوره آنلاین
                      </span>
                    </div>
                    <div className='h-[60px] border-r border-gray-200' />
                    <div className='flex flex-col items-center'>
                      <div className='flex gap-4'>
                        <div className='flex items-center'>
                          <FaCommentAlt className='text-base text-gray-400 md:text-xl' />
                          <span>681</span>
                        </div>
                        <div className='flex items-center '>
                          <FaStar className='text-base text-green-600 md:text-xl' />
                          <span>{item.rate}</span>
                        </div>
                      </div>
                      <span className='mt-1 text-base !font-light gray-text'>
                        امتیاز و نظر
                      </span>
                    </div>
                  </div>
                </div>
                <div className='h-[80px] bg-gray-200  flex flex-col gap-4 items-center py-2'>
                  <p className='flex items-center gap-4 text-sm font-semibold md:text-base'>
                    مشاوره انلاین{' '}
                    <MdOutlineContactMail className='text-base md:text-2xl' />
                  </p>
                  <p className='flex items-center gap-4 text-sm font-semibold md:text-base'>
                    مشاوره تلفنی{' '}
                    <PiPhoneCallFill className='text-base md:text-2xl' />
                  </p>
                </div>
                <div className='w-full mt-2 rounded-md bg-sky-500'>
                  <Link
                    href={`/${item.id}`}
                    className='flex justify-center py-2 text-sm text-white md:text-lg md:py-3 hover:shadow-lg'
                  >
                    مشاوره و اطلاعات بیشتر
                  </Link>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
export default Products
