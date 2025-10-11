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
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);

  if (loading) return <p style={{ textAlign: 'center', marginTop: 40 }}>Loading...</p>;
  if (error) return <p style={{ textAlign: 'center', color: 'red', marginTop: 40 }}>{error}</p>;
  if (!book) return <p style={{ textAlign: 'center', marginTop: 40 }}>No book found.</p>;

  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : null;

  return (
    <>
      <style>{`
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #fafafa;
          margin: 0;
          padding: 20px;
          color: #444;
        }
        .card {
          max-width: 400px;
          margin: 50px auto;
          background: #fff;
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          padding: 25px;
          box-shadow: 0 6px 12px rgba(0,0,0,0.08);
          text-align: center;
        }
        .cover {
          width: 160px;
          height: 240px;
          margin: 0 auto 20px;
          border-radius: 10px;
          background: #f0f0f0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #999;
          font-style: italic;
          font-size: 0.9rem;
          overflow: hidden;
        }
        .cover img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 10px;
        }
        h2 {
          font-weight: 600;
          font-size: 1.6rem;
          margin: 15px 0 10px;
          color: #222;
        }
        p {
          margin: 8px 0;
          font-size: 1rem;
          line-height: 1.4;
          color: #666;
        }
        strong {
          color: #3a86ff;
        }
      `}</style>

      <div className="card" role="main" aria-label={`Book details for ${book.title}`}>
        {coverUrl ? (
          <div className="cover">
            <img src={coverUrl} alt={`Cover of the book ${book.title}`} />
          </div>
        ) : (
          <div className="cover">No Image Available</div>
        )}

        <h2>{book.title}</h2>
        <p><strong>Author(s):</strong> {book.author_name?.join(', ') || 'Unknown'}</p>
        <p><strong>First Published:</strong> {book.first_publish_year || 'N/A'}</p>
        <p><strong>eBook Access:</strong> {book.ebook_access || 'N/A'}</p>
        <p><strong>Edition Key:</strong> {book.cover_edition_key || 'N/A'}</p>
        <p><strong>Author Key:</strong> {book.author_key?.join(', ') || 'N/A'}</p>
      </div>
    </>
  );
}

export default WarPeaceBook;
