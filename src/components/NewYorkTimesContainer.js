import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import NYTDetail from "./NYTDetail";
import API from "../utils/API";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";
import { NYTDetails } from "./NYTDetails";

class NewYorkTimesContainer extends Component {
  state = {
    result: [],
    search: "",
    
  };

  // componentWillMount() {

  //   this.searchNYT();
  // }

  searchNYT = (query, startYear, endYear, numArticles)  => {
    API.search(query)
      // .then(res => res.data.response.docs.slice(0, numArticles ? numArticles : 5 )) 
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
      
      
  };
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // let queryParams = document.querySelector ("#search-term").value;
    let startYear = document.querySelector ("#start-year").value;
    let endYear = document.querySelector ("#end-year").value;
    let numArticles = document.querySelector ("#article-count").value;
    // if(parseInt(startYear )) {
    //   queryParams.begin_date = startYear;
    // }
    // if(parseInt(endYear)) {
    //   queryParams.end_date = endYear;
    // }
    
    event.preventDefault();
    this.searchNYT(this.state.search, startYear, endYear);
    
  };

  render() {
    return (
      <div>
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
            
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
              
              <Footer />
            </Col>
          
          <Col size="md-12">
            {/* <Card 
              heading={this.state.result.Title}
            > */}
             
              <NYTDetail>
                {this.state.result.response ? (
                  this.state.result.response.docs.map(result => {
                    return (
                      <NYTDetails
                      key={result.headline.main}
                      headline={result.headline.main}
                      href={result.web_url}
                      author={result.byline.original}
                      date={result.pub_date}
                      />
                    );
                  })
                ) : (<h3>Please enter a search subject</h3>)}
                
              
            </NYTDetail>

              
            {/* </Card> */}
          </Col>
         
        </Row>
            
       
          
      </Container>
      </div>
    );
  }
}

export default NewYorkTimesContainer;
