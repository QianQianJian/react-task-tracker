import React, {Component} from "react";
import IMG_7 from "../videos/IMG_7.MOV"
import IMG_8 from "../videos/IMG_8.MOV"
import IMG_9 from "../videos/IMG_9.MOV"
import IMG_14 from "../videos/IMG_14.MOV"
import IMG_15 from "../videos/IMG_15.MOV"

import './style.css';

class Videodata extends Component{
    constructor() {
        super();
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(event) {
        event.stopPropagation();
    }

    //credit: w3schools
    show(event) {
        var modal = document.getElementById("modal");
        var video = document.getElementById("modal-content");
        
        video.src = event.target.src;
        video.type = event.target.type;
        modal.style.display = "block";
        video.play();
    }

    hide() {
        var modal = document.getElementById("modal");
        var video = document.getElementById("modal-content");
        
        modal.style.display = "none";
        video.pause();
    }

    render() {
        return (
            <div>
                <div className="content">
                    <h2> My Videos </h2>
                    <div className="parent">
                        <div className="child">
                            <video onClick={this.show} src={IMG_7} type="video/mp4"></video>
                        </div>
                        <div className="child">
                            <video onClick={this.show} src={IMG_8} type="video/mp4"></video>
                        </div>
                        <div className="child">
                            <video onClick={this.show} src={IMG_9} type="video/mp4"></video>
                        </div>
                        <div className="child">
                            <video onClick={this.show} src={IMG_14} type="video/mp4"></video>
                        </div>
                        <div className="child">
                            <video onClick={this.show} src={IMG_15} type="video/mp4"></video>
                        </div>
                    </div>
                </div>

                <div id="modal" className="modal" onClick={this.hide}>
                    <video id="modal-content" className="modal-content" onClick={this.onClickHandler} controls></video>
                </div>
            </div>
        );
    }
}

export default Videodata;
