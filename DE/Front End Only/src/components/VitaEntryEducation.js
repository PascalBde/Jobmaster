import React, { Component } from "react"
import FlipMove from "react-flip-move"
import XCircle from "react-feather/dist/icons/x-circle"

class VitaEntryEducation extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }


    render() {
        const entryEducation = this.props;

        return(
            <div>
                <div className="row">
                    <div className="col-12">
                        
                        <FlipMove typeName={null} duration={250} easing="ease-out">
                        <XCircle className="entryDeleteButton" onClick={()=>{
                                this.props.deleteEntry(this.props.entryIndex);
                            }}/>
                        <div className="entryObject">
                        <p className="entryDates">
                        {
                        entryEducation.selectedStartDateEducation
                        }
                        - 
                        {
                        entryEducation.selectedEndDateEducation
                        }
                        <strong className="positionEntry">{
                        entryEducation.jobGraduation}
                        </strong>
                        <br/>
                        <strong className="companyEntry">{
                        entryEducation.trainingCompany}
                        </strong>                            
                        </p>
                        </div>                        
                        </FlipMove>                       
                    </div>
                 </div>
            </div>
        );
    }
}

export default VitaEntryEducation