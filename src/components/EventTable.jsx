import React from "react";
import { navigate } from "gatsby-link";

import Time from "../assets/icons/Time";
import Compass from "../assets/icons/Compass";

export default props => (
    <div>
        <div className="mobile-only">
            <table className="w-full table-fixed">
                <thead>
                    <tr>
                        <td />
                    </tr>
                </thead>
                <tbody>
                    {props.events
                        ? props.events.map(event => (
                              <EventRowMobile
                                  key={event.node.fields.slug}
                                  title={event.node.data.title.text}
                                  start={props.fullStart ? event.node.data.fullStart : event.node.data.start}
                                  location={event.node.data.location}
                                  slug={event.node.fields.slug}
                              />
                          ))
                        : null}
                </tbody>
            </table>
        </div>
        <div className="desktop-only">
            <table className="w-full table-fixed">
                <thead>
                    <tr>
                        <th>Tapahtuma</th>
                        <th>Aika</th>
                        <th>Paikka</th>
                    </tr>
                </thead>
                <tbody>
                    {props.events
                        ? props.events.map(event => (
                              <EventRow
                                  key={event.node.fields.slug}
                                  title={event.node.data.title.text}
                                  start={props.fullStart ? event.node.fields.datetimeFull : event.node.fields.datetime}
                                  location={event.node.data.location}
                                  slug={event.node.fields.slug}
                              />
                          ))
                        : null}
                </tbody>
            </table>
        </div>
    </div>
);

const EventRow = props => (
    <tr className="tr-hover" onClick={() => navigate(`${props.slug}`)}>
        <td className="px-1">{props.title}</td>
        <td className="px-1">{props.start}</td>
        <td className="px-1">{props.location}</td>
    </tr>
);

const EventRowMobile = props => (
    <tr className="tr-hover" onClick={() => navigate(`${props.slug}`)}>
        <td>
            <ul className="list-reset">
                <li className=" my-1 font-semibold">{props.title}</li>
                <li className="flex flex-row items-center my-1">
                    <div className="h-5 mx-1">
                        <Time />
                    </div>
                    {props.start ? props.start : <span />}
                </li>
                <li className="flex flex-row items-center my-1">
                    <div className="h-5 mx-1">
                        <Compass />
                    </div>
                    {props.location ? props.location : <span />}
                </li>
            </ul>
        </td>
    </tr>
);
