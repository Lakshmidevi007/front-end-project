import React from 'react'
import img from "../assets/classic2.webp"
function Classicaldetail1() {
  return (
    <div className='trend'>
      <h1>THE PRINCE NICCOLO MACHIVELLI</h1>
      
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
  <p>Niccolò Machiavelli (1469–1527)</p><hr></hr>

<p>Italian diplomat, political philosopher, and historian.</p><hr></hr>

<p>Worked as a senior official in the Florentine Republic during the late 15th and early 16th centuries.</p><hr></hr>
</div>
    </div>
  </div>  
  )
}

export default Classicaldetail1
