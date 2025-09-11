import React from 'react'
import img1 from '../assets/kids.webp'
import img2 from '../assets/kids1.jpg'
import img3 from '../assets/kids2.jpg'
function Books() {
  return (
    
    <div className="album py-5">
          <div className='albums'>
        <div className="container">
          <h3 className='gamehead'>Kids Books</h3>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
                <img className="card3-img" src={img1} width="100%" height="300"></img>
    
               
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img className="card3-img" src={img2} width="100%" height="300"></img>
    
                
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img className="card3-img" src={img3} width="100%" height="300"></img>
    
                
              </div>
            </div>
    </div>
    </div>
    </div>
    </div>
    
            
              
        
      
    
  )
}

export default Books;
