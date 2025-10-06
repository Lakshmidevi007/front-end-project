import { useState } from 'react';
import axios from 'axios';



function Search() {
  const [foodData, setFoodData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getMeals = async (query) => {
    if (!query) return;
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`);
      console.log(response.data.docs);
      setFoodData(response.data.docs);
    } catch (err) {
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    getMeals(searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <h1>Book Search</h1>

      <input
        type="text"
        placeholder="Search for books..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {foodData.map((docs, index) => (
        <div key={index} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <img src={react} alt="react-logo" width={50} />
          <img src={img} alt="placeholder" width={50} />
          <div className='data'>
            <h3>Author Key: {docs.author_key?.[0]}</h3>
            <p>eBook Access: {docs.ebook_access}</p>
            <p>Author Name: {docs.author_name?.join(', ')}</p>
            <p>Cover ID: {docs.cover_i}</p>
            <p>Title: {docs.title}</p>
            <p>First Published: {docs.first_publish_year}</p>
            <p>Public Scan: {docs.public_scan_b ? 'Yes' : 'No'}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Search;
