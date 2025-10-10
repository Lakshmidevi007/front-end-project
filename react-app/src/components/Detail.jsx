import { useState, useEffect } from 'react';
import axios from 'axios';

function BookWithAuthorDetails() {
  const [book, setBook] = useState(null);
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBookAndAuthor = async () => {
    try {
      const res = await axios.get(
        "https://openlibrary.org/search.json?q=the%20history%20of%20the%20world"
      );
      const firstBook = res.data.docs?.[0];

      if (!firstBook) {
        setError("No book found.");
        return;
      }

      setBook(firstBook);

      if (firstBook.author_key?.length > 0) {
        const authorKey = firstBook.author_key[0];
        const authorRes = await axios.get(
          `https://openlibrary.org/authors/${authorKey}.json`
        );
        setAuthor(authorRes.data);
      } else {
        setAuthor({ name: "Unknown Author" });
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to fetch data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookAndAuthor();
  }, []);

  if (loading) return <p style={{ textAlign: 'center' }}>Loading...</p>;
  if (error) return <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>;

  const coverUrl = book?.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : null;

  return (
    <div>
      {/* Inline styles and animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .book-card {
          animation: fadeIn 0.6s ease forwards;
          max-width: 750px;
          margin: 40px auto;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          background-color: #fff;
          font-family: 'Segoe UI', sans-serif;
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }
        .book-image {
          width: 200px;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.15);
          transition: transform 0.3s ease;
        }
        .book-image:hover {
          transform: scale(1.05);
        }
        .book-details {
          animation: slideIn 0.7s ease forwards;
        }
        .book-details h1 {
          margin-bottom: 10px;
          color: #333;
        }
        .book-details h3 {
          margin-top: 0;
          color: #555;
        }
        .book-details p {
          color: #444;
          line-height: 1.5;
        }
      `}</style>

      <div className="book-card">
        {coverUrl ? (
          <img src={coverUrl} alt={book.title} className="book-image" />
        ) : (
          <div
            style={{
              width: '200px',
              height: '280px',
              backgroundColor: '#eee',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '10px',
              fontStyle: 'italic',
              color: '#888',
            }}
          >
            No Cover
          </div>
        )}

        <div className="book-details">
          <h1>{book.title}</h1>
          <h3>Author: {author?.name || 'Unknown'}</h3>
          <p><strong>First Published:</strong> {book.first_publish_year || 'N/A'}</p>
          <p><strong>eBook Access:</strong> {book.ebook_access || 'N/A'}</p>
          <p><strong>Cover Edition Key:</strong> {book.cover_edition_key || 'N/A'}</p>
          <p><strong>Author Key:</strong> {book.author_key?.join(', ') || 'N/A'}</p>
        </div>
      </div>
    </div>
  );
}

export default BookWithAuthorDetails;
