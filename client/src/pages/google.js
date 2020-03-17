import React, { Component } from "react";

import API from "../utils/API";

class MoviesContainer extends Component {
  state = {
    result: {},
    search: ""
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchBooks("Javascript");
  }

  searchBooks = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };
   

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card
              heading={this.state.result.Title || "Search for a Book to Begin"}>

                <BooksDetail
                  title={this.state.result.items.volumeInfo.title}
                  src={this.state.result.items.volumeInfo.imageLinks.smallThumbnail}
                  authors={this.state.result.items.volumeInfo.authors}
                  description={this.state.result.items.volumeInfo.description}
                  info={this.state.result.items.volumeInfo.infoLink}
                />

                <h3>No Results to Display</h3>

            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default OmdbContainer;
