import React from "react";
import { ReactDOM } from "react-dom/client"   


function About(props) {
    return(
       <div>
        <h2>this is {props.About}</h2>
        <h3>I am {props.name}</h3>
       </div>
    );
}
export default About;