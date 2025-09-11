import React from 'react'
import img from "../assets/classic3.jpg"
function Classicaldetail2() {
  return (
    <div>
     
      <div classname="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={img} classname="detail" alt="" height={300} width={200}/>
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
    
    </div>
  )
}

export default Classicaldetail2
