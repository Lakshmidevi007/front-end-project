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
         
<img src={book} alt="" height={200} width={150}/>
<img src={title} alt=""height={200} width={150}/>
<img src={titles} alt=''height={200} width={150}/>
<img src={titles1} alt=''height={200} width={150}/>
<img src={titles2} alt=''height={200} width={150}/>
<img src={titles3} alt=''height={200} width={150}/>
<img src={titles4} alt=''height={200} width={150}/>
<img src={title5} alt=''height={200} width={150}/>

    </div>
    </div>
  )
}

export default Browse

