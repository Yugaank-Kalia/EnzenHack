import React, { Component } from 'react';
import { Button } from 'reactstrap';
import {Link} from 'react-router-dom';
import './Navbarz.css';
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Link to='/login'><Button className="Btn" color="danger" >Login</Button></Link>
            </div>
         );
    }
}
 
export default Navbar;