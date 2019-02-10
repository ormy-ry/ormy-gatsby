import { Link } from "gatsby";
import React from "react";

export default props => (
    <div className="nav lg:justify-center" id="navbar">
        <div className="hidden container md:inline-block">
            <Link className="nav-link" activeClassName="nav-link--active" to="/">
                etusivu
            </Link>
            <Link className="nav-link" activeClassName="nav-link--active" to="/events">
                tapahtumat
            </Link>
            <Link className="nav-link" activeClassName="nav-link--active" to="/info">
                info
            </Link>
        </div>
        <div className="sm:inline-block md:hidden">
            {props.modal ? null : (
                <button id="nav-menu-btn" className="nav-menu-btn cursor-pointer" onClick={() => props.handleModal()}>
                    MENU
                </button>
            )}
        </div>
    </div>
);
