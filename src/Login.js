import React, { Component } from 'react';
import {Icon, Input, Button } from 'antd';
import {Link} from 'react-router-dom';
import './Login.css';

let user =[['yugaank', 'kalia'], ['lmao', 'king']]

class Login extends Component{
    constructor(props){
        super(props);
        
        this.state = { username:"Username", password:"Password"};

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange = (e) => {
        if(e.target.value !== ""){
            this.setState({ [e.target.name] : e.target.value })
        }else{
            this.setState({username:"Username", password:"Password"})
        }
    }
    
    render() {
            return (             
            <div className="Login">
                <div className="Img" />
                <div className="Form">
                    <div className="Input-user">
                        <Input prefix={<Icon type="user"/>} name="username" placeholder={this.state.username} onChange={this.handleChange}/>
                    </div>
                    <div className="Input-pass">
                        <Input prefix={<Icon type="lock"/>} name="password" type="Password" placeholder={this.state.password} onChange={this.handleChange}/>
                    </div>
                    <div className="Btn-login">
                        <Link to='/daily'><Button type="primary">Log In<Icon type="login"/></Button><br/><br/></Link>
                    </div>
                    <div className="Social">
                        <p>Support us?</p>
                        <a href="https://plus.google.com/111668859936557264388/posts/XMbHnCQKsjt"><Button shape="circle" type="danger"><Icon type="google-plus" /></Button></a>
                        <a href="https://www.instagram.com/nexttechlab"><Button shape="circle" type="danger"><Icon type="instagram"/></Button></a>
                        <a href="https://www.facebook.com/NextTechSRM/?ref=br_rs"><Button shape="circle"><Icon type="facebook"/></Button></a>
                        <a href="https://github.com/Yugaank-Kalia"><Button shape="circle"><Icon type="github"/></Button></a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login