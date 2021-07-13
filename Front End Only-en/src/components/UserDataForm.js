import React, {Component} from "react";
import Select from "react-select";
import Accordion from 'react-bootstrap/Accordion';
import { Button, Card } from "react-bootstrap";


import SkillEntry from "./SkillEntry";


const maritalStatus = [
    {value:"single", label:"Single"},
    {value:"steadyRelationship", label:"Steady Relationship"},
    {value:"married", label:"Married"},
    {value:"divorced", label:"Divorced"},
    {value:"widowed", label:"Widowed"}
]
const nationality = [
    {value:"american", label:"American"},
    {value:"german", label:"German"},
    {value:"english", label:"British"},
    {value:"french", label:"French"},
    {value:"spanish", label:"Spanish"},
    {value:"turkish", label:"Turkish"},
    {value:"ukrainian", label:"Ukrainian"}
]
const bDays = [
    {value: "1", label: "01"}, 
    {value: "2", label: "02"}, 
    {value: "3", label: "03"}, 
    {value: "4", label: "04"}, 
    {value: "5", label: "05"}, 
    {value: "6", label: "06"}, 
    {value: "7", label: "07"}, 
    {value: "8", label: "08"}, 
    {value: "9", label: "09"}, 
    {value: "10", label: "10"}, 
    {value: "11", label: "11"}, 
    {value: "12", label: "12"},
    {value: "13", label: "13"},
    {value: "14", label: "14"},
    {value: "15", label: "15"},
    {value: "16", label: "16"},
    {value: "17", label: "17"},
    {value: "18", label: "18"},
    {value: "19", label: "19"},
    {value: "20", label: "20"},
    {value: "21", label: "21"},
    {value: "22", label: "22"},
    {value: "23", label: "23"},
    {value: "24", label: "24"},
    {value: "25", label: "25"},
    {value: "26", label: "26"},
    {value: "27", label: "27"},
    {value: "28", label: "28"},
    {value: "29", label: "29"},
    {value: "30", label: "30"},
    {value: "31", label: "31"}
]
const bMonths = [
    {value: "01", label: "January"}, 
    {value: "02", label: "February"}, 
    {value: "03", label: "March"}, 
    {value: "04", label: "April"}, 
    {value: "05", label: "May"}, 
    {value: "06", label: "June"}, 
    {value: "07", label: "July"}, 
    {value: "08", label: "August"}, 
    {value: "09", label: "September"}, 
    {value: "10", label: "October"}, 
    {value: "11", label: "November"}, 
    {value: "12", label: "December"}
]
const bYears = [
        {value: "2021", label: "2021"}, {value: "2020", label: "2020"}, {value: "2019", label: "2019"}, {value: "2018", label: "2018"}, {value: "2017", label: "2017"}, {value: "2016", label: "2016"},
        {value: "2015", label: "2015"}, {value: "2014", label: "2014"}, {value: "2013", label: "2013"}, {value: "2012", label: "2012"}, {value: "2011", label: "2011"},
        {value: "2010", label: "2010"}, {value: "2009", label: "2009"}, {value: "2008", label: "2008"}, {value: "2007", label: "2007"}, {value: "2006", label: "2006"},
        {value: "2005", label: "2005"}, {value: "2004", label: "2004"}, {value: "2003", label: "2003"}, {value: "2002", label: "2002"}, {value: "2001", label: "2001"},
        {value: "2000", label: "2000"}, {value: "1999", label: "1999"}, {value: "1998", label: "1998"}, {value: "1997", label: "1997"}, {value: "1996", label: "1996"},
        {value: "1995", label: "1995"}, {value: "1994", label: "1994"}, {value: "1993", label: "1993"}, {value: "1992", label: "1992"}, {value: "1991", label: "1991"},
        {value: "1990", label: "1990"}, {value: "1989", label: "1989"}, {value: "1988", label: "1988"}, {value: "1987", label: "1987"}, {value: "1986", label: "1986"},
        {value: "1985", label: "1985"}, {value: "1984", label: "1984"}, {value: "1983", label: "1983"}, {value: "1982", label: "1982"}, {value: "1981", label: "1981"},
        {value: "1980", label: "1980"}, {value: "1979", label: "1979"}, {value: "1978", label: "1978"}, {value: "1977", label: "1977"}, {value: "1976", label: "1976"},
        {value: "1975", label: "1975"}, {value: "1974", label: "1974"}, {value: "1972", label: "1972"}, {value: "1971", label: "1971"}, {value: "1970", label: "1970"},
]
class UserDataForm extends Component {
    constructor(props) {
        super(props)

        this.state = {}

        this.handleInput = this.handleInput.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.submitPersonalSkill = this.submitPersonalSkill.bind(this);
        this.submitProfessionalSkill = this.submitProfessionalSkill.bind(this);
        this.deletePersonalSkill = this.deletePersonalSkill.bind(this);
        this.deleteProfessionalSkill = this.deleteProfessionalSkill.bind(this);
        this.radioChangeHandler = this.radioChangeHandler.bind(this);
    }

    handleInput(event, key, value) {
        this.setState({
            [key] : value
        }, ()=>{
            console.log(this.props);
        });
    }

    handleSelect(key, value) {
        this.setState({
            [key] : value
        }, ()=>{
            console.log(this.props);
        });
    }

    submitPersonalSkill(event) {
        event.preventDefault();

        let {
            userPersonalSkillName,
            userPersonalSkillValue,
            userPersonalSkills
        } = this.props.data;

        userPersonalSkills.push({
            userPersonalSkillName,
            userPersonalSkillValue,
        });
        console.log(userPersonalSkills)
        this.props.onUpdate({userPersonalSkills})
    }
    
    submitProfessionalSkill(event) {
        event.preventDefault();

        let {
            userProfessionalSkillName,
            userProfessionalSkillValue,
            userProfessionalSkills
        } = this.props.data;
        
        userProfessionalSkills.push({
            userProfessionalSkillName,
            userProfessionalSkillValue
        });
        console.log(userProfessionalSkills)
        this.props.onUpdate({userProfessionalSkills})
    }

    deletePersonalSkill(index) {
        console.log(index);
        let {userPersonalSkills} = this.props.data;

        userPersonalSkills.splice(index, 1);

        this.setState({userPersonalSkills});
    }

    deleteProfessionalSkill(index) {
        console.log(index);
        let {userProfessionalSkills} = this.props.data;

        userProfessionalSkills.splice(index, 1);

        this.setState({userProfessionalSkills});
    }

    radioChangeHandler(event, key, value) {
        this.setState({
            [key] : value
        }, ()=>{
            console.log("userSkillValue has been set to " + this.props.userSkillValue + "!");
        });
    }

    render() {
        const userFormData = this.props.data;
        const personalSkills = userFormData.userPersonalSkills;
        const professionalSkills = userFormData.userProfessionalSkills;
        const valuesPersonal = userFormData.userPersonalSkillValue;
        const valuesProfessional = userFormData.userProfessionalSkillValue;

        return (
            <div>
                <div className="row">
                    <div className="col-4">
                        <div className="card bg-info rounded-corners">
                            <form>
                                <h4 className="card-header text-center">Personal Data</h4>
                                    <div className="card-body">
                                        <section>     
                                            <div className="row">         
                                                              
                                                <div className="col-6">
                                                    <div className="detailInfo">
                                                    First name
                                                        <input
                                                        required 
                                                        id={'userFirstName'} 
                                                        value={userFormData.userFirstName} 
                                                        type="text" 
                                                        className="form-control" 
                                                        onChange={(event)=>{
                                                        this.props.onUpdate(event.target.id, event.target.value); 
                                                        }}
                                                        />
                                                    </div>                                        
                                                </div>                               
                                                <div className="col-6">
                                                    <div className="detailInfo">
                                                        Last name
                                                            <input
                                                            required 
                                                            id={'userLastName'}  
                                                            value={userFormData.userLastName} 
                                                            type="text" 
                                                            className="form-control" 
                                                            onChange={(event)=>{
                                                            this.props.onUpdate(event.target.id, event.target.value); 
                                                            }}
                                                        />
                                                    </div>                                          
                                                </div>
                                            
                                        </div>
                                            <div className="row">         
                                            
                                                <div className="col-6">
                                                    <div className="detailInfo">
                                                        Street
                                                        <input 
                                                            required
                                                            id={'userStreet'}  
                                                            value={userFormData.userStreet} 
                                                            type="text" 
                                                            className="form-control" 
                                                            onChange={(event)=>{
                                                            this.props.onUpdate(event.target.id, event.target.value); 
                                                            }}
                                                        />
                                                    </div>                                        
                                                </div>
                                                <div className="col-6">
                                                    <div className="detailInfo">
                                                        House no.
                                                        <input
                                                            required 
                                                            id={'userHouseNumber'}
                                                            value={userFormData.userHouseNumber} 
                                                            type="text" 
                                                            className="form-control" 
                                                            onChange={(event)=>{
                                                            this.props.onUpdate(event.target.id, event.target.value); 
                                                            }}
                                                        />
                                                    </div>                                        
                                                </div> 
                                            </div>
                                            <div className="row">         
                                            
                                                <div className="col-6">
                                                    <div className="detailInfo">
                                                        Post Code
                                                        <input
                                                            required 
                                                            id={'userPostcode'}  
                                                            value={userFormData.userPostcode} 
                                                            type="text" 
                                                            className="form-control" 
                                                            onChange={(event)=>{
                                                            this.props.onUpdate(event.target.id, event.target.value); 
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="detailInfo">
                                                        City
                                                        <input
                                                            required 
                                                            id={'userCity'}  
                                                            value={userFormData.userCity} 
                                                            type="text" 
                                                            className="form-control" 
                                                            onChange={(event)=>{
                                                            this.props.onUpdate(event.target.id, event.target.value); 
                                                            }}
                                                        />
                                                    </div>                                        
                                                </div>
                                        
                                            </div>
                                            <div className="row">
                                            
                                                <div className="col-6">
                                                    <div className="detailInfo">    
                                                        Phone
                                                    <input
                                                        required
                                                        id={'userPhoneNum'}
                                                        value={userFormData.userPhoneNum}
                                                        type="text"
                                                        className="form-control"
                                                        onChange={(event)=>{
                                                        this.props.onUpdate(event.target.id, event.target.value); 
                                                        }}
                                                    />
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="detailInfo">
                                                        Mobilphone
                                                    <input
                                                        required
                                                        id={'userMobileNum'}
                                                        value={userFormData.userMobileNum}
                                                        type="text"
                                                        className="form-control"
                                                        onChange={(event)=>{
                                                        this.props.onUpdate(event.target.id, event.target.value); 
                                                        }}
                                                    />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="detailInfo">
                                                        Email
                                                    <input
                                                        required
                                                        id={'userMailAdress'}
                                                        value={userFormData.userMailAdress}
                                                        type="text"
                                                        className="form-control"
                                                        onChange={(event)=>{
                                                        this.props.onUpdate(event.target.id, event.target.value); 
                                                        }}
                                                    />
                                                    </div>
                                                </div>
                                                    <div className="col-4">
                                                        <div className="detailinfo">
                                                            Nationality
                                                            <Select
                                                                className="nationality"
                                                                options={nationality}
                                                                value={userFormData.userNationality}
                                                                name="nationality"
                                                                onChange={(value)=>{
                                                                this.props.onUpdate('userNationality', value);
                                                                }}
                                                                placeholder=""
                                                            />
                                                        </div>
                                                    </div>
                                            </div>
                                            <div className="card-text">Day of birth</div>
                                            <div className="row">
                                            
                                                <div className="col-3">
                                                    <div className="detailinfo">
                                                        <Select
                                                            className="bDays"
                                                            options={bDays}
                                                            value={userFormData.userDayOfBirth}
                                                            name="bDays"
                                                            onChange={(value)=>{
                                                            this.props.onUpdate('userDayOfBirth', value);
                                                            }}
                                                            placeholder=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="detailinfo">
                                                        <Select
                                                            className="bMonths"
                                                            options={bMonths}
                                                            value={userFormData.userMonthOfBirth}
                                                            name="bMonths"
                                                            onChange={(value)=>{
                                                            this.props.onUpdate('userMonthOfBirth', value);
                                                            }}
                                                            placeholder=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="detailinfo">
                                                        <Select
                                                            className="bYears"
                                                            options={bYears}
                                                            value={userFormData.userYearOfBirth}
                                                            name="bYears"
                                                            onChange={(value)=>{
                                                            this.props.onUpdate('userYearOfBirth', value);
                                                            }}
                                                            placeholder=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                
                                                <div className="col-6">
                                                    <div className="detailInfo">
                                                        Place of birth
                                                        <input
                                                            required 
                                                            id={'userPlaceOfBirth'} 
                                                            value={userFormData.userPlaceOfBirth} 
                                                            type="text" 
                                                            className="form-control" 
                                                            onChange={(event)=>{
                                                            this.props.onUpdate(event.target.id, event.target.value); 
                                                            }}
                                                        />
                                                    </div>                                        
                                                </div>
                                                <div className="col-5">
                                                    <div className="detailinfo">
                                                        Marital Status
                                                        <Select 
                                                            className="maritalStatus"
                                                            options={maritalStatus}
                                                            value={userFormData.userMaritalStatus}
                                                            name="maritalStatus"
                                                            onChange={(value)=>{
                                                            this.props.onUpdate('userMaritalStatus', value);
                                                            }}
                                                            placeholder=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        <br />
                                    </section>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card bg-info rounded-corners">
                            <form onSubmit={this.submitPersonalSkill}>
                                <h4 className="card-header text-center">Personal Skills</h4>
                                    <div className="card-body">
                                        <section>
                                            <div className="row">               
                                                <div className="col-5">
                                                    <div className="detailinfo">
                                                        <input
                                                            required
                                                            type="text"
                                                            className="form-control"
                                                            value={this.props.userSkillPersonalName}
                                                            name="userSkillPersonalName"
                                                            onChange={(event)=>{
                                                                this.props.onUpdate('userSkillPersonalName', event.target.value);
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-5">
                                                <div className="row mt-2">
                                                <div className="offset-1" />
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            id={"userPersonalSkillValue"}
                                                            name={"skillRadio"}
                                                            value={"1"}
                                                            checked={valuesPersonal === "1"}
                                                            onChange={(event)=>{
                                                            this.props.onUpdate(event.target.id, event.target.value); 
                                                            }}
                                                        />
                                                        1
                                                    </label>
                                                <div className="offset-1" />
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            id={"userPersonalSkillValue"}
                                                            name={"skillRadio"}
                                                            value={"2"}
                                                            checked={valuesPersonal === "2"}
                                                            onChange={(event)=>{
                                                            this.props.onUpdate(event.target.id, event.target.value); 
                                                            }}
                                                        />
                                                        2
                                                    </label>
                                                <div className="offset-1" />
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            id={"userPersonalSkillValue"}
                                                            name={"skillRadio"}
                                                            value={"3"}
                                                            checked={valuesPersonal === "3"}
                                                            onChange={(event)=>{
                                                            this.props.onUpdate(event.target.id, event.target.value); 
                                                            }}
                                                        />
                                                        3
                                                    </label>
                                                <div className="offset-1" />
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            id={"userPersonalSkillValue"}
                                                            name={"skillRadio"}
                                                            value={"4"}
                                                            checked={valuesPersonal === "4"}
                                                            onChange={(event)=>{
                                                            this.props.onUpdate(event.target.id, event.target.value); 
                                                            }}
                                                        />
                                                        4
                                                    </label>
                                                <div className="offset-1" />
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            id={"userPersonalSkillValue"}
                                                            name={"skillRadio"}
                                                            value={"5"}
                                                            checked={valuesPersonal === "5"}
                                                            onChange={(event)=>{
                                                            this.props.onUpdate(event.target.id, event.target.value); 
                                                            }}
                                                        />
                                                        5
                                                    </label>
                                                </div>
                                                </div>
                                                <div>
                                                    <button
                                                        type="submit"
                                                        className="addSkillEntryButton mt-1"
                                                    >Add Skill
                                                    </button>
                                                </div>
                                            </div>
                                            <Accordion>
                                                <Card className="skillInfo">
                                                    <Card.Header className="skillInfoHeader">
                                                        <Accordion.Toggle as={Button} variant="link" eventKey="0" >
                                                            <h2 className="examplestitle">Examples of personal skills</h2>
                                                        </Accordion.Toggle>
                                                    </Card.Header>
                                                        <Accordion.Collapse eventKey="0">
                                                            <Card.Body>
                                                                <p className="examplesText">
                                                                Typical or frequently listed skills are, for example: 
                                                                </p>
                                                                    <ul> 
                                                                    <li>Motivation</li> 
                                                                    <li>Teamwork</li> 
                                                                    <li>Reliability</li> 
                                                                    <li>Accuracy/Care</li> 
                                                                    <li>Self-employed</li> 
                                                                    <li>Communication</li> 
                                                                    <li>Troubleshooting</li> 
                                                                    <li>Resilience</li> 
                                                                    and much more.
                                                                    </ul>
                                                                <p>    
                                                                Basically, it's about highlighting your own strongest skills. You can often find clues about this in the job advertisement itself.
                                                                </p>
                                                            </Card.Body>
                                                        </Accordion.Collapse>
                                                </Card>
                                            </Accordion>
                                        </section>
                                        <hr />
                                        <div className="row offset-4">
                                            <div className="col-12">
                                            {personalSkills.map((skill, index) => {
                                            return(
                                                <SkillEntry skill={skill} skillIndex={index} deleteEntry={this.deletePersonalSkill}/>
                                            );
                                            })}
                                            </div>
                                        </div>
                                    </div>
                            </form>
                            
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card bg-info rounded-corners">
                            <form onSubmit={this.submitProfessionalSkill}>
                                <h4 className="card-header text-center">Professional Skills</h4>
                                    <div className="card-body">
                                        <section>
                                            <div className="row">               
                                                <div className="col-5">
                                                    <div className="detailinfo">
                                                        <input
                                                            required
                                                            className="form-control"
                                                            type="text"
                                                            value={userFormData.userSkillProfessionalName}
                                                            id={'userSkillProfessionalName'}
                                                            onChange={(event)=>{
                                                            this.props.onUpdate(event.target.id, event.target.value); 
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-5">
                                                <div className="row mt-2">
                                                <div className="offset-1" />
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            id={"userProfessionalSkillValue"}
                                                            name={"skillRadio"}
                                                            value={"1"}
                                                            checked={valuesProfessional === "1"}
                                                            onChange={(event)=>{
                                                            this.props.onUpdate(event.target.id, event.target.value); 
                                                            }}
                                                        />
                                                        1
                                                    </label>               
                                                <div className="offset-1" />
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            id={"userProfessionalSkillValue"}
                                                            name={"skillRadio"}
                                                            value={"2"}
                                                            checked={valuesProfessional === "2"}
                                                            onChange={(event)=>{
                                                            this.props.onUpdate(event.target.id, event.target.value); 
                                                            }}
                                                        />
                                                        2
                                                    </label>
                                                <div className="offset-1" />
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            id={"userProfessionalSkillValue"}
                                                            name={"skillRadio"}
                                                            value={"3"}
                                                            checked={valuesProfessional === "3"}
                                                            onChange={(event)=>{
                                                            this.props.onUpdate(event.target.id, event.target.value); 
                                                            }}
                                                        />
                                                        3
                                                    </label>
                                                <div className="offset-1" />
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            id={"userProfessionalSkillValue"}
                                                            name={"skillRadio"}
                                                            value={"4"}
                                                            checked={valuesProfessional === "4"}
                                                            onChange={(event)=>{
                                                            this.props.onUpdate(event.target.id, event.target.value); 
                                                            }}
                                                        />
                                                        4
                                                    </label>
                                                <div className="offset-1" /> 
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            id={"userProfessionalSkillValue"}
                                                            name={"skillRadio"}
                                                            value={"5"}
                                                            checked={valuesProfessional === "5"}
                                                            onChange={(event)=>{
                                                            this.props.onUpdate(event.target.id, event.target.value); 
                                                            }}
                                                        />
                                                        5
                                                    </label>
                                                </div>
                                                </div>
                                                <div>
                                                    <button
                                                        type="submit"
                                                        className="addSkillEntryButton mt-1"
                                                    >Add Skill
                                                    </button>
                                                </div>
                                            </div>
                                            <Accordion>
                                                <Card className="skillInfo">
                                                    <Card.Header className="skillInfoHeader">
                                                        <Accordion.Toggle as={Button} variant="link" eventKey="0" >
                                                            <h2 className="examplestitle">Examples of professional skills</h2>
                                                        </Accordion.Toggle>
                                                    </Card.Header>
                                                        <Accordion.Collapse eventKey="0">
                                                            <Card.Body>
                                                                <p className="examplesText">
                                                                The professional skills relate logically to the skills that one needs and can demonstrate in the job. Here are three examples:
                                                                </p>
                                                                    <ul className="jobExamples">Programmer:
                                                                        <li>React</li>
                                                                        <li>JavaScript</li>
                                                                        <li>PHP</li>
                                                                        <li>Laravel</li>                                                                    
                                                                        <li>Git</li>
                                                                        and much more.                                                              
                                                                    </ul>
                                                                    <ul className="jobExamples">Accountant:
                                                                        <li>Accounts Payable</li>
                                                                        <li>Accounts Receivable</li>
                                                                        <li>Payroll accounting</li>
                                                                        <li>Balance sheet accounting</li>
                                                                        <li>SAP/Datev/Lexware</li>
                                                                        and much more.
                                                                    </ul>
                                                                    <ul>Industrial mechanic:
                                                                    <li>Machine technology</li>
                                                                    <li>Measuring, testing (metal technology)</li>
                                                                    <li>Maintenance, repair</li>
                                                                    <li>Apply CAD (Computer Aided Design) systems</li>
                                                                    <li>CNC knowledge, CNC programming</li>
                                                                    and much more.
                                                                    </ul>
                                                                <p>   
                                                                You can often find clues about this in the job advertisement itself.
                                                                </p>
                                                            </Card.Body>
                                                        </Accordion.Collapse>
                                                </Card>
                                            </Accordion>
                                        </section>
                                        <hr />
                                        <div className="row offset-4">
                                            <div className="col-12">
                                            {professionalSkills.map((skill, index) => {
                                                return(
                                                    <SkillEntry skill={skill} skillIndex={index} deleteEntry={this.deleteProfessionalSkill}/>
                                                );
                                            })}
                                            </div>
                                        </div>
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserDataForm