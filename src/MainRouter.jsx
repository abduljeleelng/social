import React, { Component } from 'react';
import {  BrowserRouter, Route, Switch} from "react-router-dom";
import {SignUp,Chat,Friend,Home,Image,People,Video} from './screen';
import PrivateRoute from './screen/auth/PrivateRoute';


export default class MainRouter extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>  
                        <PrivateRoute exact path="/" component={Home}  />
                        <PrivateRoute exact path="/chat" component={Chat}  />
                        <PrivateRoute exact path="/friend" component={Friend}  />
                        <PrivateRoute exact path="/images" component={Image}  />
                        <PrivateRoute exact path="/people" component={People}  />
                        <PrivateRoute exact path="/video" component={Video}  />
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/bm" component={SignUp} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
