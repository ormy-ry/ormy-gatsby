import React, { Component } from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Nav from "./Nav";
import "../styles/index.css";
import Footer from "./Footer";
import NavModal from "./NavModal";

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        this.handleModal = this.handleModal.bind(this);
    }

    handleModal() {
        this.setState({ modal: !this.state.modal });
        console.log(this.state.modal);
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
                        <Nav handleModal={this.handleModal} siteTitle={data.site.siteMetadata.title} />
                        <div id="main-container">
                            <main>{this.props.children}</main>
                            <Footer />
                        </div>
                        <NavModal handleModal={this.handleModal} modal={this.state.modal} />
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
