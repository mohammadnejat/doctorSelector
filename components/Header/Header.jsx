import MyContext from '@/context/context'
import { useRouter } from 'next/router'
import React, { useContext, useState } from 'react'

function Header () {
  const ids = useRouter()
  const { setSearchedItems, usersData } = useContext(MyContext)
  const [search, setSearch] = useState('')
  console.log(usersData)
  const clickHandler = e => {
    e.preventDefault()
    const data = usersData.filter(item =>
      item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    )
    ids.push('/')
    setSearchedItems(data)
  }
  return (
    <>
      <header className='max-w-screen-2xl'>
        <nav className='text-white bg-sky-600'>
          <div className='px-12 py-6 md:mx-auto'>
            <div className='flex items-center justify-between'>
              <div>
                <h2 className='font-serif md:text-3xl'>مشاوره پزشک آنلاین</h2>
              </div>
              <div>
                <form className='flex'>
                  <input
                    onChange={e => setSearch(e.target.value)}
                    value={search}
                    placeholder='اسم دکتر'
                    type='text'
                    className='rounded-s-full md:h-[53px] md:w-[500px] w-9/12  text-black pr-2 text-xl'
                  />
                  <button
                    className='bg-cyan-800 md:w-[100px] border md:h-[53px]  rounded-e-full md:text-xl text-lg font-normal'
                    type='submit'
                    onClick={clickHandler}
                  >
                    انتخاب
                  </button>
                </form>
              </div>
              <div className='hidden md:block'>
                <ul className='flex font-semibold md:gap-6 md:text-lg'>
                  <li className='cursor-pointer hover:text-red-400'>
                    ارتباط با ما
                  </li>
                  <li className='cursor-pointer hover:text-red-400'>
                    بخش مشتری
                  </li>
                  <li className='cursor-pointer hover:text-red-400'>خدمات</li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
export { find } from '@/components/Header/Header'
export default Header
