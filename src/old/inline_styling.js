import React from "react";
import ReactDOM from "react-dom";
import './index.css';

// var React = require("react");
// var ReactDOM = require("react-dom");

var hello = <h1>Hello World!</h1>
var name = "Ma-aruf";
var year = new Date().getFullYear();
var title = "My Favorite Foods";

// const img = "https://picsum.photo"
// ReactDOM.render(hello, document.getElementById("root"));

var mainBody = <div>
       <h1 className="heading">{title}</h1>
        <div>
            <img src="https://www.popularenlinea.com/Personas/blog/PublishingImages/2020/noviembre/La-burbuja-c%C3%B3mo-la-NBA-super%C3%B3-exitosamente-la-pandemia.jpg"></img>
        </div>
</div>


// Using inline styling in ReactJs
const customColor = {
    color: "red",
    fontSize: "30px"
}

const date = new Date()
const currentTime = date.getHours();
let greeting;

if (currentTime < 12){
    greeting = "Good Morning";
    customColor.color = "red";
} else if(currentTime > 12){
    greeting = "Good Afternoon";
    customColor.color = "green";
} else{
    greeting = "Good Evening";
    customColor.color = "black";
}

ReactDOM.render(
    <div className="container border-danger">
        <h1 className="heading" style={customColor}>{greeting}</h1>
    </div>, 
    document.getElementById("root")
);