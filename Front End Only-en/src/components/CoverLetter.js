import React, {Component} from "react";
// import UserInfo from './UserInfo';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Select from "react-select";

import YearData from "./YearData"

const letterCreationDays = [
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
const letterCreationMonths = [
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

const letterCreationYears = YearData

class CoverLetter extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

   // agCallBack = (agDataList) => {
   //         this.setState({agdata: agDataList});
   // }

    render() {
        const {data} = this.props;
        
        return (
            <div>       
                <div className="row">
                    <div className="offset-1" />
                    <div className="col-5">
                        <div className="card bg-info rounded-corners">
                            <form>
                            <h4 className="card-header text-center">Applicant data</h4>
                            <div className="card-body userInfoField">
                                <div className="row">
                                    <div className="col-12">
                                        <div>
                                            {(data && data.userData) ? data.userData.userFirstName : 'Keine Daten'} {(data && data.userData) ? data.userData.userLastName : 'Keine Daten'}  
                                        </div>
                                        <div>
                                            {(data && data.userData) ? data.userData.userStreet : 'Keine Daten'} {(data && data.userData) ? data.userData.userHouseNumber : 'Keine Daten'}
                                        </div>
                                        <div>
                                            {(data && data.userData) ? data.userData.userPostcode : 'Keine Daten'} {(data && data.userData) ? data.userData.userCity : 'Keine Daten'}
                                        </div>
                                        <div>
                                            {(data && data.userData) ? data.userData.userPhoneNum : 'Keine Daten'}
                                        </div>
                                        <div>
                                            {(data && data.userData) ? data.userData.userMobileNum : 'Keine Daten'}
                                        </div>
                                        <div>
                                            {(data && data.userData) ? data.userData.userMailAdress : 'Keine Daten'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="card bg-info rounded-corners">
                            
                                <form>
                                <h4 className="card-header text-center">
                                    Employer data
                                </h4>
                                <div className="card-body">
                                <section>     
                                    <div className="row">         
                                    <div className="offset-1" />                  
                                    <div className="col-5">
                                        <div className="detailInfo">
                                            Company name
                                                <input
                                                required 
                                                id={'nameOfCompany'} 
                                                placeholder={'Company'} 
                                                value={data.coverLetter.nameOfCompany} 
                                                type="text" 
                                                className="form-control" 
                                                onChange={(event)=>{
                                                    this.props.onUpdate(event.target.id, event.target.value); 
                                                }}
                                            />
                                        </div>                                        
                                    </div>                               
                                        <div className="col-5">
                                            <div className="detailInfo">
                                                Contact Person
                                                    <input 
                                                    id={'contactPerson'} 
                                                    placeholder={'Ms. / Mr. Smith'} 
                                                    value={data.coverLetter.contactPerson} 
                                                    type="text" 
                                                    className="form-control" 
                                                    onChange={(event)=>{
                                                        this.props.onUpdate(event.target.id, event.target.value); 
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
                                                Street
                                                <input 
                                                    required
                                                    id={'street'} 
                                                    placeholder={'Street'} 
                                                    value={data.coverLetter.street} 
                                                    type="text" 
                                                    className="form-control" 
                                                    onChange={(event)=>{
                                                    this.props.onUpdate(event.target.id, event.target.value); 
                                                    }}
                                                />
                                            </div>                                        
                                        </div>
                                        <div className="col-2">
                                            <div className="detailInfo">
                                                House no.
                                                <input
                                                    required 
                                                    id={'housenumber'} 
                                                    placeholder={'123'} 
                                                    value={data.coverLetter.housenumber} 
                                                    type="text" 
                                                    className="form-control" 
                                                    onChange={(event)=>{
                                                        this.props.onUpdate(event.target.id, event.target.value); 
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
                                                Post Code
                                                <input
                                                    required 
                                                    id={'postcode'} 
                                                    placeholder={'12345'} 
                                                    value={data.coverLetter.postcode} 
                                                    type="text" 
                                                    className="form-control" 
                                                    onChange={(event)=>{
                                                        this.props.onUpdate(event.target.id, event.target.value); 
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="offset-2" />
                                        <div className="col-5">
                                            <div className="detailInfo">
                                                City
                                                <input
                                                    required 
                                                    id={'city'} 
                                                    placeholder={'Berlin / Paris / New York ...'} 
                                                    value={data.coverLetter.city} 
                                                    type="text" 
                                                    className="form-control" 
                                                    onChange={(event)=>{
                                                        this.props.onUpdate(event.target.id, event.target.value); 
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
                                                Email
                                            </div> 
                                        <input
                                            required
                                            id={'employerMail'}
                                            placeholder={'Enter Email here'}
                                            value={data.coverLetter.employerMail}
                                            type="text"
                                            className="form-control"
                                            onChange={(event)=>{
                                                this.props.onUpdate(event.target.id, event.target.value); 
                                            }}
                                        />
                                        </div>
                                        </div>
                                        
                                        </div>
                                </section>
                                </div>
                            </form>
                        
                        </div>
                    </div>       
                </div>
                <div className="card-body">            
                    <div className="row">
                    <div className="offset-1" />
                    <div className="col-10">
                    <div className="card rounded-corners bg-info">
                    <div className="card-body">
                    <form>
                        <h4 className="card-header text-center">Job title and cover text</h4>
                           
                                
                                
                            <div className="row">
                                <div className="offset-3" />
                                <div className="col-4">
                                Subject in the cover letter 
                                <input
                                    required 
                                    id={'jobDescription'} 
                                    placeholder={'Job title (e.g. commercial specialist)'} 
                                    value={data.coverLetter.jobDescription} 
                                    type="text" 
                                    className="form-control" 
                                    onChange={(event)=>{
                                        this.props.onUpdate(event.target.id, event.target.value); 
                                    }}
                                />
                                </div>
                                </div>
                                
                                <p className="offset-3">Date of the application</p>
                                
                                <div className="row">
                                
                                <div className="offset-3" />
                                    <div className="col-1">
                                        <div className="detailinfo">
                                            <Select
                                                className="letterCreationDays"
                                                options={letterCreationDays}
                                                value={data.coverLetter.letterCreationDay}
                                                name="letterCreationDays"
                                                onChange={(value)=>{
                                                this.props.onUpdate('letterCreationDay', value);
                                                }}
                                                placeholder="Day"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="detailinfo">
                                            <Select
                                                className="letterCreationMonths"
                                                options={letterCreationMonths}
                                                value={data.coverLetter.letterCreationMonth}
                                                name="letterCreationMonths"
                                                onChange={(value)=>{
                                                this.props.onUpdate('letterCreationMonth', value);
                                                }}
                                                placeholder="Month"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="detailinfo">
                                            <Select 
                                                className="letterCreationYears"
                                                options={letterCreationYears}
                                                value={data.coverLetter.letterCreationYear}
                                                name="letterCreationYears"
                                                onChange={(value)=>{
                                                this.props.onUpdate('letterCreationYear', value);
                                                }}
                                                placeholder="Year"
                                            />
                                        </div>
                                    </div>
                                
                                </div>
                            
                            <div className="row">
                            <div className="offset-1" />
                            <div className="form-group">
                                <div className="col-12">
                                    Cover text     
                                    <CKEditor
                                        editor={ ClassicEditor }
                                        config={{
                                           // plugins: [],       
                                            toolbar: ['undo', 'redo'],
                                            placeholder: "Dear Ms. / Dear Mr. / Dear Sir or Madam,"
                                         }}   
                                        data={data.coverLetter.letterText}
                                        onInit={ editor => {
                                        // You can store the "editor" and use when it is needed.
                                        console.log( 'Editor is ready to use!', editor );
                                        } }
                                        onChange={ ( event, editor ) => {
                                        const data = editor.getData();
                                        this.props.onUpdate('letterText', data); 
                                        console.log( { event, editor, data } );
                                        } }
                                        onBlur={ ( event, editor ) => {
                                        console.log( 'Blur.', editor );
                                        } }
                                        onFocus={ ( event, editor ) => {
                                        console.log( 'Focus.', editor );
                                        } }
                                    />
                                </div>
                                </div>
                                
                            </div>                                      
                            
                    </form>
                    </div>
                    </div>
                    
                    </div>
                </div>
                </div>
              
            </div>
        )
        
    }

} 

    

export default CoverLetter