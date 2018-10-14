import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Navbarz from './Navbarz';
import './Home.css';
class Home extends Component {
    render() {
        return (
        <div className="Land">
            <navbar>
            <Navbarz />
            </navbar>
            <h1>Enzen - Earth Hack</h1>
            <h3>Enter details To Calculate Cost of Electricity</h3>
            <Link to='/daily'><Button className="Button" color="danger" >Continue</Button></Link>
        </div>
        )
    }
}
export default Home;
