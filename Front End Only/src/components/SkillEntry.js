import React, {Component} from "react";
import ReactStars from "react-stars";

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
                   
                        <div className="mt-2">
                        {skill.userPersonalSkillName || skill.userProfessionalSkillName}: 
                        </div>
                        <div className="ml-1">
                        <ReactStars 
                            count={skill.userSkillPersonalValue || skill.userSkillProfessionalValue}
                            color1="#ffc412"
                            size={24}
                        />
                        </div>
                        
                    
                </div>
            </div>
        )
    }
    
}

export default SkillEntry