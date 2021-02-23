import React, {Component} from 'react';
import Textdata from './text.js';
import Imagedata from './image.js';
import Videodata from './video.js';
import Tabledata from './table.js';
import Emaildata from './email.js';
import './style.css';

class Body extends Component {
    render() {
        var displaycontent = () => {
            var activetab = this.props.activetab;
            if (activetab == 1) {
                return <Textdata/>
            }else if (activetab == 2){
                return <Imagedata/>
            }else if (activetab == 3){
                return <Videodata/>
            }else if (activetab == 4){
                return <Tabledata/>
            }else if (activetab == 5){
                return <Emaildata/>
            }
        }
        return (displaycontent())
    }
}

export default Body;
