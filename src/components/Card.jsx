import React from "react";

export default props => (
    <div className="card">
        <div className="card-title">
            {props.title}
            {props.subtitle ? <span className="card-subtitle">{props.subtitle}</span> : <span />}
        </div>
        <div className="card-body" dangerouslySetInnerHTML={{ __html: props.body }} />
        <div className="card-footer" />
    </div>
);
