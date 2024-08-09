const BookShelfChanger = (shelf) => {
  return (
    <div className="book-shelf-changer">
      <select>
        <option value="none" disabled>
          ⠀⠀Move to...
        </option>

        {shelf.shelf === "currentlyReading" ? (
          <option
            value="currentlyReading"
            // onClick={props.setCurrentshelf.Shelf("currentlyReading")}
          >
            ✔⠀Currently Reading
          </option>
        ) : (
          <option
            value="currentlyReading"
            // onClick={props.setCurrentShelf("currentlyReading")}
          >
            ⠀⠀Currently Reading
          </option>
        )}

        {shelf.shelf === "wantToRead" ? (
          <option
            value="wantToRead"
            // onClick={props.setCurrentShelf("wantToRead")}
          >
            ✔⠀Want to Read
          </option>
        ) : (
          <option
            value="wantToRead"
            // onClick={props.setCurrentShelf("wantToRead")}
          >
            ⠀⠀Want to Read
          </option>
        )}

        {shelf.shelf === "read" ? (
          <option
            value="read"
            // onClick={props.setCurrentShelf("none")}
          >
            ✔⠀Read
          </option>
        ) : (
          <option
            value="read"
            // onClick={props.setCurrentShelf("none")}
          >
            ⠀⠀Read
          </option>
        )}

        {shelf.shelf === "none" ? (
          <option
            value="none"
            // onClick={props.setCurrentShelf("none")}
          >
            ✔⠀None
          </option>
        ) : (
          <option
            value="none"
            // onClick={props.setCurrentShelf("none")}
          >
            ⠀⠀None
          </option>
        )}
      </select>
    </div>
  );
};
export default BookShelfChanger;
