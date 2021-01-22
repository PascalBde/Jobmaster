import React, {Component} from "react";

class SkillEntry extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        const {skill} = this.props;

        return(
            <div>
                <div className="row">
                    <div className="col-12">
                        <div>
                            <p>
                                {skill.userSkillPersonalName || skill.userSkillProfessionalName}
                            </p>
                            <p>
                                {skill.userSkillPersonalValue || skill.userSkillProfessionalValue}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default SkillEntry