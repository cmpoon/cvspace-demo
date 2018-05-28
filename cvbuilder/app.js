import React, {Component} from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router";
const createHashHistory = require("history/lib/createHashHistory");

import routes from "./routes";
import configureStore from "./store/configureStore";

//Old bootstrap
import "./bootswatch.less";
import "./assets/css/font-awesome.min.css";
//import 'bootstrap/dist/css/bootstrap.min.css';

import "./styles.css";

//import "./assets/css/animate.min.css";
//import "./assets/css/lightbox.min.css";
import "./assets/css/main.css";
import "./assets/css/responsive.css";


const store = configureStore({
    notifications: [],
});

const history = createHashHistory({queryKey: false});


import {WOW} from 'wowjs';

class App extends Component {

    componentDidMount() {
        new WOW().init();
    }

    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    {routes}
                </Router>
            </Provider>
        );
    }
}


render((
    <App />
), document.getElementById("app"));
