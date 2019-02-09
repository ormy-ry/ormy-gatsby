import React from "react";
import Img from "gatsby-image";

export default props => (
    <div className="card">
        <Img fluid={props.fluid} />
        <div className="card-title">{props.title}</div>
        <div className="card-body" dangerouslySetInnerHTML={{ __html: props.body }} />
    </div>
);
