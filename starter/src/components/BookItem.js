import "../App.css";
import BookShelfChanger from "./BookShelfChanger";
import { useState, useEffect } from "react";
import { get } from "../BooksAPI";

const BookItem = (book) => {
  const [shelf, setShelf] = useState("");
  useEffect(() => {
    const getShelf = async () => {
      const res = await get(book.book.id);
      setShelf(res.shelf);
    };
    getShelf();
  }, []);

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.book.imageLinks.smallThumbnail})`,
            }}
          ></div>
          <BookShelfChanger shelf={shelf} />
        </div>
        <div className="book-title">{book.book.title}</div>
        <div className="book-authors">{book.book.authors}</div>
      </div>
    </li>
  );
};

export default BookItem;
