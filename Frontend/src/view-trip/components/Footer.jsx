import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='mt-16 mb-10'>
        <h2 className="font-mono text-xl text-gray-600 text-center">Created By Syed Farhan</h2>
        <div className='flex justify-center gap-10 mt-10 '>
          <Link  to='/insta'><FaInstagram className='h-10 w-10' /></Link>
          <Link to='/facebook'><FaFacebook className='h-10 w-10'/></Link>
          <Link to='/twitter'><FaTwitter className='h-10 w-10'/></Link>
        </div>
        
    </div>
  )
}

export default Footer

