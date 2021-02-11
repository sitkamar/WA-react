import React from "react";
import Card from "./Card";
const contactArray = require("./../Utils/contact.json");

function loading() {
    const contact = new Array(contactArray.contacts.length);
    for (let i = 0; i < contactArray.contacts.length; i++) {
        contact[i] = <Card info={contactArray[i]} />;
    }
    return contact;
}

function Contacts() {
    return (
        <div>
            <h1>Contacts</h1>
            {loading()}
        </div>
    );
}

export default Contacts;