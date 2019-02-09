import React from "react";
import Img from "gatsby-image";
import Link from "gatsby-link";

export default props => (
    <div className="card">
        <Img fluid={props.fluid} />
        <div className="card-title">{props.title}</div>
        <div className="card-body" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.linkToBoards ? (
            <div className="card-footer flex flex-row justify-end font-bold">
                <Link to="/boards">Edellisvuosien hallitukset</Link>
            </div>
        ) : null}
    </div>
);
