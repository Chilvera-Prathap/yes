import React from 'react'
import "./madam.css"
import booking from '../assets/booking.webp'
import city from '../assets/cities.webp'
import download from '../assets/download.webp'
import girl from '../assets/girl.webp'
import rated from '../assets/rated.webp'
import cruse from '../assets/cruise-Bik4yObg.jpg'

import hair from '../assets/hair-services.webp'
import mehndi from '../assets/mehndi.webp'
import prebridal from '../assets/pre-bridal.webp'
import makeup from '../assets/make-up.webp'
import male from '../assets/male-grooming.webp'
import male2 from '../assets/male-spa.webp'

import Hydra from '../assets/Hydra-Facial-Treatments.webp'
import laser from '../assets/Laser-Banner.webp'
import website from '../assets/websiteWithoutSK.webp'

function Madam() {
  return (
   <>
   <div className='navbar'>
    <div className='madam'>
      <div className='yes'>yes</div>
      <div className='hi'>madam</div>
    </div>
    <div className='milestones'>
      <div>Milestones</div>
      <div>Services</div>
      <div>MediaCoverage</div>
      <div>careers</div>
      <div>Reviews</div>
      <div className='get_app'>Get App</div>
      
    </div>
    
   </div>
   <h1 className='achievments'>Achievements so far</h1>

   <div>
    <div className='outer'>
      <div className='inner'>
        <div className='image'>
          <img src={girl} className='imagestyle' alt="rrr" />
        </div>
        <p className='digit'>7000+</p>
        <p className='font'>professionals</p>
      </div>

      <div className='inner'>
        <div className='image'>
          <img src={download} className='imagestyle' alt="rrr" />
        </div>
        <p className='digit'>6M+</p>
        <p className='font'>App Download</p>
      </div>

      <div className='inner'>
        <div className='image'>
          <img src={booking} className='imagestyle' alt="rrr" />
        </div>
        <p className='digit'>8M+</p>
        <p className='font'>Bookings Completed</p>
      </div>

      <div className='inner'>
        <div className='image'>
          <img src={city} className='imagestyle' alt="rrr" />
        </div>
        <p className='digit'>50+</p>
        <p className='font'>Cities in India</p>
      </div>

      <div className='inner'>
        <div className='image'>
          <img src={rated} className='imagestyle' alt="rrr" />
        </div>
        <p className='digit'>4.8*</p>
        <p className='font'>India’s Top Rated Beauty App</p>
      </div>
    </div>
   </div>

   <h1 className='achievments'>Services we offer</h1>

   <div className='services'>
    <div className='service_inner'>
      <img src={hair} alt="" className='service_image' />
      <h2>Female Salon at Home</h2>
      <p className='content'>We provide a range of beauty services at the comfort of your home. From waxing, facials, clean-ups and mani-pedi to body polishing and even hair spa, you name it we have it.</p>
    </div>

    <div className='service_inner'>
      <img src={prebridal} alt="" className='service_image' />
      <h2>Female Spa at Home</h2>
      <p className='content'>Whether you want to de-stress yourself or get a pain-relieving body massage we have everything in the bucket for you. With this we also cater the needs of elderly, new moms, kids & period pain</p>
    </div>

    <div className='service_inner'>
      <img src={makeup} alt="" className='service_image' />
      <h2>Female Hydra & Laser Treatments</h2>
      <p className='content'>As our skin matures, it needs more to maintain its health and glow. Our Hydra Facials at Home are perfect for you if you want instant results with a healthy glow while our at home Laser Treatments are great for hair reduction, pigmentation correction, and skin rejuvenation.</p>
    </div>

   </div>

  <div className='men'>
    <div className='men2'>
      <img src={male} alt="" className='men_image' />
      <h4>Hair</h4>
      <h4>Services</h4>
    </div>

    <div className='men2'>
      <img src={male2} alt="" className='men_image' />
      <h4>Hair</h4>
      <h4>Services</h4>
    </div>

    <div className='men2'>
      <img src={hair} alt="" className='men_image' />
      <h4>Hair</h4>
      <h4>Services</h4>
    </div>

    <div className='men2'>
      <img src={makeup} alt="" className='men_image' />
      <h4>Hair</h4>
      <h4>Services</h4>
    </div>

    <div className='men2'>
      <img src={prebridal} alt="" className='men_image' />
      <h4>Hair</h4>
      <h4>Services</h4>
    </div>

    <div className='men2'>
      <img src={mehndi} alt="" className='men_image' />
      <h4>Hair</h4>
      <h4>Services</h4>
    </div>

  </div>

  <div className='download'>Download Yes Madam App <i class="fa-brands fa-google-play"></i> <i class="fa-brands fa-apple"></i></div>

  <div className='laser'>
    <div className='laser2'>
      <img src={Hydra} alt="" className='laser_image' />
  </div>
  <div className='laser2'>
      <img src={laser} alt="" className='laser_image' />

    </div>
  </div> 

  <div className='salon'>
    <div className='yesmam'><div className='yess'>yes</div>
      <div className='hii'>madam</div> Salon</div>
    <p className='lorem'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem praesentium quasi optio enim quibusdam voluptatem consectetur neque corrupti fugiat! Odit vel esse cumque libero iusto velit recusandae molestias impedit corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci a culpa ullam sed perferendis? Recusandae perspiciatis obcaecati voluptatibus officia. Aliquid sequi minima error voluptatum tenetur adipisci dolorum id perspiciatis aut.</p>
    <button className='explore'>EXPLORE NOW</button> <br />
    <img src={laser} alt="" className='video_image' />
  </div>  

  <div className='final'>
    <div>
      <img src={website} className='website' alt="website" />
    </div>
    <div className='last'>
      <h1 className='get'>Get The Yes Madam App</h1>
      <p className='lorem1'>We will send you a link. Open it on your phone to download app.</p>
      <button className='code'>IN+91</button>
      <input type="text" placeholder='Enter Mobile Number' className='input'/>
      <button className='share'>Share App Link</button>
      <p className='lorem1'>Download the app from</p>
      <button className='download1' >Get It On <i class="fa-brands fa-google-play" ></i></button>
      <button className='download1' >Download On App Store <i class="fa-brands fa-apple"></i></button>
    </div>
  </div>

   </>
  )
}

export default Madam;
