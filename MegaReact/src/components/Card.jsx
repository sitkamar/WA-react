import React from "react";

function Card(props) {
    return (
        <div class="contactCard">
            <h2>{props.info.name}</h2>
            <img src={props.info.img} alt={props.info.name}/>
			<p>Email: {props.info.email}</p>
            <p>Phone number: {props.info.tel}</p>
        </div>
    );
}

export default Card;