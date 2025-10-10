import React from 'react';
import img1 from './assets/detail1.jpg';
import img2 from './assets/detail2.jpg';
import img3 from './assets/detail3.jpg';
import { useNavigate } from 'react-router-dom';

function Trending() {
 

  return (
    
           
            
               <div>
                  <h3 className='gamehead'>Trending Books</h3>
                  <div className="album py-5">
                        <div className='albums'>
                      <div className="container">
                       
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                          <div className="col">
                            <div className="card shadow-sm">
                            <a href="/Detail/">  <img className="card-img" src={img1} width="50%" height="300"></img></a>
                  
                              
                            </div>
                          </div>
                          <div className="col">
                            <div className="card shadow-sm">
                          <a href='/Detail1/'>   <img className="card-img" src={img2} width="50%" height="300"></img></a>
                  
                              
                            </div>
                          </div>
                          <div className="col">
                            <div className="card shadow-sm">
                         <a href='/Detail2/'>   <img className="card-img" src={img3} width="50%" height="300"></img></a>
                  
                             
                            </div>
                          </div>
                  </div>
                  </div>
                  <div className='para'>
                  <p> In today's world, books continue to inspire readers across the globe, and several titles have quickly
              become trending favorites.</p>
                  </div>
                  </div>
                  </div>
                   </div>
  );
}

export default Trending;
