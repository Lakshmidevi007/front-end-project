// components/SearchResults.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function SearchResults() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const query = new URLSearchParams(location.search).get('q');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`
        );
        setResults(response.data.docs.slice(0, 1))
      } catch (error) {
        console.error('API Error:', error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchData();
    }
  }, [query]);

  return (
    <div className="container mt-4">
      <h4>Results for: <em>{query}</em></h4>
      {loading ? (
        <p>Loading...</p>
      ) : results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <ul className="list-group">
          {results.map((book, index) => (
            <li key={index} className="list-group-item">
              <strong>{book.title}</strong>{' '}
              {book.author_name && `by ${book.author_name.join(', ')}`}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchResults;
