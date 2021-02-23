import React from "react";
import {Component} from 'react';
import './style.css';

class Emaildata extends Component{
    submit(){
        var email = document.getElementById("email").value;
        var content = document.getElementById("content");
        
        if (email.indexOf('.com')>-1 && email.indexOf('@') > -1){
            content.innerHTML = "<h2> Email successfully recorded </h2>";
        } else if (email.indexOf('.edu')>-1 && email.indexOf('@') > -1){
            content.innerHTML = "<h2> Email successfully recorded </h2>";
        } else {
            content.innerHTML = "<h2> Invalid email address </h2>";
        }
    }

    render(){
        return (
            <body>
                <h1> Contact Me </h1>
    
                <h2> Email: </h2> 
                <input id = "email" type = "text"/> 
                <p id = "content"> </p>
                <button onClick = {this.submit}> Submit </button>    
            </body>
        
        )
    }
}
export default Emaildata;