import React, {Component} from "react";
// import UserInfo from './UserInfo';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';



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
                <div className="row mb-1">
                    <div className="offset-1" />
                    <div className="col-5">
                        <div className="card bg-info rounded-corners">
                            <h4 className="card-header text-center">Bewerberdaten</h4>
                            <div className="card-body">
                                <p className="userInfoField">
                                {(data && data.userData) ? data.userData.userName : 'Keine Daten'}
                                <br />
                                {(data && data.userData) ? data.userData.userAdress : 'Keine Daten'}
                                <br />
                                {(data && data.userData) ? data.userData.userOrigin : 'Keine Daten'}
                                <br />
                                {(data && data.userData) ? data.userData.userPhoneNum : 'Keine Daten'}
                                <br />
                                {(data && data.userData) ? data.userData.userMobileNum : 'Keine Daten'}
                                <br />
                                {(data && data.userData) ? data.userData.userMailadress : 'Keine Daten'}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="card bg-info rounded-corners">
                            
                                <form>
                                <h4 className="card-header text-center">
                                    Arbeitgeberdaten
                                </h4>
                                <div className="card-body">
                                <section>     
                                    <div className="row">         
                                    <div className="offset-1" />                  
                                    <div className="col-5">
                                        <div className="detailInfo">
                                            Firmenname
                                                <input
                                                required 
                                                id={'nameOfCompany'} 
                                                placeholder={'Musterfirma GmbH'} 
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
                                                Ansprechpartner
                                                    <input 
                                                    id={'contactPerson'} 
                                                    placeholder={'Frau / Herr Petra / Peter Müller'} 
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
                                                Strasse
                                                <input 
                                                    required
                                                    id={'street'} 
                                                    placeholder={'Musterstrasse'} 
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
                                                Haus-Nr.
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
                                                Postleitzahl
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
                                                Stadt
                                                <input
                                                    required 
                                                    id={'city'} 
                                                    placeholder={'Berlin / Hamburg / ...'} 
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
                                            placeholder={'Email hier eintragen'}
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
                                        <br />
                                </section>
                                </div>
                            </form>
                        
                        </div>
                    </div>       
                    </div>            
                    <div className="row">
                    <div className="offset-1" />
                    <div className="col-10">
                    <div className="card rounded-corners bg-info">
                    <form>
                    
                            <h4 className="card-header text-center">Stellenbezeichnung und Anschreibentext</h4>
                            <section>
                            <div className="row">
                            <div className="offset-1" />
                                <div className="col-4">
                                Betreff im Anschreiben 
                                <input
                                    required 
                                    id={'jobDescription'} 
                                    placeholder={'Stellenbezeichnung (z.B. Kaufmännische Fachkraft)'} 
                                    value={data.coverLetter.jobDescription} 
                                    type="text" 
                                    className="form-control" 
                                    onChange={(event)=>{
                                        this.props.onUpdate(event.target.id, event.target.value); 
                                    }}
                                />
                                
                                </div>
                                <div className="offset-1" />
                            </div>                                       
                    
                    
                            <div className="row">
                            <div className="offset-1" />
                            <div className="form-group">
                                <div className="col-12">
                                    Anschreibentext     
                                    <CKEditor
                                        editor={ ClassicEditor }
                                        config={{
                                           // plugins: [],       
                                            toolbar: ['undo', 'redo'],
                                            placeholder: "Sehr geehrte Frau / Sehr geehrter Herr / Sehr geehrte Damen und Herren,"
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
                                <div className="offset-1" />
                            </div>                                      
                            </section>
                    </form>
                    </div>
                    
                    </div>
                </div>

              
            </div>
        )
        
    }

} 

    

export default CoverLetter