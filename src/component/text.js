import React, {Component} from "react";
import './style.css';
import IMG_110 from "./IMG_110.jpg"

class Textdata extends Component{
    render(){
        return (
            <div>
                <body>
                    <h1> About Me </h1>
                    <img src={IMG_110} style={{width: "250px",height: '300px',border: '5px',margin: '10px',float: 'left' }}/>
                    <div className="intro">  
                    Hello! My name is Zora. I was born in Anhui, China. And at the age of 16, I went abroad for study. 
                    In 2018, I was accepted in UCSB and became a college student. Because of COVID-19, I stay in Suzhou and take
                    my online classes. This is the webpage I made for CS 185. It shows who I am and what I am interested in. 
                    Image and Video tabs display some of the happy moments in my life. Table tab shows what projects I have done.
                    Hope you will enjoy it!
                    </div>
                </body>
            </div>
        )
    };
}
export default Textdata;