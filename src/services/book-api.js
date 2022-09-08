import axios from "axios";

export const getBooks = () => {
    const baseURL = 'https://www.googleapis.com/books/v1/volumes?q='
}

export const getBook = (id) =>{
    const URL = `https://www.googleapis.com/books/v1/volumes/${id}`
    const response = axios.get(URL)
    return response
}
export const deleteBook = (id) => {
    const URL = `https://localhost:3001/api/library/${id}`
    const response = axios.put(URL)
    return response
}