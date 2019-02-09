import React from "react";
import Home from "../assets/icons/Home";
import Calendar from "../assets/icons/Calendar";
import Info from "../assets/icons/Info";
import Close from "../assets/icons/Close";

import { navigate } from "gatsby";

export default props => (
    <div>
        {props.modal ? (
            <div onClick={() => props.handleModal()} className="nav-modal">
                <div className="grid-modal">
                    <div style={{ gridArea: "exit" }}>
                        <div className="text-white h-16 cursor-pointer" style={{ opacity: "0.4" }}>
                            <Close />
                        </div>
                    </div>
                    <div
                        style={{ gridArea: "home" }}
                        className="flex flex-col items-center justify-middle cursor-pointer"
                        onClick={() => navigate("/")}
                    >
                        <div className="text-grey-lightest h-24 nav-modal-icon--home">
                            <Home />
                        </div>
                        <div className="text-grey-lightest text-2xl uppercase font-bold mt-4">
                            <span>Etusivu</span>
                        </div>
                    </div>
                    <div
                        style={{ gridArea: "events" }}
                        className="flex flex-col items-center justify-middle cursor-pointer"
                        onClick={() => navigate("/events")}
                    >
                        <div>
                            <div className="text-grey-lightest h-24 nav-modal-icon--events">
                                <Calendar />
                            </div>
                        </div>
                        <div className="text-grey-lightest text-2xl uppercase font-bold mt-4">
                            <span>Tapahtumat</span>
                        </div>
                    </div>
                    <div
                        style={{ gridArea: "info" }}
                        className="flex flex-col items-center justify-middle cursor-pointer"
                        onClick={() => navigate("/info")}
                    >
                        <div>
                            <div className="text-grey-lightest h-24 nav-modal-icon--info">
                                <Info />
                            </div>
                        </div>
                        <div className="text-grey-lightest text-2xl uppercase font-bold mt-4">
                            <span>Info</span>
                        </div>
                    </div>
                </div>
            </div>
        ) : null}
    </div>
);
