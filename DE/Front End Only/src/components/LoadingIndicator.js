import React, {Component} from "react";

import indicatorImage from './images/loader-project.svg';

class LoadingIndicator extends Component {
    constructor(props) {
        super(props)


        this.state = {}
    }


    render() {
        return (
            <img src={indicatorImage} alt="" />
        )
    }
}

export default LoadingIndicator