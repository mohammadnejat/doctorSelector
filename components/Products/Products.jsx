import MyContext from '@/context/context'
import React, { useContext, useState } from 'react'
import { Triangle } from 'react-loader-spinner'
import ProductArticle from '../ProductArticle/ProductArticle'

function Products () {
  const { usersData, searchedItems } = useContext(MyContext)

  return (
    <section>
      <div className='md:mx-auto '>
        <div className='grid grid-cols-1 gap-3 px-2 justify-items-center'>
          {usersData.length === 0 ? (
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
              <h2 className='mt-2 text-xl text-center'>اینترنت را چک کنید</h2>
            </div>
          ) : !searchedItems.length ? (
            usersData.map(item => <ProductArticle {...item} />)
          ) : (
            searchedItems.map(item => <ProductArticle {...item} />)
          )}
        </div>
      </div>
    </section>
  )
}
export default Products
