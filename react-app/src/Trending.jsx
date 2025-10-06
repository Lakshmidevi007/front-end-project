import React from 'react';
import img1 from './assets/trending1.webp';
import img2 from './assets/trending2.webp';
import img3 from './assets/trending3.webp';
import { useNavigate } from 'react-router-dom';

function Trending() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/book/1'); // This will take you to BookDetails page
  };

  return (
    <div>
      <h3>Trending Books</h3>

      <div className="trending">
        <div className="container py-5">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {/* ✅ CLICKABLE IMAGE */}
            <div className="col">
              <div className="card shadow-sm">
                <img
                  src={img1}
                  alt="Book 1"
                  className="card-img"
                  onClick={handleClick}
                  style={{ cursor: 'pointer' }}
                  width="100%"
                  height="300"
                />
              </div>
            </div>

            {/* Non-clickable images */}
            <div className="col">
              <div className="card shadow-sm">
                <img src={img2} alt="Book 2" className="card-img" width="100%" height="300" />
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img src={img3} alt="Book 3" className="card-img" width="100%" height="300" />
              </div>
            </div>
          </div>

          <div className="para mt-4">
            <p>
              In today's world, books continue to inspire readers across the globe, and several titles have quickly
              become trending favorites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trending;
