import React from "react";
import { navigate } from "gatsby";

import Home from "../assets/icons/Home";
import Calendar from "../assets/icons/Calendar";
import Info from "../assets/icons/Info";
import Close from "../assets/icons/Close";
import Mail from "../assets/icons/Mail";
import EmailForm from "./EmailForm";

export default props => (
    <div>
        {props.modal ? (
            <div
                className="flex flex-col fixed pin-t pin-b pin-r pin-l"
                style={{ zIndex: "50", opacity: "0.98", backgroundColor: "#212121" }}
            >
                <div className="h-32 cursor-pointer" onClick={() => props.handleModal()}>
                    <div className="h-16 p-4 text-grey">
                        <Close />
                    </div>
                </div>
                <div className="flex flex-row w-full pb-8" onClick={() => props.handleModal()}>
                    <div style={{ flex: "0 0 33.33%" }}>
                        <div
                            style={{ maxWidth: "6rem" }}
                            className="flex flex-col m-auto items-center justify-between p-4 text-grey-lightest cursor-pointer"
                            onClick={() => navigate("/")}
                        >
                            <Home />
                            <span className="uppercase font-semibold pt-2">etusivu</span>
                        </div>
                    </div>
                    <div style={{ flex: "0 0 33.33%" }}>
                        <div
                            style={{ maxWidth: "6rem" }}
                            className="flex flex-col m-auto items-center justify-between p-4 text-grey-lightest cursor-pointer"
                            onClick={() => navigate("/events")}
                        >
                            <Calendar />
                            <span className="uppercase font-semibold pt-2">tapahtumat</span>
                        </div>
                    </div>
                    <div style={{ flex: "0 0 33.33%" }}>
                        <div
                            style={{ maxWidth: "6rem" }}
                            className="flex flex-col m-auto items-center justify-between p-4 text-grey-lightest cursor-pointer"
                            onClick={() => navigate("/info")}
                        >
                            <Info />
                            <span className="uppercase font-semibold pt-2">info & jäsenyys</span>
                        </div>
                    </div>
                </div>
                {!props.emailMobile ? (
                    <div className="flex flex-row justify-center items-center">
                        <div
                            style={{ maxWidth: "6rem" }}
                            className="flex flex-col m-auto items-center justify-between p-4 text-grey-lightest cursor-pointer"
                            onClick={() => props.handleEmailMobile()}
                        >
                            <Mail />
                            <span className="uppercase font-semibold pt-2">sähköpostilista</span>
                        </div>
                    </div>
                ) : null}
                {props.emailMobile ? (
                    <div className="m-16 mx-auto w-full" style={{ maxWidth: "20rem" }}>
                        <EmailForm dark={true} handleCancel={props.handleEmailMobile} />
                    </div>
                ) : null}
            </div>
        ) : null}
    </div>
);
