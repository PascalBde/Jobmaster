import React, { Component } from "react"
import FlipMove from "react-flip-move"
import XCircle from "react-feather/dist/icons/x-circle"

class VitaEntrySchool extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }


    render() {
        const entrySchool = this.props;

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
                        entrySchool.selectedStartDateSchool
                        }
                        - 
                        {
                        entrySchool.selectedEndDateSchool
                        }
                        <strong className="positionEntry">{
                        entrySchool.schoolGraduation}
                        </strong>
                        <br/>
                        <strong className="companyEntry">{
                        entrySchool.nameOfSchool}
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

export default VitaEntrySchool