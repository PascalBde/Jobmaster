import React, {Component} from "react";
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {save} from 'save-file';
import SaveIcon from 'react-feather/dist/icons/download-cloud';
import LoadIcon from 'react-feather/dist/icons/upload-cloud';
import moment from 'moment';
import 'moment/locale/de';

import Vita from "./Vita";
import CoverLetter from "./CoverLetter";
import Attachments from "./Attachments";
import Final from "./Final";
import Navbar from "./Navbar";


//import 'bootstrap/dist/css/bootstrap.min.css'
//import './bootstrap-material-design.css'


const fileDialog = require('file-dialog');
let autoDate = moment();

class TabControl extends Component {
    constructor(props) {
        super(props)
        moment.locale('de');

        this.state = {
            final: {
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
                        letterDate: autoDate
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
        console.log(this.props);
        return (
            <div id="app">                
                <div className="row mb-3">
                    <div className="col-12">
                        
                        <Navbar />
                        <button className={'button'} onClick={async () => {
                            let final = this.state.final;

                            await save(this.props.user + '.caf', JSON.stringify(final));
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
                                            this.setprops({
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
                        <Tab>Anschreiben</Tab>
                        <Tab>Lebenslauf</Tab>
                        <Tab>Anlagen</Tab>
                        <Tab>Übersicht</Tab>
                    </TabList>
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
                </Tabs>
            </div>
        );
    }
}

export default TabControl