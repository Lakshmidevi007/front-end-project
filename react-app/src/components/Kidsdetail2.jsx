import React from 'react'
import img from "../assets/kids2.jpg"
function Kidsdetail2() {
  return (
    <div className='trend'>
      <h1>THE TIMING DRAGON</h1>
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

           <p> Published in 2011.</p>
            <p>Part of the Dragonriders of Pern series</p>
          </div>
    </div>
  )
}

export default Kidsdetail2
