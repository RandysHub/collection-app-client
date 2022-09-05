import BookCard from "./BookCard";

function BookList(props) {

    { console.log(props.books) }

    return (
        <div className="row" >
            {
                // props.books ?
                props.books.map((book, i) => {
                    console.log(props.books)
                    return (
                        <div className="col-sm-3">
                            <BookCard
                                key={i}
                                image={book.volumeInfo.imageLinks.thumbnail}
                                title={book.volumeInfo.title}
                                author={book.volumeInfo.author}
                                published={book.publishedDate} />
                        </div >
                    )
                })
            }
        </div>
    );
}

export default BookList;