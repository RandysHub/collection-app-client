import { useState } from "react";
import Search from "./Search";
import axios from "axios";
import BookList from "./BookList";
// import BookCard from './BookCard';
function Books(props) {
  return (
    <div className="container-fluid mx-3">
      <BookList books={props.books} />
    </div>
  );
}

export default Books;
