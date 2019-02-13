import { Link } from "gatsby";
import React from "react";

import Home from "../assets/icons/Home";
import Calendar from "../assets/icons/Calendar";
import Info from "../assets/icons/Info";
import Mail from "../assets/icons/Mail";

export default props => (
    <div className="nav md:justify-center" id="navbar">
        <div className="hidden container md:inline-block h-full">
            <Link className="nav-link h-full inline-block" activeClassName="nav-link--active" to="/">
                <span className="inline-flex flex-row items-center h-full">
                    <div className="h-6 mx-1 nav-icon" style={{ opacity: "0.7" }}>
                        <Home />
                    </div>
                    etusivu
                </span>
            </Link>
            <Link className="nav-link h-full inline-block" activeClassName="nav-link--active" to="/events/">
                <span className="inline-flex flex-row items-center h-full">
                    <div className="h-6 mx-1 nav-icon" style={{ opacity: "0.7" }}>
                        <Calendar />
                    </div>
                    tapahtumat
                </span>
            </Link>
            <Link className="nav-link h-full inline-block" activeClassName="nav-link--active" to="/info/">
                <span className="inline-flex flex-row items-center h-full">
                    <div className="h-6 mx-1 nav-icon" style={{ opacity: "0.7" }}>
                        <Info />
                    </div>
                    info & jäsenyys
                </span>
            </Link>
            <button className="nav-link h-full inline-block float-right" onClick={() => props.handleEmailModal()}>
                <span className="inline-flex flex-row items-center h-full">
                    <div className="h-6 mx-1 nav-icon" style={{ opacity: "0.7" }}>
                        <Mail />
                    </div>
                    sähköpostilista
                </span>
            </button>
        </div>
        <div className="sm:inline-block md:hidden">
            {props.modal ? null : (
                <button id="nav-menu-btn" className="nav-menu-btn cursor-pointer" onClick={() => props.handleNavModal()}>
                    MENU
                </button>
            )}
        </div>
    </div>
);
