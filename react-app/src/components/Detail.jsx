import React from 'react'

import img from "../assets/trending1.webp"
import img1 from "../assets/last unicorn.webp"
function Detail() {
  return (
    
    <div className='trend'>
      
     <h1>The Last Unicorn</h1>
      
     
   
      
      <div classname="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
    
      <img src={img} class="img-thumbnail" alt="" height={200} width={200}></img>
    </div>
    <div className="col-md-8">
      <div className="body">
        <h4>Title:</h4><br/>
        <h4>Author:</h4><br/>
        <h4>ebook_access:</h4><br/>
        <h4>has_fulltext:</h4><br/>
        <h4>author_key:</h4><br/>
        <h4>edition_count:</h4><br/>
        <h4>Language:</h4><br/>
        <h4>First_publish_year:</h4><br/>
        
      </div>
      <div>
        
      </div>
    </div>
    <div className='details1'>
    <h3>History</h3>
    <div className='details'>
    
    <p>A corrected, definitive English-language text was prepared for the 2007 Deluxe Edition and also used in the trade paperback 40th Anniversary Edition (Roc Books, 2008).</p><hr></hr>
    <p>In July 2022, the book was reissued</p><hr></hr>
    <p>In 2024, Suntup Editions produced a high quality hardcover edition with illustrations by Tom Kidd, in classic, numbered and lettered editions</p>
  </div>
</div>
</div> 
</div>

     
       
      
     
   
        
    
      </div>
      
  

)
}

export default Detail
