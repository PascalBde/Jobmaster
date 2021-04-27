import React, {Component} from "react"

class UserInfo extends Component {
        constructor(props) {
                super(props)

                this.state = {}
        }
        render() {
                return (
                        <div className="row">
                                <div className="col-12">
                                        <p>
                                        {this.props.item.name}
                                        <br/>   
                                        {this.props.item.adress}
                                        <br/>
                                        {this.props.item.origin}
                                        <br/>
                                        {this.props.item.phoneNum}
                                        <br/>
                                        {this.props.item.mobileNum}       
                                        <br/>
                                        {this.props.item.mailadress}
                                        </p>         
                                </div>
                        </div>   
        
                )
        }
}

export default UserInfo