import React, {Component} from "react";
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {save} from 'save-file';
import SaveIcon from 'react-feather/dist/icons/download-cloud';
import LoadIcon from 'react-feather/dist/icons/upload-cloud';
// import moment from 'moment';
import 'moment/locale/de';

import Help from "./Start";
import UserDataForm from "./UserDataForm";
import Vita from "./Vita";
import CoverLetter from "./CoverLetter";
import Attachments from "./Attachments";
import Final from "./Final";
import Jobmaster_Logo_klein from "./Jobmaster_Logo_klein.png"


//import 'bootstrap/dist/css/bootstrap.min.css'
//import './bootstrap-material-design.css'


const fileDialog = require('file-dialog');
// let autoDate = moment();


class AppControl extends Component {
    constructor(props) {
        super(props)


        this.state = {
            final: {
                userData:
                {
                    userFirstName: "",
                    userLastName: "",
                    userStreet: "",
                    userHouseNumber: "",
                    userPostcode: "",
                    userCity: "",
                    userPhoneNum: "",
                    userMobileNum: "",
                    userMailAdress: "",
                    userBirthday: "",
                    userDayOfBirth:"",
                    userMonthOfBirth:"",
                    userYearOfBirth:"",
                    userNationality: "",
                    userPlaceOfBirth: "",
                    userMaritalStatus: "",
                    userSkillPersonalName: "",
                    userSkillProfessionalName: "",
                    userPersonalSkillValue: "",
                    userProfessionalSkillValue: "",
                    userPersonalSkills: [],
                    userProfessionalSkills: []
                },
                coverLetter:
                {
                    nameOfCompany: "",
                    contactPerson: "",
                    street: "",
                    housenumber: "",
                    postcode: "",
                    city: "",
                    employerMail: "",
                    jobDescription: "",
                    letterText: "",
                    letterDate: "",
                    letterCreationDay: "",
                    letterCreationMonth: "",
                    letterCreationYear: "",
                    },
                vita:
                {
                    schools: [],
                    educations: [],
                    jobs: [],
                    practices: [],
                    selectedStartMonthSchool: "",
                    selectedStartYearSchool: "",
                    selectedEndMonthSchool: "",
                    selectedEndYearSchool: "",
                    selectedStartMonthEducation: "",
                    selectedStartYearEducation: "",
                    selectedEndMonthEducation: "",
                    selectedEndYearEducation: "",
                    selectedStartMonthJob: "",
                    selectedStartYearJob: "",
                    selectedEndMonthJob: "",
                    selectedEndYearJob: "",
                    selectedStartMonthPractice: "",
                    selectedStartYearPractice: "",
                    selectedEndMonthPractice: "",
                    selectedEndYearPractice: "",
                    company: "",
                    position: "",
                    trainingCompany: "",
                    jobGraduation: "",
                    nameOfSchool: "",
                    schoolGraduation: "",
                    pacticeCompany: "",
                    profession: ""
                },
                attachments: {},
            }
        }
        
    }

    updateState(category, field, data) {
        let {final} = this.state;
        final[category][field] = data;

        this.setState({final}, () => {
            console.log(this.state);
        });

    }
    

    render() {
        return (
            <div id="app">
                <div className="row mb-3">
                    <div className="col-12">
                        <img className="appLogo" src={Jobmaster_Logo_klein} alt="" />
                    </div>
                </div>                    
                <div className="row mb-3">
                    <div className="col-12">
                        <button className={'button'} onClick={async () => {
                            let saveFinal = this.state.final;

                            await save(this.state.userFirstName + this.state.userLastName + '.caf', JSON.stringify(saveFinal));
                        }
                        }><SaveIcon/></button>
                        <button className={'button'} onClick={async () => {
                            fileDialog()
                                .then(files => {
                                    var reader = new FileReader();

                                    // Closure to capture the file information.
                                    reader.onload = (function (theFile) {
                                        return function (e) {
                                            let result = JSON.parse(e.target.result);
                                            console.log(result);
                                            this.setState({
                                                final: result
                                            })
                                            this.forceUpdate();
                                        };
                                    })(files[0]).bind(this);

                                    // Read in the image file as a data URL.
                                    reader.readAsText(files[0]);
                                })
                        }
                        }><LoadIcon/></button>
                    </div>
                </div>


                <Tabs>
                    <TabList>
                        <Tab>Applicant data</Tab>
                        <Tab>Cover Letter</Tab>
                        <Tab>Curricullum Vitae</Tab>
                        <Tab>Attachments</Tab>
                        <Tab>Overview</Tab>
                        <Tab>Help</Tab>
                    </TabList>
                    <TabPanel>
                        <UserDataForm
                            data={this.state.final.userData}
                            onUpdate={(field, data) => {
                                this.updateState("userData", field, data);
                            }}/>
                    </TabPanel>
                    <TabPanel>
                        <CoverLetter
                            data={this.state.final}
                            onUpdate={(field, data) => {
                                this.updateState("coverLetter", field, data);
                            }}/>
                    </TabPanel>
                    <TabPanel>
                        <Vita
                            data={this.state.final.vita}
                            onUpdate={(field, data) => {
                                this.updateState("vita", field, data);
                            }}/>
                    </TabPanel>
                    <TabPanel>
                        <Attachments
                            data={this.state.final.attachments}
                            onUpdate={(field, data) => {
                                this.updateState("attachments", field, data);
                            }}/>
                    </TabPanel>
                    <TabPanel>
                        <Final data={this.state.final}/>
                    </TabPanel>
                    <TabPanel>
                        <Help />
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
}

export default AppControl