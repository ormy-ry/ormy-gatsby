import React from "react";
import Img from "gatsby-image";
import Link from "gatsby-link";
import InfoOutline from "../assets/icons/InfoOutline";

export default props => {
    const boardMembers = props.board.node.data.board
        ? props.board.node.data.board.map(field => <li className="py-1">{field.member}</li>)
        : [];

    const officials = props.board.node.data.officials
        ? props.board.node.data.officials.map(field => <li className="py-1">{field.member}</li>)
        : [];

    const title = `Hallitus ${props.board.node.data.year}`;

    console.log(props.board.node.data.board);
    return (
        <div className="card">
            <div className="lg:hidden">
                <div className="board-container">
                    <Img
                        style={{ borderRadius: "0.25rem .25rem 0 0" }}
                        fluid={props.board.node.data.photo.localFile.childImageSharp.fluid}
                    />
                </div>
                <div className="card-title">{title}</div>
                <div className="card-body">
                    <div className="flex flex-row">
                        {boardMembers.length ? (
                            <div className="mr-8">
                                <span className="font-semibold">Hallituksen jäsenet</span>
                                <ul className="list-reset mt-4">{boardMembers}</ul>
                            </div>
                        ) : null}
                        {officials.length ? (
                            <div>
                                <span className="font-semibold">Toimihenkilöt</span>
                                <ul className="list-reset mt-4">{officials}</ul>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
            <div className="hidden lg:block">
                <div className="board-card rounded">
                    <div className="board-text">
                        <div className="card-title text-grey-lightest" style={{ zIndex: "10" }}>
                            {title}
                        </div>
                        <div className="card-body text-white text-xl max-h-full">
                            <div className="flex flex-row">
                                {boardMembers.length ? (
                                    <div className="mr-8">
                                        <span className="font-semibold">Hallituksen jäsenet</span>
                                        <ul className="list-reset mt-4">{boardMembers}</ul>
                                    </div>
                                ) : null}
                                {officials.length ? (
                                    <div>
                                        <span className="font-semibold">Toimihenkilöt</span>
                                        <ul className="list-reset mt-4">{officials}</ul>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    <Img
                        className="board-pic rounded"
                        fluid={props.board.node.data.photo.localFile.childImageSharp.fluid}
                        style={{ zIndex: "1" }}
                    />
                    <div
                        className="board-info"
                        style={{ position: "absolute", bottom: "1rem", right: "1rem", zIndex: "2", pointerEvents: "none" }}
                    >
                        <div
                            className="board-info-icon text-black h-10"
                            style={{ backgroundColor: "rgba(255,255,255,0.8)", borderRadius: "100%" }}
                        >
                            <InfoOutline />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
