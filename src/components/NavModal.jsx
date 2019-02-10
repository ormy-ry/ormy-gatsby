import React from "react";
import Home from "../assets/icons/Home";
import Calendar from "../assets/icons/Calendar";
import Info from "../assets/icons/Info";
import Close from "../assets/icons/Close";
import { navigate } from "gatsby";
import Link from "gatsby-link";

export default props => (
    <div>
        {props.modal ? (
            <div
                style={{ zIndex: "50", opacity: "0.98", backgroundColor: "#212121" }}
                className="fixed pin-t pin-b pin-r pin-l"
                onClick={() => props.handleModal()}
            >
                <div className="flex flex-row flex-no-wrap p-8 ">
                    <div
                        style={{ flexBasis: "0", flexGrow: "1", flexShrink: "1" }}
                        className="m-8 text-grey-lightest cursor-pointer"
                        onClick={() => navigate("/")}
                    >
                        <div className="flex flex-col items-center">
                            <div className="p-8">
                                <Home />
                            </div>
                            <span className="uppercase text-l font-semibold">Etusivu</span>
                        </div>
                    </div>
                    <div
                        style={{ flexBasis: "0", flexGrow: "1", flexShrink: "1" }}
                        className="m-8 text-grey-lightest cursor-pointer"
                        onClick={() => navigate("/events")}
                    >
                        <div className="flex flex-col items-center">
                            <div className="p-8">
                                <Calendar />
                            </div>
                            <span className="uppercase text-l font-semibold">Tapahtumat</span>
                        </div>
                    </div>
                    <div
                        style={{ flexBasis: "0", flexGrow: "1", flexShrink: "1" }}
                        className="m-8 text-grey-lightest cursor-pointer"
                        onClick={() => navigate("/info")}
                    >
                        <div className="flex flex-col items-center">
                            <div className="p-8">
                                <Info />
                            </div>
                            <span className="uppercase text-l font-semibold">Info</span>
                        </div>
                    </div>
                </div>
            </div>
        ) : null}
    </div>
);
