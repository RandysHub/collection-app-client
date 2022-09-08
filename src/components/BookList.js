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
                                id={book.id}
                                image={book.volumeInfo.imageLinks.smallThumbnail}
                                title={book.volumeInfo.title}
                                author={book.volumeInfo.author} />
                        </div >
                    )
                })
            }
        </div>
    );
}

export default BookList;