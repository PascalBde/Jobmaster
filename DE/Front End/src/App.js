import React, {Component} from "react";
import AppControl from "./components/AppControl";

import "./components/Standard.css";
import './bootstrap/bootstrap.scss';


class App extends Component {
  constructor(props) {
      super(props);

      this.state = {}
    }
  
  
  
  render() {

    return (
      <AppControl {...this.props} />
    );
  }

}


export default App;


// <TabControl {...this.props} />