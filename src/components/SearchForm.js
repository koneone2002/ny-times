import React from "react";

const SearchForm = props => (
  // <form>
  //   <div className="form-group">
  //     <label htmlFor="search">Search:</label>
  //     <input
  //       onChange={props.handleInputChange}
  //       value={props.value}
  //       name="search"
  //       type="text"
  //       className="form-control"
  //       placeholder="Search For An Article"
  //       id="search-term"
  //     />
  //     <br />
     
  //   </div>
  // </form>
  <div className="card">
          <div className="card-header">
            <strong>
              <i className="fa fa-list-alt"></i> Search Parameters</strong>
          </div>
          <div className="card-body">
      <form>

  
      <div className="form-group">
      <label htmlFor="search">Search:</label>
        <input 
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text" 
          className="form-control"
          placeholder="Search For An Article" 
          id="search-term" />
      </div>

  
    <div className="form-group">
    <label htmlFor="pwd">Number of Records to Retrieve:</label>
    <input id="article-count" className="form-control" type="text" placeholder="5"  />
      
    
  </div>

  
    <label htmlFor="start-year">Start Year (Optional):</label>
    <input type="text" className="form-control" id="start-year" />
 

  
  <div className="form-group">
    <label htmlFor="end-year">End Year (Optional):</label>
    <input type="text" className="form-control" id="end-year" />
  </div>

  
  <button type="button" className="btn btn-outline-primary my-2 my-sm-0" id="run-search" onClick={props.handleFormSubmit}>
    <i className="fa fa-search"></i> Search</button>
  <button className="btn btn-outline-success my-2 my-sm-0" id="clear-all">
    <i className="fa fa-trash"></i> Clear Results</button>

</form>
</div>
</div>
  
);

export default SearchForm;
