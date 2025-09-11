import React from 'react'
import img from"../assets/classic1.webp"
function Classicaldetail() {
  return (
    <div>
      <nav class="navbar navbar-expand" aria-label="Second navbar example"> 
      <div class="container-fluid"> 
        <a class="navbar-brand" href="#">Logo</a> 
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation"> 
            <span class="navbar-toggler-icon"></span> 
            </button> <div class="collapse navbar-collapse" id="navbarsExample02"> 
                <ul class="navbar-nav me-auto"> 
                    
                        <li class="nav-item"> 
                            <a class="nav-link" href="#">My Books</a> 
                            </li> </ul> 
                            <form role="search"> 
                                <input class="form-control" type="search" placeholder="Search" aria-label="Search"/> 
                                </form> 
                                </div> 
                                </div> 
      </nav>
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
    < div className='footer'>
      <p className='copyright'>@ {new Date().getFullYear()}Library Books.All Rights Reserved.</p>
    </div>
    </div>
  )
}

export default Classicaldetail
