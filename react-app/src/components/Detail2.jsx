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

  if (loading) return <p style={{ textAlign: 'center' }}>Loading...</p>;
  if (error) return <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>;
  if (!book) return <p style={{ textAlign: 'center' }}>No book found.</p>;

  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : null;

  return (
    <>
      <style>{`
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes floatImage {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .book-container {
          max-width: 700px;
          margin: 50px auto;
          padding: 30px;
          border-radius: 12px;
          background: #ffffff;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          font-family: 'Segoe UI', sans-serif;
          animation: fadeInScale 0.6s ease-out forwards;
          display: flex;
          gap: 25px;
          align-items: flex-start;
        }

        .book-image {
          width: 180px;
          border-radius: 12px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
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
          color: #222;
        }

        .book-details p {
          margin: 8px 0;
          color: #333;
          line-height: 1.6;
        }

        @media (max-width: 600px) {
          .book-container {
            flex-direction: column;
            align-items: center;
            text-align: center;
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
              borderRadius: '12px',
              backgroundColor: '#ddd',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#666',
              fontStyle: 'italic',
            }}
          >
            No Cover Image
          </div>
        )}

        <div className="book-details">
          <h2>{book.title}</h2>
          <p><strong>Author:</strong> {book.author_name?.join(', ') || 'Unknown'}</p>
          <p><strong>First Published:</strong> {book.first_publish_year || 'N/A'}</p>
          <p><strong>eBook Access:</strong> {book.ebook_access || 'N/A'}</p>
          <p><strong>Cover Edition Key:</strong> {book.cover_edition_key || 'N/A'}</p>
          <p><strong>Author Key:</strong> {book.author_key?.join(', ') || 'N/A'}</p>
        </div>
      </div>
    </>
  );
}

export default SingleManSearchForMeaning;
