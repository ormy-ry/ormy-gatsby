import React from "react";
import EmailForm from "./EmailForm";

export default props => {
    if (props.modal) {
        return (
            <div className="fixed pin-t pin-r pin-l pt-20 px-6 hidden md:block pointer-events-none" style={{ zIndex: "20" }}>
                <div className="flex justify-center">
                    <div className="container relative flex justify-end">
                        <div className="arrow-up absolute pin-r" style={{ right: "6rem", top: "-0.7rem" }} />
                        <div className="card shadow-lg" style={{ maxWidth: "40rem" }}>
                            <div className="card-body pointer-events-auto">
                                <EmailForm dark={false} handleCancel={props.handleModal} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
};
