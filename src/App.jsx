import React from 'react'
import styles from './style'
import { Stats,Business,Billing ,CardDeal,Testimonials,Clients,CTA,Footer, Hero,Navbar} from './components'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden text-white'>

      {/* Start Navigation Bar  */}
      <div className={`${styles.flexCenter} ${styles.paddingX}`}>
          <div className={`${styles.boxWidth}`}>
              <Navbar/>
          </div>
      </div>
      {/* End Navigarion Bar */}

      {/* Start Hero Section */}
      <div className={`${styles.flexStart}  bg-primary ` }>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>
      {/*End Hero Section   */}

      
      {/*Start Stats - Footer  Section   */}
      <div className={`${styles.flexStart} ${styles.paddingX} bg-primary ` }>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Business/>
          <Billing/> 
          <CardDeal/>
          <Testimonials/>
          <Clients/>
          <CTA/>
          <Footer/>
        </div>
      </div>



    </div>
  )
}

export default App