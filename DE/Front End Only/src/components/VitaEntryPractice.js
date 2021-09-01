import React, { Component } from "react"
import FlipMove from "react-flip-move"
import XCircle from "react-feather/dist/icons/x-circle"

class VitaEntryJob extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }


    render() {
        
        const entryPractice = this.props;

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
                        entryPractice.selectedStartDatePractice
                        }
                        - 
                        {
                        entryPractice.selectedEndDatePractice
                        }
                        <strong className="positionEntry">{
                        entryPractice.profession}
                        </strong>
                        <br/>
                        <strong className="companyEntry">{
                        entryPractice.practiceCompany}
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

export default VitaEntryJob