import React, { Component, useState } from "react";
import axios from 'axios';
import API from "../utils/API";
import Container from "../components/Container";
import Row from "../components/Row";
import SearchForm from "../components/SearchForm";
import Bookdetail from "../components/Booksdetail";
import Col from "../components/Col";

function BookContainer() {
const [book,setBook] = useState("");
const [result,setResult] = useState([]);
const [apiKey,setApiKey] = useState("AIzaSyBugwoxoNOHl7gMi37WkI6Bh5_QZh4Ghx4");

  function handleChange(event){

    const book = event.target.value;
    setBook(book);

  }

  function handleSubmit (event) {
    event.preventDefault();
    console.log(book)
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
      </div> 

    );
  

}

export default BookContainer



// export default BooksContainer;
// class BooksContainer extends Component {
//   state = {
//     result: {},
//     search: ""
//   };

//   // When this component mounts, search for the movie "The Matrix"
//   componentDidMount() {
//     this.searchBooks("Javascript");
//   }

//   searchBooks = query => {
//     API.search(query)
//       .then(res => this.setState({ result: res.data }))
//       .catch(err => console.log(err));
//   };

//   handleInputChange = event => {
//     const value = event.target.value;
//     const name = event.target.name;
//     this.setState({
//       [name]: value
//     });
//   };


//   // When the form is submitted, search the OMDB API for the value of `this.state.search`
//   handleFormSubmit = event => {
//     event.preventDefault();
//     this.searchBooks(this.state.search);
//   };


{/* <Container>
        <Row>
                    <SearchForm
                      value= {this.state.search}
                      handleInputChange={this.state.handleInputChange}
                      handleFormSubmit={this.state.searchEmployees}
                    />
          <Col size="md-8">
            
                <Bookdetail
                  title={this.state.result.items.volumeInfo.title}
                  src={this.state.result.items.volumeInfo.imageLinks.smallThumbnail}
                  authors={this.state.result.items.volumeInfo.authors}
                  description={this.state.result.items.volumeInfo.description}
                  info={this.state.result.items.volumeInfo.infoLink}
                />
          </Col>
          <Col size="md-4">
             heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
          </Col>
        </Row>
      </Container>
    ); */}