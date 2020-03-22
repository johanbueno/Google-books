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