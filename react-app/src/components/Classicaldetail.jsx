import { useState, useEffect } from 'react';
import axios from 'axios';

function HeartOfDarknessBook() {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBook = async () => {
    try {
      const res = await axios.get('https://openlibrary.org/search.json?q=heart%20of%20darkness');
      const firstBook = res.data.docs[0];
      setBook(firstBook);
    } catch (err) {
      console.error('Error fetching book:', err);
      setError('Failed to load book.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);

  if (loading) return <p style={{ textAlign: 'center', color: '#fff' }}>Loading...</p>;
  if (error) return <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>;
  if (!book) return <p style={{ textAlign: 'center', color: '#fff' }}>No book found.</p>;

  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

        body {
          margin: 0;
          padding: 0;
          background-color:#fff;
          font-family: 'Inter', sans-serif;
        }

        .hero-banner {
          position: relative;
          width: 100%;
          height: 100vh;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-position: center;
          background-size: cover;
          filter: blur(10px) brightness(0.4);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 40px;
          padding: 40px;
          background: rgba(15, 23, 42, 0.7);
          border-radius: 16px;
          max-width: 1000px;
          width: 90%;
        }

        .hero-content img {
          width: 240px;
          border-radius: 12px;
          box-shadow:#fff;
          transition: transform 0.3s ease;
        }

        .hero-content img:hover {
          transform: scale(1.05);
        }

        .book-info {
          flex: 1;
        }

        .book-info h1 {
          font-size: 36px;
          margin-bottom: 15px;
        }

        .book-info p {
          font-size: 16px;
          margin: 8px 0;
          color: #e2e8f0;
        }

        @media (max-width: 768px) {
          .hero-content {
            flex-direction: column;
            text-align: center;
            padding: 30px 20px;
          }

          .hero-content img {
            width: 180px;
          }

          .book-info h1 {
            font-size: 24px;
          }
        }
      `}</style>

      <div className="hero-banner">
        {coverUrl && (
          <div
            className="hero-bg"
            style={{ backgroundImage: `url(${coverUrl})` }}
          ></div>
        )}

        <div className="hero-content">
          {coverUrl ? (
            <img src={coverUrl} alt={book.title} />
          ) : (
            <div
              style={{
                width: '240px',
                height: '360px',
                backgroundColor: '#334155',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '12px',
                color: '#cbd5e1',
                fontStyle: 'italic',
              }}
            >
              No Cover Image
            </div>
          )}

          <div className="book-info">
            <h1>{book.title}</h1>
            <p><strong>Author:</strong> {book.author_name?.join(', ') || 'Unknown'}</p>
            <p><strong>First Published:</strong> {book.first_publish_year || 'N/A'}</p>
            <p><strong>eBook Access:</strong> {book.ebook_access || 'N/A'}</p>
            <p><strong>Edition Key:</strong> {book.cover_edition_key || 'N/A'}</p>
            <p><strong>Author Key:</strong> {book.author_key?.join(', ') || 'N/A'}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeartOfDarknessBook;
