import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'

const date = new Date();

const Footer = () => {
  return (
    <div className='footer-container' style={{marginTop: "5%"}}>
      <p>{date.getFullYear()} Abde Accessories All rights reserved</p>
      <p className='icons'>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer