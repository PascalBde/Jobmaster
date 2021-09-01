import React from "react";
import {Component} from "react";

class EmployerData extends Component {
    constructor(props) {
        super(props);

        this.state = {}
        
       // this.agDataSubmit = this.agDataSubmit.bind(this)
       // console.log(this.props.employerData);      
    }

    render() {
        console.log(this.props);
        const {data} = this.props;
        return(
            <div>
                <div className="column">
                    <div className="col-8">
                        <form className="employerform">
                            <div className="col-12">
                                <h3 className="employerHeader">
                                    Employer data
                                </h3>
                            </div> 
                                <section>                                
                                    <div className="col-12">
                                        <div className="detailInfo">
                                            Company name
                                                <input 
                                                id={'nameOfCompany'} 
                                                placeholder={'Company'} 
                                                value={data.nameOfCompany} 
                                                type="text" 
                                                className="form-control" 
                                                onChange={(event)=>{
                                                    this.props.onUpdate(event.target.id, event.target.value); 
                                                }}
                                            />
                                        </div>                                        
                                    </div>                                
                                        <div className="col-8">
                                            <div className="detailInfo">
                                                Contact Person
                                                    <input 
                                                    id={'contactPerson'} 
                                                    placeholder={'Ms. / Mr. Smith'} 
                                                    value={data.contactPerson} 
                                                    type="text" 
                                                    className="form-control" 
                                                    onChange={(event)=>{
                                                        this.props.onUpdate(event.target.id, event.target.value); 
                                                    }}
                                                />
                                            </div>                                          
                                        </div>
                                        <div className="col-12">
                                            <div className="detailInfo">
                                                Street
                                                <input 
                                                    id={'street'} 
                                                    placeholder={'Street'} 
                                                    value={data.street} 
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
                                                    id={'housenumber'} 
                                                    placeholder={'123'} 
                                                    value={data.housenumber} 
                                                    type="text" 
                                                    className="form-control" 
                                                    onChange={(event)=>{
                                                        this.props.onUpdate(event.target.id, event.target.value); 
                                                    }}
                                                />
                                            </div>                                        
                                        </div> 
                                        <div className="col-3">
                                            <div className="detailInfo">
                                                Post Code
                                                <input 
                                                    id={'postcode'} 
                                                    placeholder={'12345'} 
                                                    value={data.postcode} 
                                                    type="text" 
                                                    className="form-control" 
                                                    onChange={(event)=>{
                                                        this.props.onUpdate(event.target.id, event.target.value); 
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="detailInfo">
                                                Stadt
                                                <input 
                                                    id={'city'} 
                                                    placeholder={'Berlin / Paris / New York ...'} 
                                                    value={data.city} 
                                                    type="text" 
                                                    className="form-control" 
                                                    onChange={(event)=>{
                                                        this.props.onUpdate(event.target.id, event.target.value); 
                                                    }}
                                                />
                                            </div>                                        
                                        </div>
                                </section>
                            </form>
                    </div>
                </div>
            </div>
        )
    }
}


export default EmployerData