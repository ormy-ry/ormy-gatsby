import React from "react";

export default props => {
    let style = props.dark ? { color: "#F1F5F8" } : { color: "#3D4852" };
    return (
        <form name="signup" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="signup" />
            <div className="mb-4">
                <label style={style} className="block text-grey-dark text-sm font-bold mb-2">
                    Nimi
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                    id="Name"
                    type="name"
                />
            </div>
            <div className="mb-4">
                <label style={style} className="block text-grey-dark text-sm font-bold mb-2">
                    Sähköpostiosoite
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                    id="Email"
                    type="email"
                />
            </div>
            <div className="mb-6">
                <label style={style} class=" block text-grey-dark font-bold">
                    <input name="Agreement" class="mr-2 leading-tight" type="checkbox" />
                    <span class="text-sm">
                        Ymmärrän, että ÖRMY:n sähköpostilista on rekisteri, joka sisältää henkilötietojani eli etu- ja sukunimeni sekä
                        sähköpostiosoitteeni.
                    </span>
                </label>
            </div>
            <div>
                <button className="bg-grey-darkest hover:bg-black text-white font-bold py-2 px-4 rounded">Tallenna</button>
                <button type="button" className="underline text-grey-dark py-2 px-4" onClick={() => props.handleCancel()}>
                    Peru
                </button>
            </div>
        </form>
    );
};
