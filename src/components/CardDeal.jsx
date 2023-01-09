import React from 'react'
import { card } from '../assets'
import styles, {layout } from '../style'
import Button from './Button'


const CardDeal = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
         <h2 className={`${styles.heading2}`}>Find a better card deal <br className='md:block hidden' /> in few easy stops.</h2>
         <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam autem recusandae cumque magni dicta fugit optio dolorem, officiis error rem?</p>
         <Button styles="mt-10"/>
      </div>

      <div className="flex flex-1">
         <img className='object-contain' src={card} alt="card" />
      </div>

    </section>
  )
}

export default CardDeal