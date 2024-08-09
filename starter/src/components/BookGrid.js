import "../App.css";
import BookItem from "./BookItem";

const BookGrid = (books) => {
  return (
    <div className="bookshelf-books">
      {books.books.length ? (
        <ol className="books-grid">
          {books?.books.map((book, i) => (
            <div key={i}>
              <BookItem book={book} />
            </div>
          ))}
        </ol>
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default BookGrid;
