import React from "react";

const Footer = props => (
  <div className={`footer${props.fluid ? "-fluid" : ""}`}>
    {props.children}
   

    <div className="row">
      <div className="col-sm-12">

        
        
        <h5 className="text-center">
          <small>Made with lots and lots of {" "}
            <i className="fa fa-heart"></i>
          </small>
        </h5>

      </div>
    </div>
    </div>

 

);

export default Footer;