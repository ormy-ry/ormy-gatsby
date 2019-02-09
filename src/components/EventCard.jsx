import React from "react";
import Time from "../assets/icons/Time";
import Compass from "../assets/icons/Compass";

export default props => (
    <div className="card">
        <div className="card-title">
            {props.title}
            {props.subtitle ? <span className="card-subtitle">{props.subtitle}</span> : <span />}
        </div>
        <div className="card-body" dangerouslySetInnerHTML={{ __html: props.body }} />
        <div className="card-footer">
            {props.start ? (
                <span className="tag">
                    {" "}
                    <span className="tag-icon">
                        <Time />
                    </span>{" "}
                    {props.start}
                </span>
            ) : null}
            {props.location ? (
                <span className="tag">
                    {" "}
                    <span className="tag-icon">
                        <Compass />
                    </span>{" "}
                    {props.location}
                </span>
            ) : null}
        </div>
    </div>
);
