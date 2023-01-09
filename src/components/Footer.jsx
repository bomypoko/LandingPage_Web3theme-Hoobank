import React from 'react'
import styles from '../style'
import {logo } from '../assets'
import { footerLinks , socialMedia } from '../constants'

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col mt-10`}>

      {/* Logo and Text */}
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>

        <div className='flex-1 flex flex-col justify-center mr-10'>
          <img className="w-[266px] h-[72px] object-contain" src={logo} alt="" />
          
        </div>

        <p className={`${styles.paragraph}  mt-4 max-w-[310px]`}>A new way to make  the payment easy, reliable and secue</p>

       

      </div>

      <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
          {footerLinks.map((footerLink) => (
            <div className='flex flex-col ss:my-0 my-4 min-w-[150px]' key={footerLink.key}>
              <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>{footerLink.title}</h4>
              <ul className='mt-4 list-none'>
                {footerLink.links.map(item => (
                  <li className={`font-poppins font-normal text-[16px]  leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4 last:mb-0`} key={item.name}>{item.name}</li>
                ))}
              </ul>

            </div>
          ))}
      </div>



      <div className='w-full mt-5 flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3r45]'>
      
          <p className='font-poppins text-normal text-white text-center text-[18px] leading-[27px] '>
            2022 Hoobank right to reserved.
          </p>

          <div className='flex flex-row md:mt-0 mt-6'>
        {socialMedia.map(item => (
          <img className={`w-[21px] h-[21px] object-contain mr-6 last:mr-0`} src={item.icon} alt="social-logo" />
        ))}
          </div>
      
        
      </div>

      
      

    </section>
  )
}

export default Footer