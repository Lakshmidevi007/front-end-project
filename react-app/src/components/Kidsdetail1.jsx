import { useState, useEffect } from 'react';
import axios from 'axios';

function SingleTimingTheDragonBook() {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBook = async () => {
    try {
      const res = await axios.get('https://openlibrary.org/search.json?q=timing%20the%20dragon');
      const first = res.data.docs[0];
      setBook(first);
    } catch (err) {
      console.error('Error fetching book:', err);
      setError('Failed to fetch data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);

  if (loading) return <p style={{ textAlign: 'center' }}>Loading...</p>;
  if (error) return <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>;
  if (!book) return <p style={{ textAlign: 'center' }}>No book found.</p>;

  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : null;

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .book-container {
          max-width: 800px;
          margin: 40px auto;
          padding: 25px;
          background: linear-gradient(145deg, #ffffff, #f2f2f2);
          border-radius: 15px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          display: flex;
          gap: 30px;
          font-family: 'Segoe UI', sans-serif;
          animation: fadeIn 0.6s ease-in-out;
        }

        .book-cover {
          width: 180px;
          border-radius: 12px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
          animation: float 3s ease-in-out infinite;
        }

        .book-details {
          flex: 1;
        }

        .book-details h2 {
          margin-top: 0;
          font-size: 24px;
          color: #333;
        }

        .book-details p {
          margin: 8px 0;
          color: #444;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .book-container {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .book-cover {
            margin-bottom: 20px;
          }
        }
      `}</style>

      <div className="book-container">
        {coverUrl ? (
          <img src={coverUrl} alt={book.title} className="book-cover" />
        ) : (
          <div
            style={{
              width: '180px',
              height: '260px',
              backgroundColor: '#eee',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontStyle: 'italic',
              color: '#888',
              boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
            }}
          >
            No Cover
          </div>
        )}

        <div className="book-details">
          <h2>{book.title}</h2>
          <p><strong>Author(s):</strong> {book.author_name?.join(', ') || 'Unknown'}</p>
          <p><strong>First Published:</strong> {book.first_publish_year || 'N/A'}</p>
          <p><strong>eBook Access:</strong> {book.ebook_access || 'N/A'}</p>
          <p><strong>Cover Edition Key:</strong> {book.cover_edition_key || 'N/A'}</p>
          <p><strong>Author Key:</strong> {book.author_key?.join(', ') || 'N/A'}</p>
        </div>
      </div>
    </>
  );
}

export default SingleTimingTheDragonBook;
