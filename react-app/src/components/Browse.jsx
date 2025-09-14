import React from 'react'
import book from "../assets/classic1.webp"
import title from "../assets/classic2.webp"
import titles from "../assets/kids1.jpg"
import titles1 from "../assets/kids2.jpg"
import titles2 from "../assets/kids.webp"
import titles3 from "../assets/trending1.webp"
import titles4 from "../assets/trending2.webp"
import title5 from"../assets/trending3.webp"

function Browse() {
  return (
    <div className='brands'>
      <h4>Browse by Books</h4>
      <div className='marquee'>
  <img src={title} class="img-thumbnail" alt="" height={250} width={200}></img>
  <img src={titles1} class="img-thumbnail" alt="" height={300} width={200}></img>
  <img src={titles2} class="img-thumbnail" alt="" height={300} width={200}></img>
<img src={titles3} class="img-thumbnail" alt="" height={250} width={200}></img>
<img src={titles4} class="img-thumbnail" alt="" height={250} width={200}></img>
<img src={title5} class="img-thumbnail" alt="" height={250} width={200}></img>
    </div>

    </div>
  )
}

export default Browse;

