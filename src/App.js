import React, { Component } from 'react';
import { HashRouter,Switch,Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Chart from './Chart';
import Month from './Month';
import './App.css';

class App extends Component {
    render() {
        return (
                <div className="App">
                <HashRouter>
                <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/daily" exact component={Chart}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/monthly" exact component={Month}/>
                </Switch>
                </HashRouter>
                </div>
                );
    }
}

export default App;
