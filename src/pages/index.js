import Image from 'next/image'
import { Inter } from 'next/font/google'
import FetchData from '../components/FetchData'
import NavBar from '../components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div> 
      <NavBar />
      <FetchData />

    </div>
 
  )
}
