import React from "react";

const Jumbotron = props => (
  <div className={`jumbotron${props.fluid ? "-fluid" : ""}`}>
    {props.children}
    <h1 className="text-center">
        <strong>
          <i className="fa fa-newspaper-o"></i> New York Times Search</strong>
      </h1>
  </div>
);

export default Jumbotron;