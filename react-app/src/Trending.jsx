import React from 'react'

import img1 from "./assets/trending1.webp"
import img2 from "./assets/trending2.webp"
import img3 from "./assets/trending3.webp"
function Trending() {
 

  return (
    <div>
      <h3>Trending Books</h3>
    <div className='trending'>
      <div className="album py-5">
      <div className='albums'>
    <div className="container">
      
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div className="col">
          <div className="card shadow-sm">
            <img  className="card-img" src={img1} width="100%" height="300"></img>

           
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <img className="card-img" src={img2} width="100%" height="300"></img>

            
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <img className="card-img" src={img3} width="100%" height="300"></img>

           
          </div>
        </div>
       
</div>
</div>
</div>
<div className='para'>
        <p>In todays world,books continue to inspire readers across the globe,and several titles have quickly become trending favorites books.</p>

</div>
  
       
   </div>       
    </div>
    </div>
  )
}

export default Trending
