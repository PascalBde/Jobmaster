import React, { Component } from "react"
import FlipMove from "react-flip-move"
import XCircle from "react-feather/dist/icons/x-circle"

class VitaEntryJob extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }


    render() {
        
        const {entryJob} = this.props;
        console.log(entryJob)

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
                        entryJob.selectedStartMonthJob
                        }
                        /
                        {
                        entryJob.selectedStartYearJob
                        }
                        - 
                        {
                        entryJob.selectedEndMonthJob
                        }
                        /
                        {
                        entryJob.SelectedEndYearJob
                        }
                        <strong className="positionEntry">{
                        entryJob.position}
                        </strong>
                        <br/>
                        <strong className="companyEntry">{
                        entryJob.company}
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