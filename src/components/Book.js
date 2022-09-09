import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import React from "react";
import { getBook } from "../services/book-api";
import BookList from "./BookList";
import { deleteBook } from "../services/book-api";

function Book() {
  const nav = useNavigate();
  const { id } = useParams();
  const [book, setBook] = useState("");

  useEffect(() => {
    getBook(id).then((res) => setBook(res.data));
    console.log(book);
  }, []);

  async function updateLibrary(event) {
    event.preventDefault();

    const req = await fetch("http://localhost:3001/api/library", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        library: book,
      }),
    });

    nav("/dashboard");
  }

  async function deleteFromLibrary(event) {
    event.preventDefault();
    const req = await fetch(`http://localhost:3001/api/library/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        library: book,
      }),
    });

    nav("/dashboard");
  }

  {
    console.log(book);
  }

  return (
    <div>
      {book && <h2>{book.volumeInfo.title}</h2>}
      {book && <img src={book.volumeInfo.imageLinks.medium} alt="oops" />}
      {book && <h3>{book.volumeInfo.authors}</h3>}
      {book && <p>{book.volumeInfo.description}</p>}

      <form onSubmit={updateLibrary}>
        <input className="btn btn-dark" type="submit" value="Add" />
      </form>

      <form onSubmit={deleteFromLibrary}>
        <input className="btn btn-dark" type="submit" value="Delete" />
      </form>
    </div>
  );
}

export default Book;
