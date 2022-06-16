import React from "react"

function Heading(){
    const customStyle = {
        color: "red",
        fontSize: "30px"
    }
    
    const date = new Date()
    const currentTime = date.getHours();
    let greeting;
    
    if (currentTime < 12){
        greeting = "Good Morning";
        customStyle.color = "red";
    } else if(currentTime > 12){
        greeting = "Good Afternoon";
        customStyle.color = "green";
    } else{
        greeting = "Good Evening";
        customStyle.color = "black";
    }
    
    return <h1 className="heading" style={customStyle}>{greeting}</h1>

}

export default Heading;