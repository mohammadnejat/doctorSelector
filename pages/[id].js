import Header from '@/components/Header/Header'
import React, { useState } from 'react'
import { FaUserDoctor } from 'react-icons/fa6'
import { TiDocumentText } from 'react-icons/ti'
import { FaStar } from 'react-icons/fa6'
import { MdOutlineAddHomeWork } from 'react-icons/md'
import { BsDot } from 'react-icons/bs'
import { TbMessage } from 'react-icons/tb'
import { BiPhoneCall } from 'react-icons/bi'
import { IoIosInformationCircleOutline } from 'react-icons/io'
import { MdFileDownloadDone } from 'react-icons/md'
import { TbClockHour3 } from 'react-icons/tb'
import Footer from '@/components/Footer/Footer'
import axios from 'axios'

function Index (res) {
  const [data, setData] = useState(res.res)

  return (
    <>
      <Header />
      <section className='mx-2 md:mx-auto max-w-screen-2xl'>
        <div className='rounded-lg '>
          <div className='grid grid-cols-1 gap-2 mt-8 rounded-lg md:grid-cols-7'>
            <div className='p-2 bg-white rounded-lg md:col-span-4'>
              <div>
                <div className='flex justify-between'>
                  <div className='flex items-center gap-5'>
                    <img
                      src={data.img}
                      alt='#'
                      className='w-24 h-24 rounded-full'
                    />
                    <div>
                      <h3 className='mb-4 text-2xl font-bold'>{data.title}</h3>
                      <span
                        className={`flex items-center p-[6px] font-bold ${
                          data.readyForWork
                            ? 'text-green-800 bg-green-300'
                            : 'text-red-800 bg-red-300'
                        } rounded-lg w-fit`}
                      >
                        <BsDot className='text-2xl font-extrabold' />
                        {data.readyForWork
                          ? 'اماده برای مشاوره'
                          : 'در دسترس نیست'}
                      </span>
                    </div>
                  </div>
                  <div className=''>
                    <div className='w-24 p-2 font-medium text-center text-white border rounded-md bg-cyan-800'>
                      <p>{data.city}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className='flex items-center gap-2 mt-8 text-2xl font-semibold'>
                    <TbMessage className='text-4xl' />
                    درباره پزشک
                  </h2>
                  <h6 className='p-4 text-lg md:w-10/12'>{data.about}</h6>
                </div>
                <div className='h-2 my-2 border-t border-gray-100' />
                <div className='flex items-center gap-2 my-4'>
                  <TbClockHour3 className='text-2xl' />{' '}
                  <span className='text-lg font-bold'>
                    ساعات پاسخ گویی به مشاوره تلفنی
                  </span>
                </div>
                <div className='grid grid-cols-3 gap-4'>
                  {data.time.map(items => (
                    <>
                      <div
                        key={items.length}
                        className='flex flex-col items-center justify-center p-2 border-4 cursor-pointer md:w-40 border-sky-400 rounded-2xl'
                      >
                        <p className='text-xl'>{items.day}</p>
                        <span className='black-text '>
                          {items.time1} تا {items.time2}
                        </span>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
            <div className='flex flex-col p-2 pb-12 bg-white rounded-lg md:col-span-3 h-fit'>
              <div className='grid grid-cols-2 gap-6 mx-auto '>
                <div className='flex flex-col items-center justify-center w-40 border rounded-2xl'>
                  <MdOutlineAddHomeWork className='text-3xl text-cyan-400' />
                  <span className='black-text'>13 سال</span>
                  <p className='gray-text'>سابقه طبابت</p>
                </div>
                <div className='flex flex-col items-center justify-center w-40 border rounded-2xl'>
                  <FaUserDoctor className='text-3xl text-green-600' />
                  <span className='black-text'>تخصص</span>
                  <p className='gray-text'>متخصص قلب و عروق</p>
                </div>
                <div className='flex flex-col items-center w-40 p-2 border justify-justify-center rounded-2xl'>
                  <TiDocumentText className='text-3xl text-red-500' />
                  <span className='black-text'>12656923</span>
                  <p className='gray-text'>شماره نظام</p>
                </div>
                <div className='flex flex-col items-center w-40 p-2 border justify-justify-center rounded-2xl'>
                  <FaStar className='text-3xl text-yellow-500' />
                  <span className='black-text'>4.6</span>
                  <p className='gray-text'>رای مراجعین</p>
                </div>
              </div>
              <div className='flex flex-col w-full gap-3 p-2'>
                <div className='flex items-center justify-between gap-4 px-4 md:px-0'>
                  <div className='flex gap-4 mt-8'>
                    <BiPhoneCall className='text-4xl rounded-lg text-cyan-300 bg-cyan-100' />
                    <span className='text-2xl font-semibold text-slate-600'>
                      مشاوره تلفنی
                    </span>
                  </div>
                  <div>
                    <IoIosInformationCircleOutline className='text-2xl text-gray-500 cursor-pointer' />
                  </div>
                </div>
                <div className='flex gap-3'>
                  <MdFileDownloadDone className='text-2xl text-cyan-400' />
                  <span className='text-xl'>
                    قابلیت ارسال پیام و فایل تا ۲۴ ساعت بعد از مشاوره
                  </span>
                </div>
                <div className='flex gap-3'>
                  <MdFileDownloadDone className='text-2xl text-cyan-400' />
                  <span className='text-xl'>100% تضمین حریم خصوصی</span>
                </div>
                <div className='flex gap-3'>
                  <MdFileDownloadDone className='text-2xl text-cyan-400' />
                  <span className='text-xl'>
                    شروع تماس بلافاصله بعد از ثبت درخواست
                  </span>
                </div>
                <div className='flex gap-3'>
                  <MdFileDownloadDone className='text-2xl text-cyan-400' />
                  <span className='text-xl'>هزینه مناسب و بهترین مشاوره</span>
                </div>
              </div>
              <div className='h-2 my-2 border-t border-gray-100' />
              <div className='flex justify-around'>
                <div className='flex flex-col items-center px-4'>
                  <h2 className='text-xl font-medium'>قیمت برای 10 دقیقه:</h2>
                  <p className='mt-2 black-text'>100,000 تومان</p>
                </div>

                <div className='p-3 px-10 text-xl transition duration-300 border-2 rounded-lg cursor-pointer hover:bg-sky-600 hover:text-white border-sky-600 text-sky-600'>
                  مشاوره آنلاین
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
export async function getStaticPaths () {
  const baseURL = 'http://localhost:4000/'
  const res = await axios
    .get(`${baseURL}posts`)
    .then(res => res.data)
    .catch(err => err.message)
  const paths = res.map(post => ({ params: { id: String(post.id) } }))
  return {
    paths,
    fallback: false
  }
}
export async function getStaticProps ({ params }) {
  const baseURL = 'http://localhost:4000/'
  const res = await axios
    .get(`${baseURL}posts/${params.id}`)
    .then(res => res.data)
    .catch(err => err.message)

  return {
    props: { res }
  }
}
export default Index
