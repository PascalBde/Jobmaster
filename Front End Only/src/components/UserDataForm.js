import React, {Component} from "react";
import Select from "react-select";

import SkillRatingButtons from "./SkillRatingButtons";
import SkillEntry from "./SkillEntry";


const maritalStatus = [
    {value:"single", label:"Single"},
    {value:"steadyRelationship", label:"In fester Beziehung"},
    {value:"married", label:"Verheiratet"},
    {value:"divorced", label:"Geschieden"},
    {value:"widowed", label:"Verwitwet"}
]
const nationality = [
    {value:"american", label:"Amerikanisch"},
    {value:"german", label:"Deutsch"},
    {value:"english", label:"Englisch"},
    {value:"french", label:"Französisch"},
    {value:"spanish", label:"Spanisch"},
    {value:"turkish", label:"Türkisch"}
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
    {value: "01", label: "Januar"}, 
    {value: "02", label: "Februar"}, 
    {value: "03", label: "März"}, 
    {value: "04", label: "April"}, 
    {value: "05", label: "Mai"}, 
    {value: "06", label: "Juni"}, 
    {value: "07", label: "Juli"}, 
    {value: "08", label: "August"}, 
    {value: "09", label: "September"}, 
    {value: "10", label: "Oktober"}, 
    {value: "11", label: "November"}, 
    {value: "12", label: "Dezemer"}
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
const personalSkilloptions = [
    {value: "Akkurat", label: "Akkurat" }, 
    {value: "Analyse", label: "Analyse"}, 
    {value: "Belastbarkeit", label: "Belastbarkeit"}, 
    {value: "Kommunikativ", label: "Kommunikativ"},
    {value: "Lernbereitschaft", label: "Lernbereitschaft"},
    {value: "Motivation", label: "Motivation"},
    {value: "Problemlösung", label: "Problemlösung"},
    {value: "Selbstständig", label: "Selbstständig"},
    {value: "Sorgfalt", label: "Sorgfalt"},
    {value: "Teamfähigkeit", label: "Teamfähigkeit"},
    {value: "Zuverlässigkeit", label: "Zuverlässigkeit"}
]
const jobSkilloptions = [
    {value: "React", label: "React"}, {value: "JavaScript", label: "JavaScript"}, {value: "HTML5", label: "HTML5"}, {value: "Responsive Webdesign", label: "Responsive Webdesign"}, {value: "Visual Studio Code", label: "Visual Studio Code"}, {value: "Debugging", label: "Debugging"}
]

class UserDataForm extends Component {
    constructor(props) {
        super(props)

        this.state = {}

        this.handleInput = this.handleInput.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.submitPersonalSkill = this.submitPersonalSkill.bind(this);
        this.submitProfessionalSkill = this.submitProfessionalSkill.bind(this);
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
            userSkillPersonalName,
            userSkillValue,
            userPersonalSkills
        } = this.props.data;
        userSkillPersonalName = userSkillPersonalName.label;
        userSkillValue = this.props.userSkillValue;

        userPersonalSkills.push({
            userSkillPersonalName,
            userSkillValue,
        });
        console.log(userPersonalSkills)
        this.props.onUpdate({userPersonalSkills})
    }
    
    submitProfessionalSkill(event) {
        event.preventDefault();

        let {
            userSkillProfessionalName,
            userSkillValue,
            userProfessionalSkills
        } = this.props.data;
        userSkillProfessionalName = this.props.userSkillProfessionalName;
        userSkillValue = this.props.userSkillValue;
        
        userProfessionalSkills.push({
            userSkillProfessionalName,
            userSkillValue
        });
        console.log(userProfessionalSkills)
        this.props.onUpdate({userProfessionalSkills})
    }

    radioChangeHandler(event, key, value) {
        this.setState({
            [key] : value
        }, ()=>{
            console.log(this.props.userSkillValue, "userSkillValue has been set to " + value + "!");
        });
    }

    render() {
        const {data} = this.props;
        const userFormData = data.userData;
        const personalSkills = userFormData.userPersonalSkills;
        const professionalSkills = userFormData.userProfessionalSkills;
        const values = userFormData.userSkillValue;
        const radioChangeHandler = this.radioChangeHandler;

        return (
            <div>
                <div className="row">
                    <div className="col-4">
                        <div className="card bg-info rounded-corners">
                            <form>
                                <h4 className="card-header text-center">Persönliche Angaben</h4>
                                    <div className="card-body">
                                        <section>     
                                            <div className="row">         
                                                              
                                                <div className="col-6">
                                                    <div className="detailInfo">
                                                    Vorname
                                                        <input
                                                        required 
                                                        id={'userFirstName'} 
                                                        value={data.userData.userFirstName} 
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
                                                        Nachname
                                                            <input
                                                            required 
                                                            id={'userLastName'}  
                                                            value={data.userData.userLastName} 
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
                                                        Strasse
                                                        <input 
                                                            required
                                                            id={'userStreet'}  
                                                            value={data.userData.userStreet} 
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
                                                        Haus-Nr.
                                                        <input
                                                            required 
                                                            id={'userHouseNumber'}
                                                            value={data.userData.userHouseNumber} 
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
                                                        Postleitzahl
                                                        <input
                                                            required 
                                                            id={'userPostcode'}  
                                                            value={data.userData.userPostcode} 
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
                                                        Stadt
                                                        <input
                                                            required 
                                                            id={'userCity'}  
                                                            value={data.userData.userCity} 
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
                                                        Telefon
                                                    <input
                                                        required
                                                        id={'userPhoneNum'}
                                                        value={data.userData.userPhoneNum}
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
                                                        Mobiltelefon
                                                    <input
                                                        required
                                                        id={'userMobileNum'}
                                                        value={data.userData.userMobileNum}
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
                                                        value={data.userData.userMailAdress}
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
                                                            Nationalität
                                                            <Select
                                                                className="nationality"
                                                                options={nationality}
                                                                value={data.userData.userNationality}
                                                                name="nationality"
                                                                onChange={(value)=>{
                                                                this.props.onUpdate('userNationality', value);
                                                                }}
                                                                placeholder="Bitte wählen"
                                                            />
                                                        </div>
                                                    </div>
                                            </div>
                                            <div className="card-text">Geburtstag</div>
                                            <div className="row">
                                            
                                                <div className="col-3">
                                                    <div className="detailinfo">
                                                        <Select
                                                            className="bDays"
                                                            options={bDays}
                                                            value={data.userData.userDayOfBirth}
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
                                                            value={data.userData.userMonthOfBirth}
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
                                                            value={data.userData.userYearOfBirth}
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
                                                        Geburtsort
                                                        <input
                                                            required 
                                                            id={'userPlaceOfBirth'} 
                                                            value={data.userData.userPlaceOfBirth} 
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
                                                        Beziehungstatus
                                                        <Select 
                                                            className="maritalStatus"
                                                            options={maritalStatus}
                                                            value={data.userData.userMaritalStatus}
                                                            name="maritalStatus"
                                                            onChange={(value)=>{
                                                            this.props.onUpdate('userMaritalStatus', value);
                                                            }}
                                                            placeholder="Bitte wählen"
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
                                <h4 className="card-header text-center">Persönliche Fähigkeiten</h4>
                                    <div className="card-body">
                                        <section>
                                            <div className="row">               
                                                <div className="col-4">
                                                    <div className="detailinfo">
                                                        <Select
                                                            className="personalSkilloptions"
                                                            options={personalSkilloptions}
                                                            value={data.userData.userSkillPersonalName}
                                                            name="personalSkilloptions"
                                                            onChange={(value)=>{
                                                            this.props.onUpdate('userSkillPersonalName', value);
                                                            }}
                                                            placeholder="Bitte wählen"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-5">
                                                <SkillRatingButtons 
                                                    skillValue={this.props["userSkillValue"]}
                                                    values={values}
                                                    radioChangeHandler={radioChangeHandler}
                                                />
                                                </div>
                                                <div>
                                                    <button
                                                        type="submit"
                                                        className="addSkillEntryButton mt-1"
                                                    >Hinzufügen
                                                    </button>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                            </form>
                            <hr />
                            <div className="row">
                                {personalSkills.map((skill, index) => {
                                    return(
                                        <SkillEntry skill={skill} skillIndex={index} />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card bg-info rounded-corners">
                            <form onSubmit={this.submitProfessionalSkill}>
                                <h4 className="card-header text-center">Berufliche Fähigkeiten</h4>
                                    <div className="card-body">
                                        <section>
                                            <div className="row">               
                                                <div className="col-4">
                                                    <div className="detailinfo">
                                                        <Select
                                                            className="jobSkilloptions"
                                                            options={jobSkilloptions}
                                                            value={data.userData.userSkillProfessionalName}
                                                            name="jobSkilloptions"
                                                            onChange={(value)=>{
                                                            this.props.onUpdate('userSkillProfessionalName', value);
                                                            }}
                                                            placeholder="Bitte wählen"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-5">
                                                <SkillRatingButtons
                                                    skillValue={this.props["userSkillValue"]}
                                                    values={values} 
                                                    radioChangeHandler={radioChangeHandler}/>
                                                </div>
                                                <div>
                                                    <button
                                                        type="submit"
                                                        className="addSkillEntryButton mt-1"
                                                    >Hinzufügen
                                                    </button>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                            </form>
                            <hr />
                            <div className="row">
                                {professionalSkills.map((skill, index) => {
                                    return(
                                        <SkillEntry skill={skill} skillIndex={index} />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserDataForm