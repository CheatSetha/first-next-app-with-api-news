import Link from 'next/link'
import React, { useState } from 'react'
import {AiOutlineMenu } from 'react-icons/ai'
import {RiMenu4Line } from 'react-icons/ri'

const NavBar = () => {
const [show, setShow] = useState(false)
const toggle = () => {

  setShow(!show)
}




  return (
    
<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" class="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>
    <button onClick={toggle} data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
     {
        show ? <AiOutlineMenu /> : <RiMenu4Line />
     }
     
       
    </button>
    <div  class={show? "w-full md:block md:w-auto " :"hidden w-full md:block md:w-auto"} id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link href="/" class="block py-2 pl-3 pr-4 text-white hover:bg-blue-700  rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:text-white" aria-current="page">Home</Link>
        </li>
        <li>
          <Link href="/news" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-blue-700  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500  dark:hover:text-white md:dark:hover:bg-transparent">News</Link>
        </li>
        <li>
          <Link href="/admin" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-blue-700  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500  dark:hover:text-white md:dark:hover:bg-transparent">User</Link>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-blue-700  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500  dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-blue-700  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500  dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default NavBar