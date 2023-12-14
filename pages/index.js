import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Products from '@/components/Products/Products'
import MyContext from '@/context/context'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'

export default function Home (res) {
  const { usersData, setUsersData } = useContext(MyContext)
  // const [data, setData] = useState([res])
  useEffect(() => {
    setUsersData(res.res)
  }, [])

  return (
    <>
      <Header />
      <Products />
      <Footer />
    </>
  )
}

export async function getServerSideProps () {
  const baseURL = 'http://localhost:4000/'
  const res = await axios
    .get(`${baseURL}posts`)
    .then(res => res.data)
    .catch(err => err.message)
  return { props: { res } }
}
