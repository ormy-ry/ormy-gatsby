import React from "react";

export default props => {
    if (props.modal) {
        return (
            <div className="fixed pin-t pin-r pin-l pt-20 px-6 hidden md:block pointer-events-none" style={{ zIndex: "20" }}>
                <div className="flex justify-center">
                    <div className="container flex justify-end">
                        <div className="card shadow-lg" style={{ maxWidth: "40rem" }}>
                            <div className="card-body pointer-events-auto">
                                <form name="signup" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                                    <input type="hidden" name="form-name" value="signup" />
                                    <div class="mb-4">
                                        <label class="block text-grey-darker text-sm font-bold mb-2">Nimi</label>
                                        <input
                                            class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                                            id="Sähköpostiosoite"
                                            type="name"
                                        />
                                    </div>
                                    <div class="mb-6">
                                        <label class="block text-grey-darker text-sm font-bold mb-2">Sähköpostiosoite</label>
                                        <input
                                            class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                                            id="Sähköpostiosoite"
                                            type="email"
                                        />
                                    </div>
                                    <div>
                                        <button className="bg-grey-darkest hover:bg-black text-white font-bold py-2 px-4 rounded">
                                            Tallenna
                                        </button>
                                        <button
                                            type="button"
                                            className="underline text-grey-dark py-2 px-4"
                                            onClick={() => props.handleModal()}
                                        >
                                            Peru
                                        </button>
                                    </div>
                                </form>
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
