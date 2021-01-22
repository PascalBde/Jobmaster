import React, {Component} from "react";


import Navbar from "./Navbar";



class AppControl extends Component {
    constructor(props) {
        super(props)


        this.state = {}
    }


    render() {
        return (
            <div id="app">
                <div className="row">
                    <div className="col-12">
                <div className="container">
                    
                        <div className="col-xs-10 col-xs-offset-1">
                            <Navbar />
                        </div>
                    
                    <div className="row">
                        <div className="col-xs-10 col-xs-offset-1">
                            {this.props.children}
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </div>
        )
    }
}

export default AppControl