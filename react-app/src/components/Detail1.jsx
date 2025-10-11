import { useState, useEffect } from 'react';
import axios from 'axios';

function SingleWindInTheWillowsBook() {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchFirstBook = async () => {
    try {
      const res = await axios.get('https://openlibrary.org/search.json?q=wind%20in%20the%20willows');
      const first = res.data.docs[0];
      setBook(first);
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to fetch book.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFirstBook();
  }, []);

  if (loading) return <p style={{ textAlign: 'center', color: 'white' }}>Loading...</p>;
  if (error) return <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>;
  if (!book) return <p style={{ textAlign: 'center', color: 'white' }}>No book found.</p>;

  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

        body {
          background-color: lightblue; /* Tailwind Blue-400 */
          margin: 0;
          padding: 0;
          font-family: 'Poppins', sans-serif;
          height:200px;
        }

        .book-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
        }

        .book-profile {
          width: 100%;
          max-width: 850px;
          display: flex;
          background-color: #ffffff;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
          animation: fadeIn 0.6s ease-in-out;
        }

        .book-left {
          background-color: #f8fafc;
          padding: 20px;
          flex: 0 0 240px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-right: 2px solid #e2e8f0;
        }

        .book-left img {
          width: 200px;
          border-radius: 12px;
          object-fit: cover;
          box-shadow: 0 8px 16px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }

        .book-left img:hover {
          transform: scale(1.03);
        }

        .book-right {
          flex: 1;
          padding: 30px 40px;
        }

        .book-right h1 {
          font-size: 26px;
          margin-bottom: 10px;
          color: #1e293b;
        }

        .book-right h3 {
          font-weight: 400;
          color: #475569;
          margin-bottom: 25px;
        }

        .meta {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          font-size: 15px;
        }

        .meta p {
          margin: 0;
          color: #334155;
        }

        .meta strong {
          color: #0f172a;
        }

        .placeholder {
          width: 200px;
          height: 280px;
          border-radius: 12px;
          background-color: #cbd5e1;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #475569;
          font-style: italic;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 700px) {
          .book-profile {
            flex-direction: column;
          }

          .book-left {
            border-right: none;
            border-bottom: 2px solid #e2e8f0;
          }

          .book-right {
            padding: 25px;
          }

          .meta {
            grid-template-columns: 1fr;
          }

          .book-left img {
            width: 160px;
          }
        }
      `}</style>

      <div className="book-page">
        <div className="book-profile">
          <div className="book-left">
            {coverUrl ? (
              <img src={coverUrl} alt={book.title} />
            ) : (
              <div className="placeholder">No Cover Image</div>
            )}
          </div>

          <div className="book-right">
            <h1>{book.title}</h1>
            <h3>Author: {book.author_name?.join(', ') || 'Unknown'}</h3>
            <div className="meta">
              <p><strong>First Published:</strong> {book.first_publish_year || 'N/A'}</p>
              <p><strong>eBook Access:</strong> {book.ebook_access || 'N/A'}</p>
              <p><strong>Edition Key:</strong> {book.cover_edition_key || 'N/A'}</p>
              <p><strong>Author Key:</strong> {book.author_key?.join(', ') || 'N/A'}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleWindInTheWillowsBook;
