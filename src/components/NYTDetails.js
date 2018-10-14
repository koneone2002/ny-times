import React from "react";

import Container from "./Container";
import Row from "./Row";
import Col from "./Col";

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export const NYTDetails = props => (
  <li className="list-group-item">
    <Container>
      <Row>
        
        <Col size="xs-8 sm-9">
          <h3>{props.headline}</h3>
          <p>
            {props.author}{" "}
            Date: {props.date}
          </p>
          <a
            rel="noreferrer noopener"
            target="_blank"
            href={props.href}
          >{props.href} 
            
          </a>
        </Col>
      </Row>
    </Container>
  </li>
);

export default NYTDetails;