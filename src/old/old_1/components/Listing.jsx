import React from "react"
// pi_change_name is from pi from math.js module
import pi_change_name from "./math.js";
import {doublePI, triplePI} from "./math.js";

function Listing(){
    return (
    <ul>
        <li>{pi_change_name}</li>
        <li>{doublePI()}</li>
        <li>{triplePI()}</li>
        <li>Bacon</li>
        <li>Jamon</li>
        <li>Noodles</li>
    </ul>
    )
}

export default Listing;