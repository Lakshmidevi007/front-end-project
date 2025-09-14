import React from 'react'
import img from "../assets/trending1.webp"
function Detail() {
  return (
    <div className='trend'>
      
      
      <div classname="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      {/* <img src={img} classname="detail" alt="" height={300} width={200}/> */}
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
</div>    

)
}

export default Detail
