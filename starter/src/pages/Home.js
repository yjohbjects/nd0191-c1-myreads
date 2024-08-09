import { Link } from "react-router-dom";
import BookGrid from "../components/BookGrid";
import Title from "../components/Title";
import { get, getAll } from "../BooksAPI";
import { useState, useEffect } from "react";

const Home = () => {
  const [readingBooks, setReadingBooks] = useState([]);
  const [wantToReadBooks, setWantToReadBooks] = useState([]);
  const [readBooks, setReadBooks] = useState([]);

  useEffect(() => {
    const getAllBooks = async () => {
      const res = await getAll();

      setReadingBooks(res.filter((book) => book.shelf === "currentlyReading"));
      setWantToReadBooks(res.filter((book) => book.shelf === "wantToRead"));
      setReadBooks(res.filter((book) => book.shelf === "read"));
    };
    getAllBooks();
  }, []);
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <div className="list-books-content">
            <div className="bookshelf">
              <Title title={"Currently Reading"} />
              <BookGrid books={readingBooks} />
            </div>

            <div className="bookshelf">
              <Title title={"Want to Read"} />
              <BookGrid books={wantToReadBooks} />
            </div>

            <div className="bookshelf">
              <Title title={"Read"} />
              <BookGrid books={readBooks} />
            </div>
          </div>
        </div>
      </div>

      <div className="open-search">
        <div>
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
