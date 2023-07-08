import React from 'react'

const ServicesCard = ({icons, title , subTitle}) => {
  return (
    <div className='py-6 px-6 flex flex-col items-center gap4 border-b-[1px] border-b-zinc-800 '>
        <span className='text-4xl text-designColor mb-2'>
            {icons}
        </span>
        <h2 className='font-titleFont text-lg font-semibold'>{title}</h2>
        <p className='text-center whitespace-pre-line pt-6'>{subTitle}</p>
    </div>
  )
}

export default ServicesCard