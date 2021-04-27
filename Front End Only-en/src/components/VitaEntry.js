import React, { Component } from "react"
import FlipMove from "react-flip-move"
import XCircle from "react-feather/dist/icons/x-circle"

class VitaEntry extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }


    render() {
        const {entry} = this.props;
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
                        entry.selectedStartMonthSchool || 
                        entry.selectedStartMonthEducation || 
                        entry.selectedStartMonthJob ||
                        entry.selectedStartMonthPractice}.{
                        entry.selectedStartYearSchool || 
                        entry.selectedStartYearEducation || 
                        entry.selectedStartYearJob ||
                        entry.selectedStartYearPractice} - {
                        entry.selectedEndMonthSchool || 
                        entry.selectedEndMonthEducation || 
                        entry.selectedEndMonthJob ||
                        entry.selectedEndMonthPractice}.{
                        entry.selectedEndYearSchool || 
                        entry.selectedEndYearEducation || 
                        entry.selectedEndYearJob ||
                        entry.selectedEndYearPractice}
                        <strong className="positionEntry">{
                        entry.schoolGraduation || 
                        entry.jobGraduation || 
                        entry.position ||
                        entry.profession}
                        </strong>
                        <br/>
                        <strong className="companyEntry">{
                        entry.nameOfSchool || 
                        entry.trainingCompany || 
                        entry.company ||
                        entry.practiceCompany}
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

export default VitaEntry