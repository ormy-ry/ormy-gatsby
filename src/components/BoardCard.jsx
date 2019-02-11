import React from "react";
import Img from "gatsby-image";
import Link from "gatsby-link";
import InfoOutline from "../assets/icons/InfoOutline";

export default props => (
    <div className="card">
        <div className="lg:hidden">
            <div className="board-container">
                <Img style={{ borderRadius: "0.25rem .25rem 0 0" }} fluid={props.fluid} />
            </div>
            <div className="card-title">{props.title}</div>
            <div className="card-body" dangerouslySetInnerHTML={{ __html: props.body }} />
        </div>
        <div className="hidden lg:block">
            <div className="board-card rounded">
                <div className="board-text">
                    <div className="card-title text-grey-lightest" style={{ zIndex: "10" }}>
                        {props.title}
                    </div>
                    <div className="card-body text-grey-lightest text-xl max-h-full" dangerouslySetInnerHTML={{ __html: props.body }} />
                </div>
                <Img className="board-pic rounded" fluid={props.fluid} style={{ zIndex: "1" }} />
                <div
                    className="board-info h-12"
                    style={{ position: "absolute", bottom: "1rem", right: "1rem", zIndex: "2", pointerEvents: "none" }}
                >
                    <span className="board-info-icon text-black">
                        <InfoOutline />
                    </span>
                </div>
            </div>
        </div>
    </div>
);
