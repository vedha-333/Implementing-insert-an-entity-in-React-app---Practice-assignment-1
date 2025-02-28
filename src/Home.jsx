import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import BookCard from './components/BookCard';
import books from './booksData';
import './Home.css';

const Home = () => {
  const navigate = useNavigate(); // Correct usage of useNavigate

  return (
    <div className="home-container">
      <h1>Book Library</h1>
      <div className="books-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

      <button
        onClick={() => {
          navigate('/add-book'); // Correct path
        }}
      >
        Add Book
      </button>
    </div>
  );
};

export default Home;