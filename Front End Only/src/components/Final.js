import React from "react";
import { Component } from "react";
import PrintIcon from 'react-feather/dist/icons/printer';
import ReactStars from "react-stars";


class Final extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }



    render() {
        const final = this.props.data;
        
        // PersonalSkills
        let vitaPersonalSkills = [];
        if (final.userData.userPersonalSkills && final.userData.userPersonalSkills.length > 0) {
            for (const vitaPersonalSkill of final.userData.userPersonalSkills) {
                vitaPersonalSkills.push(
                    <div>
                        <div className="row">
                        <p className="mt-2">
                        {vitaPersonalSkill.userPersonalSkillName}: 
                        </p>
                        <p className="ml-1">
                        <ReactStars 
                            count={vitaPersonalSkill.userPersonalSkillValue}
                            color1="#ffc412"
                            size={24}
                            edit={false}
                            half={false}
                        />
                        </p>
                        </div>
                    <br />
                    </div>
                )
            }
        }

        // ProfessionalSkills
        let vitaProfessionalSkills = [];
        if (final.userData.userProfessionalSkills && final.userData.userProfessionalSkills.length > 0) {
            for (const vitaProfessionalSkill of final.userData.userProfessionalSkills) {
                vitaProfessionalSkills.push(
                    <div>
                        <div className="row">
                        <p className="mt-2">
                        {vitaProfessionalSkill.userProfessionalSkillName}: 
                        </p>
                        <p className="ml-1">
                        <ReactStars 
                            count={vitaProfessionalSkill.userProfessionalSkillValue}
                            color1="#ffc412"
                            size={24}
                            edit={false}
                            half={false}
                        />
                        </p>
                        </div>
                    </div>
                )
            }
        }

        // Schoolentries 
        let vitaEntriesSchool = [];
        if (final.vita.schools && final.vita.schools.length > 0) {
            for (const vitaEntrySchool of final.vita.schools) {
                vitaEntriesSchool.push(
                    <div>
                        <div className="row">
                            <div className="col-3 vitaText">
                                {
                                vitaEntrySchool.selectedStartMonthSchool
                                }/{
                                vitaEntrySchool.selectedStartYearSchool
                                } - 
                            </div>
                            <div className="col-9 finalVitaEntryTitle">
                                    {
                                    vitaEntrySchool.schoolGraduation
                                    }
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 vitaText">
                                {
                                vitaEntrySchool.selectedEndMonthSchool
                                }/{
                                vitaEntrySchool.selectedEndYearSchool
                                }
                                </div>
                                <div className="col-9 vitaText">
                                    {
                                    vitaEntrySchool.nameOfSchool
                                    }
                            </div>
                        </div>
                        <br />
                    </div>
                );
            }
        }

        // Educationentries 
        let vitaEntriesEducation = [];
        if (final.vita.educations && final.vita.educations.length > 0) {
            for (const vitaEntryEducation of final.vita.educations) {
                vitaEntriesEducation.push(
                    <div>
                        <div className="row">
                            <div className="col-3 vitaText">
                                {
                                vitaEntryEducation.selectedStartMonthEducation
                                }/{
                                vitaEntryEducation.selectedStartYearEducation
                                } - 
                            </div>
                            <div className="col-9 finalVitaEntryTitle">
                                    {
                                    vitaEntryEducation.jobGraduation
                                    }
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 vitaText">
                                {
                                vitaEntryEducation.selectedEndMonthEducation
                                }/{
                                vitaEntryEducation.selectedEndYearEducation
                                }
                                </div>
                                <div className="col-9 vitaText">
                                    {
                                    vitaEntryEducation.trainingCompany
                                    }
                            </div>
                        </div>
                        <br />
                    </div>
                );
            }
        }

        // Jobentries 
        let vitaEntriesJob = [];
        if (final.vita.jobs && final.vita.jobs.length > 0) {
            for (const vitaEntryJob of final.vita.jobs) {
                vitaEntriesJob.push(
                    <div>
                        <div className="row">
                            <div className="col-3 vitaText">
                                {
                                vitaEntryJob.selectedStartMonthJob
                                }/{
                                vitaEntryJob.selectedStartYearJob
                                } - 
                            </div>
                            <div className="col-9 finalVitaEntryTitle">
                                    { 
                                    vitaEntryJob.position
                                    }
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 vitaText">
                                {
                                vitaEntryJob.selectedEndMonthJob
                                }/{
                                vitaEntryJob.selectedEndYearJob
                                }
                                </div>
                                <div className="col-9 vitaText">
                                    {
                                    vitaEntryJob.company
                                    }
                            </div>
                        </div>
                        <br />
                    </div>
                );
            }
        }

        // Practiceentries 
        let vitaEntriesPractice = [];
        if (final.vita.practices && final.vita.practices.length > 0) {
            for (const vitaEntryPractice of final.vita.practices) {
                vitaEntriesPractice.push(
                    <div>
                        <div className="row">
                            <div className="col-3 vitaText">
                                {
                                vitaEntryPractice.selectedStartMonthPractice
                                }/{
                                vitaEntryPractice.selectedStartYearPractice
                                } - 
                            </div>
                            <div className="col-9 finalVitaEntryTitle">
                                    { 
                                    vitaEntryPractice.profession
                                    }
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 vitaText">
                                {
                                vitaEntryPractice.selectedEndMonthPractice
                                }/{
                                vitaEntryPractice.selectedEndYearPractice
                                }
                                </div>
                                <div className="col-9 vitaText">
                                    {
                                    vitaEntryPractice.practiceCompany
                                    }
                            </div>
                        </div>
                        <br />
                    </div>
                );
            }
        }

        console.log(vitaEntriesSchool, vitaEntriesEducation, vitaEntriesJob, vitaEntriesPractice);

        return (
            <div className="final-container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="finalHeader text-center">Übersicht deiner Bewerbung</h2>
                        <button className={'button'} onClick={() => {
                            window.print();
                        }
                        }><PrintIcon /></button>
                    </div>
                </div>

                <section>
                <h2 className="finalSectionHeader text-center">Anschreiben</h2>
                    <div className="row">
                        <div className="offset-3" />
                        <div className="col-6">
                            <div className="card square-corners">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12">
                                            <p className="card-text text-right">{final.userData.userFirstName} {final.userData.userLastName}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <p className="card-text text-right">{final.userData.userStreet} {final.userData.userHouseNumber}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <p className="card-text text-right">{final.userData.userPostcode} {final.userData.userCity}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <p className="card-text text-right">{final.userData.userPhoneNum}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <p className="card-text text-right">{final.userData.userMobileNum}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <p className="card-text text-right">{final.userData.userMailAdress}</p>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12">
                                            {final.coverLetter.nameOfCompany &&
                                                <div className="row">
                                                    <div className="col-12">
                                                        <p className="card-text">{final.coverLetter.nameOfCompany}</p>
                                                    </div>
                                                </div>
                                            }
                                            {final.coverLetter.contactPerson &&
                                                <div className="row">
                                                    <div className="col-12">
                                                        <p className="card-text">{final.coverLetter.contactPerson}</p>
                                                    </div>
                                                </div>
                                            }
                                            {final.coverLetter.street && final.coverLetter.housenumber &&
                                                <div className="row">
                                                    <div className="col-12">
                                                        <p className="card-text">{final.coverLetter.street} {final.coverLetter.housenumber}</p>
                                                    </div>
                                                </div>
                                            }

                                            {final.coverLetter.postcode && final.coverLetter.city &&
                                                <div className="row">
                                                    <div className="col-12">
                                                        <p className="card-text">{final.coverLetter.postcode} {final.coverLetter.city}</p>
                                                    </div>
                                                </div>
                                            }

                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-12">
                                            <p className="card-text text-right">{final.coverLetter.letterCreationDay.label}.{final.coverLetter.letterCreationMonth.value}.{final.coverLetter.letterCreationYear.label}</p>
                                        </div>
                                    </div>
                                    <br />
                                    <br />
                                    <div className="row">
                                        <div className="col-12">
                                            {final.coverLetter.jobDescription &&
                                                <div className="row">
                                                    <div className="col-12">
                                                        <p className="card-text font-weight-bold">{final.coverLetter.jobDescription}</p>
                                                    </div>
                                                </div>
                                            }
                                            <br />
                                            <br />
                                            <div className="outputLetterText">
                                                {final.coverLetter.letterText &&
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <p className="card-text text-justify" dangerouslySetInnerHTML={{ __html: final.coverLetter.letterText }} />
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="offset-3" />
                    </div>
                </section>
                <hr className="final-line" />
                <section>
                <h2 className="finalSectionHeader text-center">Lebenslauf</h2>
                    <div className="row">
                        <div className="offset-3" />
                        <div className="col-6">
                            <div className="card square-corners">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="card square-corners">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-12">
                                            <p className="card-header vitaUserHeader">{final.userData.userFirstName} {final.userData.userLastName}</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <p className="vitaUserSubHeader text-uppercase">Kontakt</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <p className="vitaText">{final.userData.userStreet} {final.userData.userHouseNumber}</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <p className="vitaText">{final.userData.userPostcode} {final.userData.userCity}</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <p className="vitaText">{final.userData.userPhoneNum}</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <p className="vitaText">{final.userData.userMobileNum}</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-10">
                                                        <p className="vitaText">{final.userData.userMailAdress}</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-4">
                                                        <p className="vitaText">Geburtstag:</p>
                                                    </div>
                                                    <div className="col-6">
                                                        <p>{final.userData.userDayOfBirth.label}.{final.userData.userMonthOfBirth.value}.{final.userData.userYearOfBirth.value}</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-4">
                                                        <p className="vitaText">Geburtsort:</p>  
                                                    </div>
                                                    <div className="col-6">
                                                        <p>{final.userData.userPlaceOfBirth}</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-4">
                                                        <p className="vitaText">Nationalität:</p>  
                                                    </div>
                                                    <div className="col-6">
                                                        <p>{final.userData.userNationality.label}</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-4">
                                                        <p className="vitaText">Familienstand:</p>
                                                    </div>
                                                    <div className="col-6">
                                                        <p>{final.userData.userMaritalStatus.label}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body">                                            
                                            <div className="row">
                                               <div className="col-12">
                                                    <p className="vitaUserSubHeader">Berufliche Skills</p>   
                                                </div> 
                                            </div>
                                            {vitaProfessionalSkills.length > 0 &&
                                                <div className="row">
                                                    <div className="col-12">
                                                        <p>{vitaProfessionalSkills}</p>
                                                    </div>
                                                </div>    
                                            }
                                            <br />
                                            <div className="row">
                                               <div className="col-12">
                                                    <p className="vitaUserSubHeader">Persönliche Skills</p>   
                                                </div> 
                                            </div>
                                            {vitaPersonalSkills.length > 0 &&
                                                <div className="row">
                                                    <div className="col-12">
                                                        <p>{vitaPersonalSkills}</p>
                                                    </div>
                                                </div>    
                                            }
                                            <br />
                                        </div>
                                        </div>
                                    </div>

                                    
                                    <div className="col-6">
                                        <div className="card square-corners">
                                            <div className="card-body">
                                            <div className="row">
                                        <div className="col-12">
                                            <p className="card-header vitaUserHeader">Lebenslauf</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <p className="vitaUserSubHeader">Beruflicher Werdegang</p>
                                        </div>
                                    </div>
                                    {vitaEntriesJob.length > 0 &&
                                        <div className="row">
                                            <div className="col-12">
                                                <div>{vitaEntriesJob}</div>
                                            </div>
                                        </div>
                                    }
                                    <br />
                                    <div className="row">
                                        <div className="col-12">
                                            <p className="vitaUserSubHeader">Ausbildung</p>
                                        </div>
                                    </div>
                                    {vitaEntriesEducation.length > 0 &&
                                        <div className="row">
                                            <div className="col-12">
                                                <div>{vitaEntriesEducation}</div>
                                            </div>
                                        </div>
                                    }
                                    <br />
                                    <div className="row">
                                        <div className="col-12">
                                            <p className="vitaUserSubHeader">Schulische Bildung</p>
                                        </div>
                                    </div>
                                    {vitaEntriesSchool.length > 0 &&
                                        <div className="row">
                                            <div className="col-12">
                                                <div>{vitaEntriesSchool}</div>
                                            </div>
                                        </div>
                                    }
                                    <br />
                                    <div className="row">
                                        <div className="col-12">
                                            <p className="vitaUserSubHeader">Praktika</p>
                                        </div>
                                    </div>
                                    {vitaEntriesPractice.length > 0 &&
                                        <div className="row">
                                            <div className="col-12">
                                                <div>{vitaEntriesPractice}</div>
                                            </div>
                                        </div>
                                    }
                                        </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="offset-3" />
                    </div>
                </section>
                <hr className="final-line" />
                <section>
                    <h2 className="finalSectionHeader text-center">Anhänge</h2>
                </section>
                <hr className="final-line" />
                <section>
                <div className="row">
                    <div className="offset-4" />
                    <div className="col-4">
                        
                <button
                className="sendMail btn-block mb-5"
                type="submit"
                >Bewerbung abschicken</button>
                
                </div>
                </div>
                </section>
                <hr className="closing-line" />
                
            </div>
        )
    }
}

export default Final