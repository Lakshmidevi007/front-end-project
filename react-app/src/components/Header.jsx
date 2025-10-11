// Header.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // <-- import this

function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate(); // <-- initialize

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    try {
      const response = await axios.get(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(searchQuery)}`
      );
      const books = response.data.docs.slice(0, 1);
      setSearchResults(books);
    } catch (error) {
      console.error('Error fetching books:', error);
      setSearchResults([]);
    }
  };

  const handleLoginClick = () => {
    navigate('/loginpage'); // Navigate to login page
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Logo</a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">My Books</a>
              </li>
            </ul>

            <form className="d-flex me-3" role="search" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search books"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>

            {/* Login Button */}
            <button className="btn btn-outline-light" type="button" onClick={handleLoginClick}>
              Login
            </button>
          </div>
        </div>
      </nav>

      {searchResults.length > 0 && (
        <div className="container mt-3">
          <h5>Search Results:</h5>
          <ul className="list-group">
            {searchResults.map((book, index) => (
              <li key={index} className="list-group-item">
                <strong>{book.title}</strong>{' '}
                {book.author_name ? `by ${book.author_name.join(', ')}` : ''}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Header;
