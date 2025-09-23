import React from 'react'
// import book from "../assets/classic1.webp"
// import title from "../assets/classic2.webp"
// import titles from "../assets/kids1.jpg"
// import titles1 from "../assets/kids2.jpg"
// import titles2 from "../assets/kids.webp"
// import titles3 from "../assets/trending1.webp"
// import titles4 from "../assets/trending2.webp"
// import title5 from"../assets/trending3.webp"
import img from "../assets/OIP.webp"
import img1 from "../assets/bib.webp"
import img2 from"../assets/art.webp"
import img3 from "../assets/classic3.webp"
import img4 from  "../assets/thiriller.webp"

function Browse() {
  return (

  
   <div className='brands'>
      <h4>Browse by Subject</h4>
      <div className='brands1'></div>
  {/* <img src={title} class="img-thumbnail" alt="" height={250} width={200}></img>
  <img src={titles1} class="img-thumbnail" alt="" height={300} width={200}></img>
  <img src={titles2} class="img-thumbnail" alt="" height={300} width={200}></img>
<img src={titles3} class="img-thumbnail" alt="" height={250} width={200}></img>
<img src={titles4} class="img-thumbnail" alt="" height={250} width={200}></img>
<img src={title5} class="img-thumbnail" alt="" height={250} width={200}></img> */}

    <img src={img} class="img-thumbnail" alt="" height={200} width={200}></img>
    <img src={img1} class="img-thumbnail" alt="" height={300} width={200}></img>    
    <img src={img2} class="img-thumbnail" alt="" height={200} width={200}></img>
        <img src={img3} class="img-thumbnail" alt="" height={200} width={200}></img>
        <img src={img4} class="img-thumbnail" alt="" height={200} width={200}></img>
    </div>
  
  )
}



export default Browse;

