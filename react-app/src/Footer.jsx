import React from 'react'
import img from"./assets/instagram.png"
import img1 from "./assets/twitter.png"
import img2 from "./assets/youtube.png"
function Footer() {
  return (
    <div className='footer'>
       <h4>Discover</h4>
      <p>Title</p>
      <p>Authors</p>
      <p>Subject</p>
      <p>Language</p>
      {/* <div className='footer1'> */}
        <h4>open library</h4>  
        <p>blog</p>
        
<p>Vision</p>
<p>Volunteer</p>

<p>Careers</p>

     <div className='simple'>
      <h5>Follow us</h5>
<img src={img} alt="" width={30} />
<img src={img1} alt="" width={30} />
<img src={img2} alt="" width={30} />

      
      {/* </div>    */}
        
      
      
      
    </div>

    

    </div>
  )
}

export default Footer
