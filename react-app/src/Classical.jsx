import React from 'react'
import img1 from './assets/classical1.jpg'
import img2 from './assets/classical.jpg'
import img3 from './assets/classical2.jpg'
function Classical() {
  return (
    <div>
       <h3 className='gamehead'>Classical Books</h3>
       <div className="album py-5">
             <div className='albums'>
           <div className="container">
            
             <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
               <div className="col">
                 <div className="card shadow-sm">
            <a href='/ClassicalDetail1/'>       <img className="card-img" src={img1} width="50%" height="300"></img></a>
       
                   
                 </div>
               </div>
               <div className="col">
                 <div className="card shadow-sm">
           <a href='/ClassicalDetail/'><img className="card-img" src={img2} width="50%" height="300"></img></a>
       
                   
                 </div>
               </div>
               <div className="col">
                 <div className="card shadow-sm">
               <a href='/ClassicalDetail2/'>   <img className="card-img" src={img3} width="50%" height="300"></img></a>
       
                  
                 </div>
               </div>
       </div>
       </div>
       <div className='para'>
       <p>Reading Classic books are helps us connect with the past,broaden our imagination, and develop a richer understanding of the world</p>
       </div>
       </div>
       </div>
        </div>       
                 
           
         )
       }
  
  


export default Classical;
