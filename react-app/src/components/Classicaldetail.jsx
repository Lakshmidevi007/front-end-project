import React from 'react'
import img from"../assets/classic1.webp"
import img2 from "../assets/heart1.jpg"
import img3 from "../assets/heart2.webp"
import img4 from "../assets/heart3..jpg"

function Classicaldetail() {
  return (
    <div className='trend'>
      <h1>HEART OF DARKNESS</h1>
      <div classname="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
  <img src={img} class="img-thumbnail" alt="" height={250} width={200}></img>
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
  <h3>History</h3>
  <div className='details'>
  <p>1899 Serialized in Blackwood's Magazine (a British literary magazine)</p><hr></hr>
  <p>1902 – Published in book form in the collection Youth: A Narrative; and Two Other Stories</p><hr></hr>
</div>
   </div>
   <h3>The related books:</h3>
     
          <h3 className='gamehead'></h3>
                 <div className="Detail py-5">
                       <div className='albums'>
                     <div className="container">
                      
                       <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
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
                         <div className="col">
                           <div className="card shadow-sm">
                             <img className="card-img" src={img4} width="50%" height="300"></img>
                 
                            
                           </div>
                         </div>
                 </div>
                 </div>
         </div>
        </div>
    </div>
  )
}

export default Classicaldetail
