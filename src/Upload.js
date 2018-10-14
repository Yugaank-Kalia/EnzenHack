import React, { Component } from 'react';
import img from "./vidar-nordli-mathisen-596835-unsplash.jpg";
class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <img src={img} alt=""/>
         );
    }
}
 
export default Upload;