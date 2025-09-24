import React from 'react'
import img1 from "../assets/trending2.webp"
function Detail1() {
  return (
    <div className="trend">
        
      <h1>THE HISTORY OF THE WORLD</h1>
     
      <div classname="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
     <img src={img1} class="img-thumbnail" alt="" height={200} width={200}></img>
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
    <h3>History</h3>
     <div className='details'>
    
      <p>The History of the World" by J. M. Roberts

(First Published: 1976)</p><hr></hr>
    
  <p>A widely used single-volume world history book, revised several times (e.g., 1993, 1997, and posthumously updated by Odd Arne Westad in 2013)</p><hr></hr>
  
<p> "A Short History of the World" by H. G. Wells (First Published: 1922)</p><hr></hr>
<p>A condensed version of world history intended for a general audience.</p><hr></hr>
  </div>

</div>
    </div>
    </div>
  )
}

export default Detail1;
