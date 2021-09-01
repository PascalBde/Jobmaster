import React, {Component} from "react"
import Select from "react-select";
import SaveIcon from 'react-feather/dist/icons/save';

import Navbar from "./Navbar";


const maritalStatus = [
    {value:"single", label:"Single"},
    {value:"married", label:"Verheiratet"},
    {value:"divorced", label:"Geschieden"},
    {value:"widowed", label:"Verwitwet"}
]

class UserDataForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userData:
            {
                userProfiles: [],
                userFirstName: "",
                userLastName: "",
                userStreet: "",
                userHousnumber: "",
                userPostcode: "",
                userCity: "",
                userPhoneNum: "",
                userMobileNum: "",
                userMailadress: "",
                userBirthday: "",
                userPlaceOfBirth: "",
                userMaritalStatus: ""
            }
        }

        this.submitUserData = this.submitUserData.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleInput(event, key, value) {
        this.setState({
            [key] : value
        }, ()=>{
            console.log(this.state);
        });
    }

    handleSelect(key, value) {
        console.log('handle select called', key, value);
        this.setState({
            [key] : value
        }, ()=>{
            console.log(this.state);
        });
    }

    submitUserData(event) {
        event.preventDefault();
        
        let {
            userFirstName,
            userLastName,
            userStreet,
            userHousnumber,
            userPostcode,
            userCity,
            userPhoneNum,
            userMobileNum,
            userMailadress,
            userBirthday,
            userPlaceOfBirth,
            userMaritalStatus,
            userProfiles
        } = this.state;
    

    userProfiles.push({
        userFirstName,
        userLastName,
        userStreet,
        userHousnumber,
        userPostcode,
        userCity,
        userPhoneNum,
        userMobileNum,
        userMailadress,
        userBirthday,
        userPlaceOfBirth,
        userMaritalStatus
    });
    console.log(userProfiles);
    this.state.onUpdate({userProfiles})
    }

    render() {

        return (
            <div id="app">
                <div className="row">
                    <div className="col-12">
                        <Navbar/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-5 offset-1">
                        <div className="card bg-info rounded-corners">
                            <form>
                                <h4 className="card-header text-center">Persönliche Angaben</h4>
                                    <div className="card-body">
                                        <section>     
                                            <div className="row">         
                                            <div className="offset-1" />                  
                                                <div className="col-5">
                                                    <div className="detailInfo">
                                                    Vorname
                                                        <input
                                                        required 
                                                        id={'userFirstName'} 
                                                        placeholder={'Vornamen hier eingeben'} 
                                                        value={this.state.userData.userFirstName} 
                                                        type="text" 
                                                        className="form-control" 
                                                        onChange={(event)=>{
                                                        this.state.onUpdate(event.target.id, event.target.value); 
                                                        }}
                                                        />
                                                    </div>                                        
                                                </div>                               
                                                <div className="col-5">
                                                    <div className="detailInfo">
                                                        Nachname
                                                            <input
                                                            required 
                                                            id={'userLastName'} 
                                                            placeholder={'Nachmanmen hier eingeben'} 
                                                            value={this.state.userData.userLastname} 
                                                            type="text" 
                                                            className="form-control" 
                                                            onChange={(event)=>{
                                                            this.state.onUpdate(event.target.id, event.target.value); 
                                                            }}
                                                        />
                                                    </div>                                          
                                                </div>
                                            <div className="offset-1" />
                                        </div>
                                            <div className="row">         
                                            <div className="offset-1" />
                                                <div className="col-5">
                                                    <div className="detailInfo">
                                                        Strasse
                                                        <input 
                                                            required
                                                            id={'userStreet'} 
                                                            placeholder={'Musterstrasse'} 
                                                            value={this.state.userData.userStreet} 
                                                            type="text" 
                                                            className="form-control" 
                                                            onChange={(event)=>{
                                                            this.state.onUpdate(event.target.id, event.target.value); 
                                                            }}
                                                        />
                                                    </div>                                        
                                                </div>
                                                <div className="col-2">
                                                    <div className="detailInfo">
                                                        Haus-Nr.
                                                        <input
                                                            required 
                                                            id={'userHousenumber'} 
                                                            placeholder={'123'} 
                                                            value={this.state.userData.userHousenumber} 
                                                            type="text" 
                                                            className="form-control" 
                                                            onChange={(event)=>{
                                                            this.state.onUpdate(event.target.id, event.target.value); 
                                                            }}
                                                        />
                                                    </div>                                        
                                                </div> 
                                            <div className="offset-1" />
                                            </div>
                                            <div className="row">         
                                            <div className="offset-1" />
                                                <div className="col-3">
                                                    <div className="detailInfo">
                                                        Postleitzahl
                                                        <input
                                                            required 
                                                            id={'userPostcode'} 
                                                            placeholder={'12345'} 
                                                            value={this.state.userData.userPostcode} 
                                                            type="text" 
                                                            className="form-control" 
                                                            onChange={(event)=>{
                                                            this.state.onUpdate(event.target.id, event.target.value); 
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            <div className="offset-2" />
                                                <div className="col-5">
                                                    <div className="detailInfo">
                                                        Stadt
                                                        <input
                                                            required 
                                                            id={'userCity'} 
                                                            placeholder={'Berlin / Hamburg / ...'} 
                                                            value={this.state.userData.userCity} 
                                                            type="text" 
                                                            className="form-control" 
                                                            onChange={(event)=>{
                                                            this.state.onUpdate(event.target.id, event.target.value); 
                                                            }}
                                                        />
                                                    </div>                                        
                                                </div>
                                            <div className="offset-1" />
                                            </div>
                                            <div className="row">
                                            <div className="offset-3" />
                                                <div className="col-6">
                                                    <div className="detailInfo">
                                                        <div className="card-text text-center">
                                                            Telefon
                                                        </div> 
                                                    <input
                                                        required
                                                        id={'userPhonNum'}
                                                        placeholder={'Telefonnummer hier eintragen'}
                                                        value={this.state.userData.userPhoneNum}
                                                        type="text"
                                                        className="form-control"
                                                        onChange={(event)=>{
                                                        this.state.onUpdate(event.target.id, event.target.value); 
                                                        }}
                                                    />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                            <div className="offset-3" />
                                                <div className="col-6">
                                                    <div className="detailInfo">
                                                        <div className="card-text text-center">
                                                            Mobiltelefon
                                                        </div> 
                                                    <input
                                                        required
                                                        id={'userMobileNum'}
                                                        placeholder={'Mobilnummer hier eintragen'}
                                                        value={this.state.userData.userMobileNum}
                                                        type="text"
                                                        className="form-control"
                                                        onChange={(event)=>{
                                                        this.state.onUpdate(event.target.id, event.target.value); 
                                                        }}
                                                    />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                            <div className="offset-3" />
                                                <div className="col-6">
                                                    <div className="detailInfo">
                                                        <div className="card-text text-center">
                                                            Email
                                                        </div> 
                                                    <input
                                                        required
                                                        id={'userMailadress'}
                                                        placeholder={'Email hier eintragen'}
                                                        value={this.state.userData.userMailadress}
                                                        type="text"
                                                        className="form-control"
                                                        onChange={(event)=>{
                                                        this.state.onUpdate(event.target.id, event.target.value); 
                                                        }}
                                                    />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-5">
                                                        <div className="detailinfo">
                                                            <div className="card-text text-center">
                                                                Geburtstag
                                                            </div>
                                                            <div>Here should be a Datepicker</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="detailinfo">
                                                            <div className="card-text text-center">
                                                                Beziehungstatus
                                                            </div>
                                                            <Select 
                                                                className="maritalStatus"
                                                                options={maritalStatus}
                                                                value={this.state.userMaritalStatus}
                                                                name="maritalStatus"
                                                                onChange={(value)=>{
                                                                this.state.onUpdate('userMaritalStatus', value);
                                                                }}
                                                                placeholder=""
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <br />
                                        </section>
                                    </div>
                                <button
                                className="userDataSubmit offset-4"  
                                type="submit">
                                    <SaveIcon className="userDateSave"/>
                                    Daten Speichern
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserDataForm