import React from "react";
import { navigate } from "gatsby-link";

export default props => (
    <table className="w-full table-fixed">
        <thead>
            <tr>
                <th>Tapahtuma</th>
                <th>Aika</th>
                <th>Paikka</th>
            </tr>
        </thead>
        <tbody>
            {props.events.map(event => (
                <EventRow
                    key={event.node.fields.slug}
                    title={event.node.data.title.text}
                    start={props.fullStart ? event.node.data.fullStart : event.node.data.start}
                    location={event.node.data.location}
                    slug={event.node.fields.slug}
                />
            ))}
        </tbody>
    </table>
);

const EventRow = props => (
    <tr className="tr-hover" onClick={() => navigate(`${props.slug}`)}>
        <td>{props.title}</td>
        <td>{props.start}</td>
        <td>{props.location}</td>
    </tr>
);
