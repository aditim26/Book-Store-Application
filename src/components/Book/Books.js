import React, { useEffect, useState} from 'react';
import axios from 'axios';
import Book from './Book';
import "./Book.css";

const URL = "http://localhost:5000/books"

const fechHandler = async()=>{
    return await axios.get(URL).then((res)=> res.data)
}
export const Books = () => {
    const [books, setBooks] = useState();
    useEffect(() => {
        fechHandler().then(data=>setBooks(data.books))
    },[]) 
    console.log(books);
  return (
    <div>
    <ul>
      {books && books.map((book,i)=>{
        return (<li className='book' key={i}>
          <Book book={book} />
        </li>)
      })}
    </ul>
    </div>
  )
}

export default Books;