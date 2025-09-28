import React from 'react'
import img from "../assets/classic3.jpg"
import img2 from"../assets/franklin.webp"
import img3 from "../assets/franklin1.webp"
import img4 from "../assets/franklin3.webp"
function Classicaldetail2() {
  return (
    <div className='trend'>
     <h1>THE TOWER TREASURE</h1>
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
</div>
<h3>History</h3>
<div className='details'>
<p>The original 1927 version had 214 pages</p><hr></hr>

<p>The 1959 revision was 174 pages, rewritten by Harriet Adams, daughter of Edward Stratemeyer</p><hr></hr>

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

export default Classicaldetail2
