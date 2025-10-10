import React from 'react'
import { Navigate } from 'react-router-dom'
import Header from './components/Header'
import Image from './components/Image'

import Trending from './Trending'
import Classical from './Classical'
import Books from './components/Books'
import Browse from './components/Browse'
import Footer from './Footer'

import {Routes,Route,}from "react-router-dom";
import "./App.css"
import Detail from './components/Detail'

import Detail1 from './components/Detail1'

import Detail2 from './components/Detail2'
import Kidsdetail from './components/Kidsdetail'
import Kidsdetail1 from './components/Kidsdetail1'
import Kidsdetail2 from './components/Kidsdetail2'
import Classicaldetail from './components/Classicaldetail'
import Classicaldetail1 from './components/Classicaldetail1'
import Classicaldetail2 from './components/Classicaldetail2'



function App() {
  return (
    <div>
      
      {/* <Routes>
        {/* <Route path='/detail' element={<Detail/>}/>
      // </Routes> */}
     {/* <Routes>
        <Route path='/Image' element={<Image/>}/>
        <Route path='/Trending' element={<Trending/>}/>
        <Route path='/Classical' element={<Classical/>}/>
        <Route path='/Books' element={<Books/>}/>
        <Route path='/Browse' element={<Browse/>}/> */}
        {/* <Route path='/Detail' element={<Detail/>}/>                       
//       </Routes> */}  
<Header/>
<Routes>
  <Route path='/' element={<>
  <Image/> 
      
       <Trending/>
       <Classical/>
  <Books/>      
  
  </>}/>
  <Route path='/Detail' element={<Detail/>}/>
  <Route path='/Detail1' element={<Detail1/>}/>
   <Route path='/Detail2' element={<Detail2/>}/>


   <Route path='/Classicaldetail1' element={<Classicaldetail1/>}/>
     <Route path='/Classicaldetail' element={<Classicaldetail/>}/>
       <Route path='/Classicaldetail2' element={<Classicaldetail2/>}/>
       

<Route path='/Kidsdetail' element={<Kidsdetail/>}/>
<Route path='/Kidsdetail1' element={<Kidsdetail1/>}/>
<Route path='/Kidsdetail2' element={<Kidsdetail2/>}/>
</Routes>
      <Footer/>

      
      

 {/* <Detail/> */}
{/* <Trending/>
<Footer/> */}

 {/* <Detail1/> 
 <Detail2/>  */}
{/* <Kidsdetail/> 
 <Kidsdetail1/> 
<Kidsdetail2/> */}
{/* <Classicaldetail/> 
 <Classicaldetail1/> 
<Classicaldetail2/> */}

 </div>

  )
}

export default App
