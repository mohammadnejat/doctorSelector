import '@/styles/globals.css'
import MyContext from '@/context/context'
import { useState } from 'react'
export default function App ({ Component, pageProps }) {
  const [usersData, setUsersData] = useState([])
  const [searchedItems, setSearchedItems] = useState([])
  return (
    <MyContext.Provider
      value={{ searchedItems, setSearchedItems, usersData, setUsersData }}
    >
      <Component {...pageProps} />
    </MyContext.Provider>
  )
}
