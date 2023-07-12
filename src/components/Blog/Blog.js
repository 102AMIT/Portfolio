import React from 'react'
import Title from '../Home/Title'
import { comingSoon } from '../../assets'

const Blog = () => {
  return (
    <div>
      <Title title="Latest" subTitle="Posts"/>
      <div className='w-full  flex justify-center items-center h-full  bg-yellow-500'>
        {/* <h3 className='text-4xl text-red-600'>Coming Soon....!</h3> */}
        <img src={comingSoon} alt='coming soon gif' className='opacity-80 h-full mt-24'></img>
      </div>
    </div>
  )
}

export default Blog