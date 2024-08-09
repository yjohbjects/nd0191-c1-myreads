import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BookGrid from "../components/BookGrid";
import { search } from "../BooksAPI";

const Search = () => {
  const [query, setQuery] = useState("");
  const [searchBooks, setSearchBooks] = useState([]);

  useEffect(() => {
    const searchResult = async () => {
      const res = await search(query, 100);
      setSearchBooks(res);
    };

    if (query) {
      searchResult();
    }
  }, [query]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/">
          <div className="close-search">Close</div>
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
      </div>
      <div style={{ paddingTop: "100px" }}>
        <BookGrid books={searchBooks} />
      </div>
    </div>
  );
};

export default Search;
