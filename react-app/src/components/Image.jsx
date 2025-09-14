import React from 'react'
import img from '../assets/background4.jpg'

function Image() {
  return (
    <div>
    
      <div class="card text-bg-dark">
  <img src={img}  alt="" height={500} width={1500}/>
 
  <div class="card-img-overlay">
    
    <p className="card-text">We Love Books,if you might in light of life</p>
    
  </div>
</div>
    
    </div>
  )
}

export default Image
