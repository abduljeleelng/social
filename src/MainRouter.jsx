import React, { Component } from 'react';
import {  BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from './screen';
import PrivateRoute from './api/PrivateRoute';


export default class MainRouter extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>  
                        <PrivateRoute exact path="/" component={Home}  />
                        <Route exact path="/Home" component={Home} />
                    </Switch>
                </BrowserRouter>
                
            </div>
        
        )
    }
}
