
import MainHome from '@/components/MainHome'
import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <div className='w-11/12 mx-auto'> 

      <MainHome />


    </div>
 
  )
}
