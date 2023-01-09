import React from 'react'

import {stats} from '../constants'
import styles from '../style'
// {`${styles.flexCenter} flex-wrap sm:mb-20 mb-6`}
const Stats = () => {
  return (
    <section className="flex justify-center flex-row items-center flex-wrap sm:mb-20 mb-6">
      {stats.map(item => (
        <div
        key={item.id}
        className={`flex flex-1 justify-start items-center flex-row mb-3`}>
            <h4 
            className='font-poppins font-semibold xs:text-[40px] text-[32px] xs:leading-[53px] leading-[43px]'>
            {item.value}
            </h4>
            <p  className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>
            {item.title}
            </p>
       </div>
      ))}

        
    </section>
  )
}

export default Stats


// {stats.map(item => (
//   <h1
//   key={item.id}
//   className="flex flex-col justify-center items-center flex-1  "
//   >{item.title}  <br />
      
//    <h2 className='w-full flex justify-center items-center'>{item.value}</h2>
//   </h1>
// ))}