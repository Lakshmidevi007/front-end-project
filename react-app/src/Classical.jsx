import React from 'react'
import img1 from './assets/classic2.webp'
import img2 from './assets/classic1.webp'
import img3 from './assets/classic3.jpg'
function Classical() {
  return (
    <div>
       <div className="album py-5">
             <div className='albums'>
           <div className="container">
             <h3 className='gamehead'>Classical Books</h3>
             <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
               <div className="col">
                 <div className="card shadow-sm">
                   <img className="card-img" src={img1} width="50%" height="300"></img>
       
                   
                 </div>
               </div>
               <div className="col">
                 <div className="card shadow-sm">
                   <img className="card-img" src={img2} width="50%" height="300"></img>
       
                   
                 </div>
               </div>
               <div className="col">
                 <div className="card shadow-sm">
                   <img className="card-img" src={img3} width="50%" height="300"></img>
       
                  
                 </div>
               </div>
       </div>
       </div>
       </div>
       </div>
       </div>
               
                 
           
         )
       }
  
  


export default Classical;
