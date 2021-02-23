import React, {Component} from "react";
import IMG_2 from "../images/IMG_2.jpg"
import IMG_3 from "../images/IMG_3.jpg"
import IMG_4 from "../images/IMG_4.jpg"
import IMG_5 from "../images/IMG_5.jpg"
import IMG_6 from "../images/IMG_6.jpg"
import IMG_7 from "../images/IMG_7.jpg"
import IMG_8 from "../images/IMG_8.jpg"
import IMG_9 from "../images/IMG_9.jpg"
import IMG_10 from "../images/IMG_10.jpg"
import IMG_11 from "../images/IMG_11.jpg"
import IMG_12 from "../images/IMG_12.jpg"
import IMG_13 from "../images/IMG_13.jpg"
import IMG_14 from "../images/IMG_14.jpg"
import './style.css';

class Imagedata extends Component{
    constructor() {
        super();
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(event) {
        event.stopPropagation();
    }

    // credit: w3schools
    show(event) {
        var modal = document.getElementById("modal");
        var img = document.getElementById("modal-content");
        
        img.src = event.target.src;
        modal.style.display = "block";
    }

    hide() {
        var modal = document.getElementById("modal");
        modal.style.display = "none";
    }

    render() {
        return (
            <div>
                <div className="content">
                    <h2> My Images </h2>
                    <div className="parent">
                        <div className="child">
                            <img onClick={this.show} src={IMG_2}/>
                        </div>
                        <div className="child">
                            <img onClick={this.show} src={IMG_3}/>
                        </div>
                        <div className="child">
                            <img onClick={this.show} src={IMG_4}/>
                        </div>
                        <div className="child">
                            <img onClick={this.show} src={IMG_5}/>
                        </div>
                        <div className="child">
                            <img onClick={this.show} src={IMG_6}/>
                        </div>
                        <div className="child">
                            <img onClick={this.show} src={IMG_7}/>
                        </div>
                        <div className="child">
                            <img onClick={this.show} src={IMG_8}/>
                        </div>
                        <div className="child">
                            <img onClick={this.show} src={IMG_9}/>
                        </div>
                        <div className="child">
                            <img onClick={this.show} src={IMG_10}/>
                        </div>
                        <div className="child">
                            <img onClick={this.show} src={IMG_11}/>
                        </div>
                        <div className="child">
                            <img onClick={this.show} src={IMG_12}/>
                        </div>
                        <div className="child">
                            <img onClick={this.show} src={IMG_13}/>
                        </div>
                        <div className="child">
                            <img onClick={this.show} src={IMG_14}/>
                        </div>
                    </div>
                </div>

                <div id="modal" className="modal" onClick={this.hide}>
                    <img id="modal-content" className="modal-content" onClick={this.onClickHandler}/>
                </div>
            </div>
        );
    }
}

export default Imagedata;
