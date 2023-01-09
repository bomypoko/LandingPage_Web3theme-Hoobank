import React from 'react'

import { features } from '../constants'
import styles, { layout } from '../style'
import Button from './Button'

// destructuring from Constant --> feature ---> FeatureCard
const FeatureCard = ({icon, title ,content }) => (
  <div className='flex p-6 rounded-[20px] mb-6 last:mb-0 feature-card '>
    <div className={`${styles.flexCenter}  w-[64px] h-[64px] rounded-full bg-dimBlue `}>
      <img 
      src={icon} alt="icon"
      className='w-[50%] h-[50%] object-contain'
      />
    </div>

    <div className='flex flex-1 flex-col ml-3 '>
        <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>{title}</h4> 
        <p className='font-poppins font-normal text-dimWhite [16px] leading-[24px]  '>{content}</p>
    </div>
  </div>
)



const Business = () => {
  return (
    <section id="features" className={`${layout.section} `}> 

        {/* Left Section */}
      <div className={`${layout.sectionInfo } flex-col`}>
        <h2 className={`${styles.heading2}`}> You do the business, <br className='sm:block hidden' /> we'll handle the money</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds
        of credit cards on the market.
        </p>
      {/* Passing a prop at the components  */}
        <Button styles="mt-5"/>
      </div>

        {/* Right Section */}
      <div className='flex flex-col flex-1 items-center justify-center md:ml-10 ml-0 md:mt-0 mt-10 relative'>
              {features.map(item => (
                <FeatureCard
                key={item.id}
                {...item}/>
              ))}
      </div>
    </section>
  )
}

export default Business