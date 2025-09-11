import React from 'react'
import img1 from "./assets/trending1.webp"
import img2 from "./assets/trending2.webp"
import img3 from "./assets/trending3.webp"
function Trending() {
  return (
    <div>
      <div className="album py-5">
      <div className='albums'>
    <div className="container">
      <h2 className='gamehead'>Trending</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div className="col">
          <div className="card shadow-sm">
            <img className="card-img" src={img1} width="100%" height="300"></img>

           
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
</div>
</div>
        
          
    
  )
}

export default Trending
