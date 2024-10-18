import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [data, setdata] = useState('')
  useEffect(() => {
    async function fetch() {
      let res = await axios.get("http://localhost:3000",{withCredentials: true})
      setdata(res.data)
    }
    fetch()
  })
  return (
    <>
      <h1>{data && data}</h1>
    </>
  )
}

export default App
