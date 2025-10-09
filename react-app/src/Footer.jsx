import React from 'react'
import img from "./assets/facebook.svg"
import img1 from "./assets/instagram.png"
import img2 from "./assets/youtube.png"
function Footer() {

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
         
          
        </div>

        <div className="footer-section">
          <h3>Categories</h3>
          <ul>
            <li><a href="#">Fiction</a></li>
            <li><a href="#">Non-Fiction</a></li>
            <li><a href="#">Mystery</a></li>
            <li><a href="#">Sci-Fi</a></li>
            <li><a href="#">Children's</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Browse Books</a></li>
            <li><a href="#">Trending Books</a></li>
            <li><a href="#">Classical Books</a></li>
            <li><a href="#">Kids Books</a></li>
          </ul>
        </div>

        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <img src={img} alt="" width={30} />
            <img src={img1} alt="" width={30} />
            <img src={img2} alt="" width={30} />
          </div>

      
      </div>
      </div>
    </footer>
  );




    
}



export default Footer;
