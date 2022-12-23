import React from 'react'
import {BsFacebook,BsLinkedin} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='mt-20 flex flex-col items-center h-[100px] w-[100vw] bg-yellow-600 space-y-5 sticky left-0 bottom-0'>
        <div className='flex space-x-5 pt-2'>
          <div className='cursor-pointer'><BsFacebook size={25} color="black"/></div>
          <div className='cursor-pointer'><BsLinkedin size={25} color="black"/></div>
          <div className='cursor-pointer'><AiFillTwitterCircle size={28} color="black"/></div>
        </div>

        <div className=''>
          <h1>© BlogME. All Rights Reserved.</h1>
        </div>
    </div>
  )
}

export default Footer