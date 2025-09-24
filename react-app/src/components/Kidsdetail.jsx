import React from 'react'
import img1 from "../assets/kids.webp"
function Kidsdetail() {
  return (
    <div className='trend'>
     <h1>THE ALICE IN WONDERLAND</h1>
           <div classname="card mb-3">
       <div className="row g-0">
         <div className="col-md-4">
           <img src={img1} class="img-thumbnail" alt="" height={250} width={200}></img>
         </div>
         <div className="col-md-8">
           <div className="card-body">
             <h4>Title:</h4><br/>
             <h4>Author:</h4><br/>
             <h4>ebook_access:</h4><br/>
             <h4>has_fulltext:</h4><br/>
             <h4>author_key:</h4><br/>
             <h4>edition_count:</h4><br/>
             <h4>Language:</h4><br/>
             <h4>First_publish_year:</h4><br/>
           </div>
         </div>
       </div>
     </div>
         <h3>History</h3>
         <div className='details'>
         <p>The original July 1865 printing was withdrawn due to poor printing quality, and a new edition was released in November 1865 (but dated 1866)</p>
    </div>
  
  </div>
  )
}

export default Kidsdetail
