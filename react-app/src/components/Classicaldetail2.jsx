import React from 'react'
import img from "../assets/classic3.jpg"
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
    
    </div>
  )
}

export default Classicaldetail2
