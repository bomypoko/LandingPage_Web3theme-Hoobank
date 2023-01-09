import React from 'react'
import styles from '../style'
import { quotes } from '../assets'

// Accept thoses prop
const FeedbackCard = ({ content, name , title ,img  }) => {
  return (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
          <img className='w-[42px] h-[42px] object-contain' src={quotes} alt="quotes" />
          <p className='font-poppins font-normal text-[18px] leading-[32px] text-white my-10'>{content}</p>

          {/* <div className='flex  items-center justify-start'>
            <img className='rounded-full w-[50px] h-[50px]' src={img} alt="" />
            <div className=' ml-3'> 
              <h2>{name}</h2>
              <p className="text-">{title}</p>
            </div>
          </div> */}
          
          <div className='flex'>
            <img className='w-[48px] h-[48px] ' src={img} alt="" />
            <div className='ml-4'>
              <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-white'>{name}</h4>
              <p className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite '>{title}</p>
            </div>

          </div>

    </div>
  )
}

export default FeedbackCard