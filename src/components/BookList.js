import BookCard from "./BookCard";

function BookList(props) {
  {
    console.log(props.books);
  }

  return (
    <div className="row gx-6 align-item-center">
      {
        // props.books ?
        props.books.map((book, i) => {
          console.log(props.books);
          return (
            <div className="col-2 ">
              <BookCard
                key={i}
                id={book.id}
                image={book.volumeInfo.imageLinks.thumbnail}
                title={book.volumeInfo.title}
                author={book.volumeInfo.author}
              />
            </div>
          );
        })
      }
    </div>
  );
}

export default BookList;
