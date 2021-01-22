import React, {Component} from "react";

import Navbar from "./Navbar";

class Start extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <div>
                <div className="row mb-3">
                    <div className="col-12">
                        <Navbar/>
                    </div>
                </div>
                <div>
                <h1>Hello Philipp!</h1>
                </div>
            </div>
        )
    }
}

export default Start