import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Products from '@/components/Products/Products'
import MyContext from '@/context/context'
import axios from 'axios'
import { useContext, useEffect } from 'react'

export default function Home (res) {
  const { setUsersData } = useContext(MyContext)
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
  const baseURL = 'https://doctor-fake-apis.vercel.app/'
  const res = await axios
    .get(`${baseURL}posts`)
    .then(res => res.data)
    .catch(err => err.message)
  return { props: { res } }
}
