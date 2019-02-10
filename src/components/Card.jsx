import React, { Component } from "react";

class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collapsed: false
        };

        this.ref = React.createRef();
    }

    componentDidMount() {
        let height = this.ref.current.clientHeight;

        if (height > 600) {
            this.setState({ collapsed: true });
        }
    }

    reveal() {
        this.setState({ collapsed: false });
    }

    render() {
        return (
            <div
                className="card relative"
                ref={this.ref}
                style={{ maxHeight: this.state.collapsed ? "500px" : "", overflow: this.state.collapsed ? "hidden" : "auto" }}
            >
                <div className="card-title">
                    {this.props.title}
                    {this.props.subtitle ? <span className="card-subtitle">{this.props.subtitle}</span> : <span />}
                </div>
                <div className="card-body" dangerouslySetInnerHTML={{ __html: this.props.body }} />
                <div className="card-footer" />
                {this.state.collapsed ? (
                    <div
                        className="absolute pin-r pin-l pin-b flex flex-row items-center justify-center pt-16"
                        style={{ backgroundImage: "linear-gradient(to bottom, transparent, #fdfdfd)" }}
                    >
                        <button
                            style={{ backgroundImage: "linear-gradient(to bottom, transparent, #fdfdfd)" }}
                            className="text-blue-darker px-4 pt-4 pb-3"
                            onClick={() => this.reveal()}
                        >
                            Lue lisää
                        </button>
                    </div>
                ) : null}
            </div>
        );
    }
}

export default Card;
