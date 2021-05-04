import React, {Component} from "react";
import ReactStars from "react-stars";
import XCircle from "react-feather/dist/icons/x-circle"

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
                            count={skill.userPersonalSkillValue || skill.userProfessionalSkillValue}
                            color1="#ffc412"
                            size={24}
                            edit={false}
                            half={false}
                        />
                        </div>
                        <XCircle className="skillDeleteButton mt-2 offset-1" onClick={()=>{
                        this.props.deleteEntry(this.props.entryIndex);
                    }}/>
                </div>
            </div>
        )
    }
    
}

export default SkillEntry