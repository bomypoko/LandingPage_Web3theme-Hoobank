import React from 'react'

import { apple , bill , google} from '../assets'
import styles, {layout} from '../style'

const Billing = () => {
  return (

      // Setting a reverse billing and text by useing flex-col-reverse (switch left and right)
    <section id="product" className={`flex flex-col-reverse md:flex-row ${styles.paddingY} `}>
        

        {/* Billing Section */}
      <div className="flex flex-1  justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative ">
          <img src={bill} alt="billing" />
          <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
          <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
          
      </div>

      {/* Text Section */}
      
      <div className={`flex-1 ${layout.sectionInfo} `}>
          <h2 className={`${styles.heading2}`}> Easily control your <br className='sm:block hidden'/> billing &
          invoicing 
         </h2> 
         <p className={`${styles.paragraph} max-w-[470px] mt-5`}> Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat. 
         </p>

          {/* BTN section  */}
         <div className='flex flex-row  flew-wrap sm:mt-10 mt-6 '>
            <img className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' src={apple} alt="appstore " />
            <img className='w-[128px] h-[42px] object-contain  cursor-pointer' src={google} alt="appstore " />
         </div>
      </div>

  

      
      
    
        


    </section>
  )
}

export default Billing