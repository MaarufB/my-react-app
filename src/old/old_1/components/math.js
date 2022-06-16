// import React from "react";

const pi =  3.1415962;

// How to export multiple things???
function doublePI(){
    return pi * 2;
}

function triplePI(){
    return pi * 3;
}

// When dealing with default export and it can be rename also to
// another module ..
export default pi;

// When dealing with multiple export
export {doublePI, triplePI};