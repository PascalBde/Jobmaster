import React from 'react';
import ReactDOM from 'react-dom';
import {Route} from "react-router";
import {BrowserRouter} from "react-router-dom";

import App from './App';
import Start from "./components/Start";
import UserDataForm from "./components/UserDataForm";
import TabControl from "./components/TabControl";


ReactDOM.render((
    <BrowserRouter >
        <Route exact={true} path={"/"} component={App} />
        <Route path={"/start"} component={Start} />
        <Route path={"/userprofile"} component={UserDataForm} />
        <Route path={"/createapplication"} component={TabControl} />
    </BrowserRouter>
    ), document.getElementById('root'));