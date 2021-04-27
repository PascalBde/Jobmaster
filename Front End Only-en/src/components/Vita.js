import React, {Component} from "react";
// import VitaEntrySchool from "./VitaEntrySchool";
// import VitaEntryEducation from "./VitaEntryEducation";
// import VitaEntryJob from "./VitaEntryJob";
// import VitaEntryPractice from "./VitaEntryPractice";
import VitaEntry from "./VitaEntry";
import Select from "react-select";
import Monthdata from "./MonthData";
import YearData from "./YearData";


// import { isMobileDevice } from "react-select/src/utils"

const optionsMonth = Monthdata;
const optionsYear = YearData;

class Vita extends Component {
    constructor(props) {
        super(props)
        this.state = {}

        this.handleInput = this.handleInput.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.deleteEntrySchool = this.deleteEntrySchool.bind(this);
        this.deleteEntryEducation = this.deleteEntryEducation.bind(this);
        this.deleteEntryJob = this.deleteEntryJob.bind(this);
        this.deleteEntryPractice = this.deleteEntryPractice.bind(this);
        this.submitSchool = this.submitSchool.bind(this);
        this.submitEducation = this.submitEducation.bind(this);
        this.submitJob = this.submitJob.bind(this);
        this.submitPractice = this.submitPractice.bind(this);
    }

    handleInput(event, key, value) {
        this.setState({
            [key] : value
        }, ()=>{
            console.log(this.props);
        });
    }

    handleSelect(key, value) {
        console.log('handle select called', key, value);
        this.setState({
            [key] : value
        }, ()=>{
            console.log(this.props);
        });
    }

    deleteEntrySchool(index) {
        console.log(index);
        let {schools} = this.props.data;

        schools.splice(index, 1);

        this.setState({schools});
    }

    deleteEntryEducation(index) {
        console.log(index);
        let {educations} = this.props.data;

        educations.splice(index, 1);

        this.setState({educations});
    }

    deleteEntryJob(index) {
        console.log(index);
        let {jobs} = this.props.data;

        jobs.splice(index, 1);

        this.setState({jobs});
    }

    deleteEntryPractice(index) {
        console.log(index);
        let {practices} = this.props.data;

        practices.splice(index, 1);

        this.setState({practices});
    }

    submitSchool(event) {
        event.preventDefault();

        let {
            selectedStartMonthSchool,
            selectedStartYearSchool,
            selectedEndMonthSchool,
            selectedEndYearSchool,
            nameOfSchool,
            schoolGraduation,
            schools
        } = this.props.data;
    selectedStartMonthSchool = selectedStartMonthSchool.label;
    selectedStartYearSchool = selectedStartYearSchool.label;
    selectedEndMonthSchool = selectedEndMonthSchool.label;
    selectedEndYearSchool = selectedEndYearSchool.label;

        schools.push({
            selectedStartMonthSchool,
            selectedStartYearSchool,
            selectedEndMonthSchool,
            selectedEndYearSchool,
            nameOfSchool,
            schoolGraduation,
    });
    console.log(schools);
    this.props.onUpdate({schools});
    }

    submitEducation(event) {
        event.preventDefault();

        let {
            selectedStartMonthEducation,
            selectedStartYearEducation,
            selectedEndMonthEducation,
            selectedEndYearEducation,
            trainingCompany,
            jobGraduation,
            educations
        } = this.props.data;
    selectedStartMonthEducation = selectedStartMonthEducation.label;
    selectedStartYearEducation = selectedStartYearEducation.label;
    selectedEndMonthEducation = selectedEndMonthEducation.label;
    selectedEndYearEducation = selectedEndYearEducation.label;

        educations.push({
            selectedStartMonthEducation,
            selectedStartYearEducation,
            selectedEndMonthEducation,
            selectedEndYearEducation,
            trainingCompany,
            jobGraduation,
    });
    console.log(educations);
    this.props.onUpdate({educations});
    }

    submitJob(event) {
        event.preventDefault();

        let {
            selectedStartMonthJob,
            selectedStartYearJob,
            selectedEndMonthJob,
            selectedEndYearJob,
            company,
            position,
            jobs
        } = this.props.data;
    selectedStartMonthJob = selectedStartMonthJob.label;
    selectedStartYearJob = selectedStartYearJob.label;
    selectedEndMonthJob = selectedEndMonthJob.label;
    selectedEndYearJob = selectedEndYearJob.label;

        jobs.push({
            selectedStartMonthJob,
            selectedStartYearJob,
            selectedEndMonthJob,
            selectedEndYearJob,
            company,
            position
    });
    console.log(jobs);
    this.props.onUpdate({jobs});
    }

    submitPractice(event) {
        event.preventDefault();

        let {
            selectedStartMonthPractice,
            selectedStartYearPractice,
            selectedEndMonthPractice,
            selectedEndYearPractice,
            practiceCompany,
            profession,
            practices
        } = this.props.data;
    selectedStartMonthPractice = selectedStartMonthPractice.label;
    selectedStartYearPractice = selectedStartYearPractice.label;
    selectedEndMonthPractice = selectedEndMonthPractice.label;
    selectedEndYearPractice = selectedEndYearPractice.label;

        practices.push({
            selectedStartMonthPractice,
            selectedStartYearPractice,
            selectedEndMonthPractice,
            selectedEndYearPractice,
            practiceCompany,
            profession
    });
    console.log(practices);
    this.props.onUpdate({practices});
    }

    render() {
        const vitaData = this.props.data;
        const entriesJob = vitaData.jobs;
        const entriesSchool = vitaData.schools;
        const entriesEducation = vitaData.educations;
        const entriesPractice = vitaData.practices;

    //    console.log(entriesJob, entriesSchool, entriesEducation);

        return(
            <div>
                <div className="row">
                    <div className="col-3">
                        <div className="card bg-info">
                        <h4 className="card-header text-center">Beruflicher Werdegang</h4>
                            <div className="card-body">                        
                                <form onSubmit={this.submitJob}>
                                    <h4 className="selectLabel">Beginn:</h4>
                                        <div className="row">
                                        <div className="offset-1" />
                                            <h3 className="monthSelect">Monat:</h3>
                                    <div className="col-3">
                                        <Select 
                                            placeholder=""
                                            className="SelectfieldMonthStart"
                                            options={optionsMonth}
                                            value={this.props.selectedStartMonthJob}
                                            name="startMonth"
                                            onChange={(value)=>{
                                                this.props.onUpdate('selectedStartMonthJob', value);
                                            }}
                                        />
                                    </div>
                                    <h3 className="yearSelect">Jahr:</h3>
                                    <div className="col-4">
                                        <Select 
                                            placeholder=""
                                            className="SelectfieldYearStart"
                                            options={optionsYear}
                                            value={this.props.selectedStartYearJob}
                                            name="startYear"
                                            onChange={(value)=>{
                                                this.props.onUpdate('selectedStartYearJob', value);
                                            }}
                                        />
                                    </div>
                                </div>
                                <hr />
                                <h4 className="selectLabel">Ende:</h4>
                                <div className="row">
                                <div className="offset-1" />
                                    <h3 className="monthSelect">Monat:</h3>
                                    <div className="col-3">
                                        <Select 
                                            placeholder=""
                                            className="SelectfieldMonthEnd"
                                            options={optionsMonth}
                                            value={this.props.selectedEndMonthJob}
                                            name="endMonth"
                                            onChange={(value)=>{
                                                this.props.onUpdate('selectedEndMonthJob', value);
                                            }}
                                        />
                                        </div>
                                        <h3 className="yearSelect">Jahr:</h3>
                                        <div className="col-4">
                                        <Select 
                                            placeholder=""
                                            className="SelectfieldYearEnd"
                                            options={optionsYear}
                                            value={this.props.selectedEndYearJob}
                                            name="endYear"
                                            onChange={(value)=>{
                                                this.props.onUpdate('selectedEndYearJob', value);
                                            }}
                                        />
                                        </div>
                                </div>
                                <hr />
                                    <h4 className="selectLabel">Firma:</h4>
                                    <input
                                        required
                                        className="form-control"
                                        type="text"
                                        value={this.props.company}
                                        name="company"
                                        placeholder="  Name der Firma"
                                        onChange={(event)=>{
                                            this.props.onUpdate('company', event.target.value);
                                        }}
                                    />
                                <br />
                                    <h4 className="selectLabel">als:</h4>
                                        <input
                                            required
                                            className="form-control"
                                            type="text"
                                            value={this.props.position}
                                            name="position"
                                            placeholder="  Bürokaufmann/-frau / Kaufm. Angestellte/-r"
                                            onChange={(event)=>{
                                                this.props.onUpdate('position', event.target.value);
                                            }}
                                        />    
                                <button  
                                    type="submit"
                                    className="addVitaEntryButton btn-block mt-3"
                                >Eintrag hinzufügen
                                </button>
                                <div className="offset-2" />
                            </form>
                            </div>
                            </div>
                            </div>
                    <div className="col-3">
                        <div className="card bg-info">
                        <h4 className="card-header text-center">Ausbildung</h4>
                            <div className="card-body">
                                <form onSubmit={this.submitEducation}>
                                <h4 className="selectLabel">Beginn:</h4>
                                        <div className="row">
                                        <div className="offset-1" />
                                            <h3 className="monthSelect">Monat:</h3>
                                    <div className="col-3">
                                        <Select 
                                            placeholder=""
                                            className="SelectfieldMonthStart"
                                            options={optionsMonth}
                                            value={this.props.selectedStartMonthEducation}
                                            name="startMonth"
                                            onChange={(value)=>{
                                                this.props.onUpdate('selectedStartMonthEducation', value);
                                            }}
                                        />
                                    </div>
                                    <h3 className="yearSelect">Jahr:</h3>
                                    <div className="col-4">
                                        <Select 
                                            placeholder=""
                                            className="SelectfieldYearStart"
                                            options={optionsYear}
                                            value={this.props.selectedStartYearEducation}
                                            name="startYear"
                                            onChange={(value)=>{
                                                this.props.onUpdate('selectedStartYearEducation', value);
                                            }}
                                        />
                                    </div>
                                </div>
                                <hr />
                                <h4 className="selectLabel">Ende:</h4>
                                <div className="row">
                                <div className="offset-1" />
                                    <h3 className="monthSelect">Monat:</h3>
                                    <div className="col-3">
                                        <Select
                                            placeholder=""
                                            className="SelectfieldMonthEnd"
                                            options={optionsMonth}
                                            value={this.props.selectedEndMonthEducation}
                                            name="endMonth"
                                            onChange={(value)=>{
                                                this.props.onUpdate('selectedEndMonthEducation', value);
                                            
                                            }}
                                        />
                                        </div>
                                        <h3 className="yearSelect">Jahr:</h3>
                                        <div className="col-4">
                                        <Select
                                            placeholder=""
                                            className="SelectfieldYearEnd"
                                            options={optionsYear}
                                            value={this.props.selectedEndYearEducation}
                                            name="endYear"
                                            onChange={(value)=>{
                                                this.props.onUpdate('selectedEndYearEducation', value);
                                            
                                            }}
                                        />
                                    </div>
                                </div>
                                <hr />
                                    <h4 className="selectLabel">Firma:</h4>
                                        <input
                                            required
                                            className="form-control"
                                            type="text"
                                            value={this.props.trainingCompany}
                                            name="trainingCompany"
                                            placeholder="  Name des Ausbildungsbetriebes"
                                            onChange={(event)=>{
                                                this.props.onUpdate('trainingCompany', event.target.value);
                                            }}
                                        />
                                <br />
                                    <h4 className="selectLabel">Abschluss:</h4>
                                        <input
                                            required
                                            className="form-control"
                                            type="text"
                                            value={this.props.jobGraduation}
                                            name="jobGraduation"
                                            placeholder="  z.B. Bürokaufmann/-frau IHK geprüft"
                                            onChange={(event)=>{
                                                this.props.onUpdate('jobGraduation', event.target.value);
                                            }}
                                        />
                                    <button 
                                            className="addVitaEntryButton btn-block mt-3" 
                                            type="submit"
                                        >Eintrag hinzufügen
                                        </button>
                                    </form>
                                    </div>
                                    </div>
                                    </div>
                    <div className="col-3">
                        <div className="card bg-info">
                        <h4 className="card-header text-center">Schulische Bildung</h4>
                            <div className="row">
                            <div className="col-12">
                            <div className="card-body">
                                <form onSubmit={this.submitSchool}>
                                <h4 className="selectLabel">Beginn:</h4>
                                        <div className="row">
                                        <div className="offset-1" />
                                            <h3 className="monthSelect">Monat:</h3>
                                    <div className="col-3">
                                        <Select 
                                            placeholder=""
                                            className="SelectfieldMonthStart"
                                            options={optionsMonth}
                                            value={this.props.selectedStartMonthSchool}
                                            name="startMonth"
                                            onChange={(value)=>{
                                                this.props.onUpdate('selectedStartMonthSchool', value);
                                            }}
                                        />
                                    </div>
                                    <h3 className="yearSelect">Jahr:</h3>
                                    <div className="col-4">
                                        <Select
                                            placeholder=""
                                            className="SelectfieldYearStart"
                                            options={optionsYear}
                                            value={this.props.selectedStartYearSchool}
                                            name="startYear"
                                            onChange={(value)=>{
                                                this.props.onUpdate('selectedStartYearSchool', value);
                                            }}
                                        />
                                    </div>
                                </div>
                                <hr />
                                <h4 className="selectLabel">Ende:</h4>
                                <div className="row">
                                <div className="offset-1" />
                                    <h3 className="monthSelect">Monat:</h3>
                                    <div className="col-3">
                                        <Select 
                                            placeholder=""
                                            className="SelectfieldMonthEnd"
                                            options={optionsMonth}
                                            value={this.props.selectedEndMonthSchool}
                                            name="endMonth"
                                            onChange={(value)=>{
                                                this.props.onUpdate('selectedEndMonthSchool', value);
                                            }}
                                        />
                                        </div>
                                        <h3 className="yearSelect">Jahr:</h3>
                                        <div className="col-4">
                                        <Select
                                            placeholder=""
                                            className="SelectfieldYearEnd"
                                            options={optionsYear}
                                            value={this.props.selectedEndYearSchool}
                                            name="endYear"
                                            onChange={(value)=>{
                                                this.props.onUpdate('selectedEndYearSchool', value);
                                            }}
                                        />
                                        </div>
                                </div>
                                <hr />
                                            <h4 className="selectLabel">Schule / Universität</h4>
                                                <input
                                                    required
                                                    className="form-control"
                                                    type="text"
                                                    value={this.props.nameOfSchool}
                                                    name="nameOfSchool"
                                                    placeholder="  Name der Schule / Univeristät"
                                                    onChange={(event)=>{
                                                        this.props.onUpdate('nameOfSchool', event.target.value);
                                                    }}
                                                />
                                        <br />
                                            <h4 className="selectLabel">Abschluss:</h4>
                                                <input
                                                    required
                                                    className="form-control"
                                                    type="text"
                                                    value={this.props.schoolGraduation}
                                                    name="schoolGraduation"
                                                    placeholder="  Mittlere Reife / Abitur / Fachhochschulreife"
                                                    onChange={(event)=>{
                                                        this.props.onUpdate('schoolGraduation', event.target.value);
                                                    }}
                                                />       
                                    <button 
                                            className="addVitaEntryButton btn-block mt-3" 
                                            type="submit"
                                        >Eintrag hinzufügen
                                        </button>
                                </form>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card bg-info">
                        <h4 className="card-header text-center">Praktika</h4>
                            <div className="row">
                            <div className="col-12">
                            <div className="card-body">
                                <form onSubmit={this.submitPractice}>
                                <h4 className="selectLabel">Beginn:</h4>
                                        <div className="row">
                                        <div className="offset-1" />
                                            <h3 className="monthSelect">Monat:</h3>
                                    <div className="col-3">
                                        <Select 
                                            placeholder=""
                                            className="SelectfieldMonthStart"
                                            options={optionsMonth}
                                            value={this.props.selectedStartMonthPractice}
                                            name="startMonth"
                                            onChange={(value)=>{
                                                this.props.onUpdate('selectedStartMonthPractice', value);
                                            }}
                                        />
                                    </div>
                                    <h3 className="yearSelect">Jahr:</h3>
                                    <div className="col-4">
                                        <Select
                                            placeholder="" 
                                            className="SelectfieldYearStart"
                                            options={optionsYear}
                                            value={this.props.selectedStartYearPractice}
                                            name="startYear"
                                            onChange={(value)=>{
                                                this.props.onUpdate('selectedStartYearPractice', value);
                                            }}
                                        />
                                    </div>
                                </div>
                                <hr />
                                <h4 className="selectLabel">Ende:</h4>
                                <div className="row">
                                <div className="offset-1" />
                                    <h3 className="monthSelect">Monat:</h3>
                                    <div className="col-3">
                                        <Select
                                            placeholder="" 
                                            className="SelectfieldMonthEnd"
                                            options={optionsMonth}
                                            value={this.props.selectedEndMonthPractice}
                                            name="endMonth"
                                            onChange={(value)=>{
                                                this.props.onUpdate('selectedEndMonthPractice', value);
                                            }}
                                        />
                                        </div>
                                        <h3 className="yearSelect">Jahr:</h3>
                                        <div className="col-4">
                                        <Select
                                            placeholder="" 
                                            className="SelectfieldYearEnd"
                                            options={optionsYear}
                                            value={this.props.selectedEndYearPractice}
                                            name="endYear"
                                            onChange={(value)=>{
                                                this.props.onUpdate('selectedEndYearPractice', value);
                                            }}
                                        />
                                        </div>
                                </div>
                                <hr />
                                            <h4 className="selectLabel">Firma:</h4>
                                                <input
                                                    required
                                                    className="form-control"
                                                    type="text"
                                                    value={this.props.practiceCompany}
                                                    name="practiceCompany"
                                                    placeholder="  Name des Praktikumbetriebs"
                                                    onChange={(event)=>{
                                                        this.props.onUpdate('practiceCompany', event.target.value);
                                                    }}
                                                />
                                            <br />
                                            <h4 className="selectLabel">Berufsfeld:</h4>
                                                <input
                                                    required
                                                    className="form-control"
                                                    type="text"
                                                    value={this.props.profession}
                                                    name="profession"
                                                    placeholder="  Bürokaufmann/-frau / Front End Developer"
                                                    onChange={(event)=>{
                                                        this.props.onUpdate('profession', event.target.value);
                                                    }}
                                                >
                                                </input>
                                            
                                        <button 
                                            className="addVitaEntryButton btn-block mt-3" 
                                            type="submit"
                                        >Eintrag hinzufügen
                                        </button>
                                    </form>
                                    </div>
                            </div>
                            </div>
                        </div>
                    </div>
                
                    
                    
                </div>    
                <hr className="line" />
                    {entriesJob.map((entry, index) => {
                        return(
                            <VitaEntry entry={entry} entryIndex={index} deleteEntry={this.deleteEntryJob} />
                        );
                    })}
                    {entriesEducation.map((entry, index) => {
                        return(
                            <VitaEntry entry={entry} entryIndex={index} deleteEntry={this.deleteEntryEducation} />
                        );
                    })}
                    {entriesSchool.map((entry, index) => {
                        return(
                            <VitaEntry entry={entry} entryIndex={index} deleteEntry={this.deleteEntrySchool} />
                        );
                    })}
                    {entriesPractice.map((entry, index) => {
                        return(
                            <VitaEntry entry={entry} entryIndex={index} deleteEntry={this.deleteEntryPractice} />
                        );
                    })}
           </div> 
        )
    }
}

export default Vita

// <hr className="line" /> <VitaEntry entry={entry} entryIndex={index} deleteEntry={this.deleteEntry} />