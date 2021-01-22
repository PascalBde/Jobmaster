import React, { Component } from "react";
import {Link} from "react-router-dom";
import Home from 'react-feather/dist/icons/home';
import User from 'react-feather/dist/icons/user';
import Layers from 'react-feather/dist/icons/layers';

class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <nav className="navbar">
               
                    <div className="col-12">
                <div className="container">
                    <h2>JOBMASTER</h2>
                    <div className="offset-1" />
                    <Home className="navImg"/><h2><Link to={"/start"}>Start</Link></h2>
                            <div className="offset-1" />
                            <User className="navImg"/><h2><Link to={"/userprofile"}>Benutzerdaten</Link></h2>
                            <div className="offset-1" />
                            <Layers className="navImg"/><h2><Link to={"/createapplication"}>Bewerbung erstellen</Link></h2>
                            <div className="offset-1" />
                </div>
                </div>
            </nav>
        )
    }
}

export default Navbar