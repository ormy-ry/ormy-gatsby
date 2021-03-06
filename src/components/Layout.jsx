import React, { Component } from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Nav from "./Nav";
import "../styles/index.css";
import Footer from "./Footer";
import NavModal from "./NavModal";
import icon32 from "../images/icon32.jpg";
import EmailModal from "./EmailModal";

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navModal: false,
            emailModal: false,

            emailMobile: false
        };
        this.handleNavModal = this.handleNavModal.bind(this);
        this.handleEmailModal = this.handleEmailModal.bind(this);
        this.handleEmailMobile = this.handleEmailMobile.bind(this);
    }

    handleNavModal() {
        this.setState({ navModal: !this.state.navModal });
    }

    handleEmailModal() {
        this.setState({ emailModal: !this.state.emailModal });
    }

    handleEmailMobile() {
        this.setState({ emailMobile: !this.state.emailMobile });
    }

    componentDidUpdate() {
        this.state.navModal ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "auto");
    }

    render() {
        return (
            <StaticQuery
                query={graphql`
                    query SiteTitleQuery {
                        site {
                            siteMetadata {
                                title
                            }
                        }
                    }
                `}
                render={data => (
                    <>
                        <Helmet link={[{ rel: "icon", type: "image/png", sizes: "32x32", href: `${icon32}` }]} />
                        <Nav
                            handleNavModal={this.handleNavModal}
                            handleEmailModal={this.handleEmailModal}
                            modal={this.state.navModal}
                            siteTitle={data.site.siteMetadata.title}
                        />
                        <div className="main-container">
                            <div className="main-container__content">
                                <main>{this.props.children}</main>
                            </div>
                            <div className="flex-spacer" />
                            <Footer />
                        </div>
                        <EmailModal handleModal={this.handleEmailModal} modal={this.state.emailModal} />
                        <NavModal
                            handleEmailMobile={this.handleEmailMobile}
                            emailMobile={this.state.emailMobile}
                            handleModal={this.handleNavModal}
                            modal={this.state.navModal}
                        />
                    </>
                )}
            />
        );
    }
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
