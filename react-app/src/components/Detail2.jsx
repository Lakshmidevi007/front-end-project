
import { useState, useEffect } from 'react';
import axios from 'axios';

function SingleManSearchForMeaning() {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBook = async () => {
    try {
      const res = await axios.get('https://openlibrary.org/search.json?q=man%20search%20for%20meaning');
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

  if (loading) return <p style={{ textAlign: 'center', color: '#333' }}>Loading...</p>;
  if (error) return <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>;
  if (!book) return <p style={{ textAlign: 'center', color: '#333' }}>No book found.</p>;

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
          font-family: 'Inter', sans-serif;
          background: #f8fafc;
        }

        .container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 60px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .book-cover {
          width: 240px;
          height: auto;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease;
        }

        .book-cover:hover {
          transform: scale(1.05);
        }

        .placeholder {
          width: 240px;
          height: 360px;
          background: #e2e8f0;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-style: italic;
          color: #64748b;
        }

        .title {
          margin-top: 30px;
          font-size: 32px;
          font-weight: 700;
          color: #1e293b;
        }

        .meta {
          margin-top: 10px;
          font-size: 16px;
          color: #475569;
        }

        .info-box {
          margin-top: 40px;
          padding: 20px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          width: 100%;
          max-width: 600px;
          text-align: left;
        }

        .info-box p {
          margin: 10px 0;
          font-size: 16px;
          color: #334155;
        }

        .info-box p strong {
          color: #0f172a;
        }

        @media (max-width: 600px) {
          .book-cover, .placeholder {
            width: 180px;
            height: auto;
          }

          .title {
            font-size: 24px;
          }

          .info-box {
            padding: 15px;
          }
        }
      `}</style>

      <div className="container">
        {coverUrl ? (
          <img src={coverUrl} alt={book.title} className="book-cover" />
        ) : (
          <div className="placeholder">No Cover Image</div>
        )}

        <h1 className="title">{book.title}</h1>
        <p className="meta">
          by {book.author_name?.join(', ') || 'Unknown'} • {book.first_publish_year || 'N/A'}
        </p>

        <div className="info-box">
          <p><strong>eBook Access:</strong> {book.ebook_access || 'N/A'}</p>
          <p><strong>Edition Key:</strong> {book.cover_edition_key || 'N/A'}</p>
          <p><strong>Author Key:</strong> {book.author_key?.join(', ') || 'N/A'}</p>
        </div>
      </div>
    </>
  );
}

export default SingleManSearchForMeaning;
