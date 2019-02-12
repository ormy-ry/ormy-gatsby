import React from "react";

export default () => {
    return (
        <div className="fixed pin-t pin-r pin-l pt-20 px-6 hidden md:block">
            <div className="flex justify-center">
                <div className="container flex justify-end">
                    <div className="card shadow-lg" style={{ maxWidth: "40rem" }}>
                        <div className="card-body">
                            <form name="signup" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                                <input type="hidden" name="signup" value="contact" />
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
                                    <button className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded">Tallenna</button>
                                    <button className="underline text-grey-dark py-2 px-4  rounded">Peru</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
