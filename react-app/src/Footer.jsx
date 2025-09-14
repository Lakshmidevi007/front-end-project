import React from 'react'
import img from "./assets/spotify.svg"
import img1 from "./assets/facebook.svg"
import img2 from "./assets/instagram.png"
import img3 from "./assets/twitter.png"


function Footer() {
  return (
    <div className='social-links-icons'>
   
   

      
      <img src={img} alt="" width={30} />
      <img src={img1} alt="" width={30}/>
      <img src={img2} alt="" width={30} />
      <img src={img3} alt='' width={30}/>
      </div>
     
   
  )
}

export default Footer
