import React, { useState } from "react";
import axios from 'axios';
// import API from "../utils/API";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import SearchForm from "../components/SearchForm";
// import Bookdetail from "../components/Booksdetail";
// import Col from "../components/Col";

function BooksContainer () {

    const[book, setBook] = useState("");
    const[result, setResult] = useState([]);
    const apiKey ="AIzaSyBugwoxoNOHl7gMi37WkI6Bh5_QZh4Ghx4";
    
  
  function handleChange(event) {

    const book = event.target.value;
    setBook(book);
  
  };
   function handleSubmit(event) {
    event.preventDefault();
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey + "&maxResults=20")
      .then(data => {
        setResult(data.data.items)
        console.log(data.data.items)
  
      })
  
  }

  return (

    <div className="container">
      <h4>Google Books</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input onChange={handleChange} className="form-control mt-10" placeholder="Search for Books" autoComplete="off" />
        </div>
        <button type="submit" className="btn btn-danger">Search </button>
      </form>

      {result.map(book => (
        <li key={book.id}>

          <div>
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} />
          <div > Info: {book.volumeInfo.title}</div>
          <div > Authors: {book.volumeInfo.authors}</div>
          <div > Description: {book.volumeInfo.description}</div>
          </div>
             
          </li>
      )

      )}

    </div>
  );
 }

export default BooksContainer