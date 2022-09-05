import { useState } from 'react'
import Search from "./Search";
import axios from 'axios';
import BookList from './BookList';
// import BookCard from './BookCard';
function Books() {

    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [sort, setSort] = useState('');
    const [data, setData] = useState('');


    const doSearch = async (event) => {
        event.preventDefault()
        setLoading(true)
        console.log(search)
        const URL = `https://www.googleapis.com/books/v1/volumes?q=${search}`
        const response = await axios.get(URL)
        setBooks(response.data.items)
        setLoading(false)

    };


    const handleSort = (e) => {
        console.log(e.target.value)
        setSort(e.target.value)
    }


    const handleSearch = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }

    const sortedBooks = books.sort((a, b) => {
        if (sort === 'Newest') {
            return parseInt(b.volumeInfo.publishedDate.substring(0, 4)) - parseInt(a.volumeInfo.publishedDate.substring(0, 4))
        }
        else if (sort === 'Oldest') {
            return parseInt(a.volumeInfo.publishedDate.substring(0, 4)) - parseInt(b.volumeInfo.publishedDate.substring(0, 4))
        }
    })

    return (

        <div className='container'>
            <Search handleSort={handleSort} doSearch={doSearch} handleSearch={handleSearch} />
            <BookList books={sortedBooks} />
        </div>
    );
}

export default Books;