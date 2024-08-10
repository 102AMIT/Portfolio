import React from 'react'
import { BsTrophyFill } from 'react-icons/bs'
import {SiAntdesign, SiCodingninjas } from 'react-icons/si'
import { FaCode } from 'react-icons/fa'
import FunCart from './FunCart'

const FunFact = () => {
  return (
    <div className='px-0 grid grid-cols-4 pb-10'>
        <FunCart icon={<BsTrophyFill />} des="300+ DSA Problem Solve"/>
        <FunCart icon={<SiAntdesign />} des="30+ Finished Projects"/>
        <FunCart icon={<SiCodingninjas />} des="EX-Teaching Assistant"/>
        <FunCart icon={<FaCode />} des="800 hours of coding"/>

    </div>
  )
}

export default FunFact