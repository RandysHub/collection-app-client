import React from "react";
import "./App.css";
import Header from "./components/Header";
import Books from "./components/Books";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./components/Register";
import LogIn from "./components/LogIn";
import Dashboard from "./components/Dashboard";
import Book from "./components/Book";
import Search from "./components/Search";
import { useState } from "react";
import axios from "axios";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [sort, setSort] = useState("");

  // const [URL, setURL] = useState("");
  let URL = `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=30`;
  const doSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    console.log(search);
    // setURL(`https://www.googleapis.com/books/v1/volumes?q=${search}`);
    const response = await axios.get(URL);
    setBooks(response.data.items);
    setLoading(false);
  };

  const handleSort = (e) => {
    console.log(e.target.value);
    setSort(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const sortedBooks = books.sort((a, b) => {
    if (sort === "Newest") {
      return (
        parseInt(b.volumeInfo.publishedDate.substring(0, 4)) -
        parseInt(a.volumeInfo.publishedDate.substring(0, 4))
      );
    } else if (sort === "Oldest") {
      return (
        parseInt(a.volumeInfo.publishedDate.substring(0, 4)) -
        parseInt(b.volumeInfo.publishedDate.substring(0, 4))
      );
    }
  });

  return (
    <div className="app">
      <Search
        handleSort={handleSort}
        doSearch={doSearch}
        handleSearch={handleSearch}
      />
      <BookList books={sortedBooks} />
      <Router>
        <Routes>
          <Route path="/books/:id" element={<Book />} />
          {/* <Route path="/books" element={<BookList books={sortedBooks} />} /> */}
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
