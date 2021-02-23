import Body from './component/body.js';
import Tablist from './component/tablist.js';
import {Component} from 'react';
import './App.css';

export class App extends Component {
    // render(){
    //   return(
    //     <div className = "App">
    //       <h1>CS185 RP3</h1>
    //   </div>
    //   );
    // }

    // credit: Jinesh Jhonsa
    constructor(){
      super();
      this.state = {
        active: 1
      }
      this.changetab = (id) => {
        this.setState({
          active: id
        })
      }

      this.scrollFunction = this.scrollFunction.bind(this);
      this.topFunction = this.topFunction.bind(this);
    }

    //Back to top button --- credit: w3schools
    componentDidMount() {
      window.addEventListener('scroll', this.scrollFunction);
    }
  
    componentWillUnmount() {
      window.removeEventListener('scroll', this.scrollFunction);
    }

    // When the user scrolls down a quarter from the top of the document, show the button
    scrollFunction() {
      var mybutton = document.getElementById("myBtn");
      var height = window.innerHeight;
      if (document.body.scrollTop > 0.25*height || document.documentElement.scrollTop > 0.25*height ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }

    // When the user clicks on the button, scroll to the top of the document
    topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      this.scrollFunction();
    }

    
    render(){
      const tabs = [
        {
          id: 1,
          title: 'Text'
        },
        {
          id: 2,
          title: 'Image'
        },
        {
          id: 3,
          title: 'Video'
        },
        {
          id: 4,
          title: 'Table'
        },
        {
          id: 5,
          title: 'Email'
        }
      ];

    return (
        <div className = "App">
            <h1>Welcome to Zora's Website!</h1>
            <div className="nav-bar">
                <Tablist tabs = {tabs} activetab = {this.state.active} ctab={this.changetab}/>
            </div>

            <div className="main-body">
                <Body activetab={this.state.active}/>
            </div>

            <button onClick={this.topFunction} id="myBtn" title="Go to top">Back to Top</button>
        </div>
    );
    }
}

export default App;
