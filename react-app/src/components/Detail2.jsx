import React from 'react'
import img3 from "../assets/trending3.webp"
function Detail2() {
  return (
    <div className='trend'>
      <h1>WIND IN THE WILLOWS</h1>
            <div classname="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            
              <img src={img3} class="img-thumbnail" alt="" height={200} width={200}></img>
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
          
         
          
           <p>"The Wind in the Willows"First Published: 1908</p><hr></hr>
           The book was published in 1908 and became a beloved children’s classic, known for its mix of whimsical animal characters and deep themes about friendship, nature, and home.
           <p>They published:1907</p><hr></hr>
           <p>In 1907, after leaving his job at the Bank of England, Grahame compiled these stories and wrote them down, sending many of them as letters to his son.</p><hr></hr>
         </div>
      </div>
      </div>
          
  )
}

export default Detail2;
