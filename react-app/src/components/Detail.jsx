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
        'https://openlibrary.org/search.json?q=the%20history%20of%20the%20world'
      );
      const firstBook = res.data.docs?.[0];

      if (!firstBook) {
        setError('No book found.');
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
        setAuthor({ name: 'Unknown Author' });
      }
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Failed to fetch data.');
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
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .book-container {
          max-width: 800px;
          margin: 40px auto;
          padding: 25px;
          border-radius: 16px;
          background: linear-gradient(to bottom right, #ffffff, #f5f7fa);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
          display: flex;
          gap: 25px;
          font-family: 'Segoe UI', sans-serif;
          animation: fadeIn 0.6s ease-in-out;
          transition: transform 0.3s ease;
        }

        .book-container:hover {
          transform: translateY(-5px);
        }

        .book-cover {
          width: 200px;
          height: auto;
          border-radius: 12px;
          object-fit: cover;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        .book-info {
          flex: 1;
          animation: slideIn 0.6s ease;
        }

        .book-info h1 {
          margin: 0 0 10px;
          font-size: 24px;
          color: #2c3e50;
        }

        .book-info h3 {
          margin: 0 0 15px;
          color: #7f8c8d;
        }

        .book-info p {
          margin: 6px 0;
          font-size: 15px;
          color: #34495e;
        }

        @media (max-width: 600px) {
          .book-container {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .book-info {
            padding-top: 15px;
          }
        }
      `}</style>

      <div className="book-container">
        {coverUrl ? (
          <img src={coverUrl} alt={book.title} className="book-cover" />
        ) : (
          <div
            style={{
              width: '200px',
              height: '280px',
              backgroundColor: '#ddd',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '12px',
              fontStyle: 'italic',
              color: '#888',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
          >
            No Cover
          </div>
        )}

        <div className="book-info">
          <h1>{book.title}</h1>
          <h3>Author: {author?.name || 'Unknown'}</h3>
          <p><strong>First Published:</strong> {book.first_publish_year || 'N/A'}</p>
          <p><strong>eBook Access:</strong> {book.ebook_access || 'N/A'}</p>
          <p><strong>Cover Edition Key:</strong> {book.cover_edition_key || 'N/A'}</p>
          <p><strong>Author Key:</strong> {book.author_key?.join(', ') || 'N/A'}</p></div>
</div>
      </div>
    
  );
}

export default BookWithAuthorDetails;
