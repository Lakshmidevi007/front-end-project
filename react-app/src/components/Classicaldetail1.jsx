
import { useState, useEffect } from 'react';
import axios from 'axios';

function WarPeaceBook() {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBook = async () => {
    try {
      const res = await axios.get('https://openlibrary.org/search.json?q=war%20peace');
      const first = res.data.docs[0];
      setBook(first);
    } catch (err) {
      console.error('Error fetching book:', err);
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);

  if (loading) return <p style={{ textAlign: 'center' }}>Loading...</p>;
  if (error) return <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>;
  if (!book) return <p style={{ textAlign: 'center' }}>No book found</p>;

  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : null;

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatImage {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .book-container {
          max-width: 750px;
          margin: 50px auto;
          padding: 25px;
          background: #fdfdfd;
          border-radius: 16px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
          font-family: 'Segoe UI', sans-serif;
          display: flex;
          gap: 20px;
          align-items: flex-start;
          animation: fadeInUp 0.6s ease-in-out;
        }

        .book-image {
          width: 180px;
          border-radius: 12px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
          animation: floatImage 3s ease-in-out infinite;
          transition: transform 0.3s ease;
        }

        .book-image:hover {
          transform: scale(1.05) rotate(1deg);
        }

        .book-details {
          flex: 1;
        }

        .book-details h2 {
          margin: 0 0 10px;
          font-size: 24px;
          color: #1a1a1a;
        }

        .book-details p {
          margin: 8px 0;
          color: #333;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .book-container {
            flex-direction: column;
            text-align: center;
            align-items: center;
          }

          .book-image {
            margin-bottom: 20px;
          }
        }
      `}</style>

      <div className="book-container">
        {coverUrl ? (
          <img src={coverUrl} alt={book.title} className="book-image" />
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
            }}
          >
            No Cover Image
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

export default WarPeaceBook;
