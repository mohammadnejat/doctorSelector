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
import { CgLoadbarDoc } from 'react-icons/cg'

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

import Footer from '@/components/Footer/Footer'
import axios from 'axios'

function Index (res) {
  const [data, setData] = useState(res?.res)

  return (
    <>
      <Header />
      <>
        <section className='block mx-3 my-4 md:hidden'>
          <div className='flex items-center gap-4'>
            <img src={data.img} alt='#' className='w-20 h-20 rounded-full' />
            <div className='flex flex-col'>
              <h2 className='text-lg font-semibold'>{data.title}</h2>
              <span className='text-base font-semibold text-gray-500 '>
                {data.professional}
              </span>
            </div>
          </div>
          <div className='grid grid-cols-3 gap-6 mt-6'>
            <div className='px-2 bg-white rounded-lg shadow-lg'>
              <div className='flex flex-col items-center px-3 '>
                <FaUserDoctor className='bg-[#E9FFF4] text-4xl mb-1 py-1 rounded-b-md text-[#00A655]' />
                <span className='my-2'>سال {data.experince}</span>
                <span className='mb-3 text-gray-400 '>سابقه طبابیت</span>
              </div>
            </div>
            <div className='px-2 bg-white rounded-lg shadow-lg'>
              <div className='flex flex-col items-center px-3 '>
                <CgLoadbarDoc className='bg-[#FFF1F6] text-4xl mb-1 py-1 rounded-b-md text-[#FB2B76]' />
                <span className='my-2'>{data.workNumber}</span>
                <span className='mb-3 text-gray-400 '>شماره نظام</span>
              </div>
            </div>
            <div className='px-2 bg-white rounded-lg shadow-lg'>
              <div className='flex flex-col items-center px-3 '>
                <FaStar className='bg-[#FFFADC] text-4xl mb-1 py-1 rounded-b-md text-[#FFD746]' />
                <span className='my-2'>{data.rate}</span>
                <span className='mb-3 text-gray-400 '>رای مراجعین</span>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-4 mt-6'>
            <Accordion className='!rounded-lg'>
              <AccordionSummary
                expandIcon={
                  <ArrowBackIosNewIcon className='!font-thin text-sky-600' />
                }
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                <Typography className='!font-normal text-gray-500'>
                  درباره پزشک
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className='!font-normal text-gray-500'>
                  {data.about}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className='!rounded-lg'>
              <AccordionSummary
                expandIcon={
                  <ArrowBackIosNewIcon className='!font-thin text-sky-600' />
                }
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                <Typography className='!font-normal text-gray-500'>
                  تحصیلات
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className='!font-normal text-gray-500'>
                  {data.about}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className='!rounded-lg'>
              <AccordionSummary
                expandIcon={
                  <ArrowBackIosNewIcon className='!font-thin text-sky-600' />
                }
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                <Typography className='!font-normal text-gray-500'>
                  تجربیات و دستاورد ها
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className='!font-normal text-gray-500'>
                  {data.about}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

          <div>
            <h3 className='my-6 font-semibold text-gray-600'>
              ساعات کاری و جلسات پزشک
            </h3>
            <div className='grid grid-cols-3 gap-6'>
              {data?.time?.map(items => (
                <>
                  <div
                    key={items.length}
                    className='flex flex-col items-center justify-center p-4 text-indigo-500 transition duration-300 border-2 border-indigo-500 cursor-pointer rounded-xl'
                  >
                    <p className='text-lg font-normal'>{items.day}</p>
                    <span className='font-normal text-black'>
                      {items.time1} تا {items.time2}
                    </span>
                  </div>
                </>
              ))}
            </div>
          </div>

          <div className='mt-12 w-full rounded-lg bg-[#D0D0D0] text-center text-white py-3 text-lg font-semibold'>
            دریافت و ثبت نوبت
          </div>
        </section>
        <section className='hidden mx-2 mb-10 md:mx-auto max-w-screen-2xl md:block'>
          <div className='rounded-lg '>
            <div className='grid  gap-2 mt-8 rounded-lg !mx-52 !grid-cols-7'>
              <div className='p-6 bg-white rounded-lg !col-span-4'>
                <div>
                  <div className=''>
                    <div className='flex items-center gap-5'>
                      <img
                        src={data.img}
                        alt='#'
                        className='w-24 h-24 rounded-full'
                      />
                      <div>
                        <h3 className='mb-4 text-2xl font-bold'>
                          {data.title}
                        </h3>
                        <span
                          className={`flex items-center p-[4px] font-normal ${
                            data.readyForWork
                              ? 'text-green-800 bg-green-300'
                              : 'text-red-800 bg-red-300'
                          } rounded-lg w-fit`}
                        >
                          <BsDot className='text-2xl ' />
                          {data.readyForWork
                            ? 'اماده برای مشاوره'
                            : 'در دسترس نیست'}
                        </span>
                      </div>
                    </div>
                    <div className=''>
                      <div className='w-24 p-2 mt-2 font-medium text-center text-white border rounded-md bg-cyan-800'>
                        <p>{data.city}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className='flex items-center gap-2 mt-12 text-xl font-semibold'>
                      <TbMessage className='text-4xl' />
                      درباره پزشک
                    </h2>
                    <h6 className='p-4 text-md !w-10/12'>{data.about}</h6>
                  </div>
                  <div className='h-2 my-6 border-t border-gray-100' />
                  <div className='flex items-center gap-2 my-4'>
                    <TbClockHour3 className='text-2xl' />{' '}
                    <span className='text-lg font-bold'>
                      ساعات پاسخ گویی به مشاوره تلفنی
                    </span>
                  </div>
                  <div className='grid gap-4 !grid-cols-3'>
                    {data?.time?.map(items => (
                      <>
                        <div
                          key={items.length}
                          className='flex flex-col items-center justify-center p-2 text-white transition duration-300 border-2 cursor-pointer hover:bg-white hover:text-black hover:border-sky-600 !w-36 bg-sky-600 rounded-2xl'
                        >
                          <p className='text-lg font-normal'>{items.day}</p>
                          <span className='font-normal '>
                            {items.time1} تا {items.time2}
                          </span>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div className='flex flex-col p-2 pb-12 bg-white rounded-lg !col-span-3 h-fit'>
                <div className='grid grid-cols-2 gap-6 mx-auto mt-4'>
                  <div className='flex flex-col items-center justify-center w-32 p-2 border rounded-2xl'>
                    <MdOutlineAddHomeWork className='text-2xl text-cyan-400' />
                    <span className='font-medium black-text'>13 سال</span>
                    <p className='font-normal text-center gray-text'>
                      سابقه طبابت
                    </p>
                  </div>
                  <div className='flex flex-col items-center justify-center w-32 p-2 border rounded-2xl'>
                    <FaUserDoctor className='text-3xl text-green-600' />
                    <span className='font-medium black-text'>تخصص</span>
                    <p className='font-normal text-center gray-text'>
                      {data.professional}
                    </p>
                  </div>
                  <div className='flex flex-col items-center w-32 p-2 border justify-justify-center rounded-2xl'>
                    <TiDocumentText className='text-3xl text-red-500' />
                    <span className='font-medium black-text'>
                      {data.workNumber}
                    </span>
                    <p className='font-normal text-center gray-text'>
                      شماره نظام
                    </p>
                  </div>
                  <div className='flex flex-col items-center w-32 p-2 border justify-justify-center rounded-2xl'>
                    <FaStar className='text-3xl text-yellow-500' />
                    <span className='font-medium black-text'>{data.rate}</span>
                    <p className='font-normal text-center gray-text'>
                      رای مراجعین
                    </p>
                  </div>
                </div>
                <div className='flex flex-col w-full gap-3 p-2'>
                  <div className='flex items-center justify-between gap-4 !px-0'>
                    <div className='flex gap-4 mt-8'>
                      <BiPhoneCall className='text-4xl rounded-lg text-cyan-300 bg-cyan-100' />
                      <span className='text-xl font-semibold text-slate-600'>
                        مشاوره تلفنی
                      </span>
                    </div>
                    <div>
                      <IoIosInformationCircleOutline className='text-2xl text-gray-500 cursor-pointer' />
                    </div>
                  </div>
                  <div className='flex gap-3'>
                    <MdFileDownloadDone className='text-2xl text-cyan-400' />
                    <span className='text-base'>
                      قابلیت ارسال پیام و فایل تا ۲۴ ساعت بعد از مشاوره
                    </span>
                  </div>
                  <div className='flex gap-3'>
                    <MdFileDownloadDone className='text-2xl text-cyan-400' />
                    <span className='text-base'>100% تضمین حریم خصوصی</span>
                  </div>
                  <div className='flex gap-3'>
                    <MdFileDownloadDone className='text-2xl text-cyan-400' />
                    <span className='text-base'>
                      شروع تماس بلافاصله بعد از ثبت درخواست
                    </span>
                  </div>
                  <div className='flex gap-3'>
                    <MdFileDownloadDone className='text-2xl text-cyan-400' />
                    <span className='text-base'>
                      هزینه مناسب و بهترین مشاوره
                    </span>
                  </div>
                </div>
                <div className='h-2 my-6 border-t border-gray-100' />

                <div className='!items-center !flex !justify-around'>
                  <div className='flex flex-col items-center px-4'>
                    <h2 className='text-base font-medium'>
                      قیمت برای 10 دقیقه:
                    </h2>
                    <p className='mt-2 black-text'>
                      {data.price.toLocaleString()} تومان
                    </p>
                  </div>

                  <div className=' my-6 text-lg text-center transition duration-300 border-2 rounded-lg cursor-pointer !px-10 !p-4 hover:bg-sky-600 hover:text-white border-sky-600 text-sky-600'>
                    مشاوره آنلاین
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
      <Footer />
    </>
  )
}
export async function getStaticPaths () {
  const baseURL = 'https://doctor-fake-apis.vercel.app/'
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
  const baseURL = 'https://doctor-fake-apis.vercel.app/'
  const res = await axios
    .get(`${baseURL}posts/${params.id}`)
    .then(res => res.data)
    .catch(err => err.message)

  return {
    props: { res }
  }
}
export default Index
