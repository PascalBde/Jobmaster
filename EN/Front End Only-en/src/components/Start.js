import React, {Component} from "react";
import Accordion from 'react-bootstrap/Accordion';
import { Button, Card } from "react-bootstrap";

class Start extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <div>
                <div className="row mb-3">
                    <div className="col-12">
                        <div>
                            <h1 className="startHeader">Welcome to the Jobmaster!</h1>
                            <p className="infoText">
                            Here is an introduction to the Jobmaster web program with a more detailed explanation of the features available.
                            </p>
                            <br />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <Accordion>
                            <Card className="appInfo">
                                <Card.Header >
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0" >
                                        <p className="acctitle">What is the Jobmaster?</p>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <p className="infoText">
                                        The Jobmaster is simply and directly said a web program for quickly creating, editing and sending a complete email application. This includes a cover letter, a résumé and attachments such as references and certificates.  
                                        </p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card className="appInfo">
                                <Card.Header >
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1" >
                                        <p className="acctitle">What are the basic features of Jobmaster?</p>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <p className="infoText">
                                        Jobmaster includes the basic features of Applicant Data, Cover Letter, Curricullum Vitae and Overview. Attachments and sending via Email are still in development. 
                                        </p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card className="appInfo">
                                <Card.Header >
                                    <Accordion.Toggle as={Button} variant="link" eventKey="2" >
                                        <p className="acctitle">What does the Applicant Data feature do?</p>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body>
                                        <p className="infoText">
                                        With the feature Applicant Data, the necessary data of the applicant is recorded. In addition to personal data such as name, address, birthday; professional and personal skills (such as MS Office, accounting, customer service, ... / communicative, teamplayer, reliable, ...) can also be added to the personal profile. These then appear with the personal details in the curriculum vitae.
                                        </p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card className="appInfo">
                                <Card.Header >
                                    <Accordion.Toggle as={Button} variant="link" eventKey="3" >
                                        <p className="acctitle">What does the Cover Letter feature do?</p>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="3">
                                    <Card.Body>
                                        <p className="infoText">
                                        With the Cover Letter feature, the data of the employer for whose position you want to apply is recorded, whereby the email address is of course an indispensable piece of information. The job title is also the subject in the cover letter, and the date of the application should also not be missing. Then you can enter the cover text in a text field. This information is then summarized in an orderly curriculum vitae with the applicant's personal data and formatted as we know it from MS Word, for example.
                                        </p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card className="appInfo">
                                <Card.Header >
                                    <Accordion.Toggle as={Button} variant="link" eventKey="4" >
                                        <p className="acctitle">What does the Curricullum Vitae feature do?</p>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="4">
                                    <Card.Body>
                                        <p className="infoText">
                                        The Curriculum Vitae feature creates a tabular curriculum vitae that begins with the employment relationship and works its way back to the past in chronological order through vocational training or studies to completed internships. This data is then formatted, sorted and added to the CV.
                                        </p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card className="appInfo">
                                <Card.Header >
                                    <Accordion.Toggle as={Button} variant="link" eventKey="5" >
                                        <p className="acctitle">What does the Overview feature do?</p>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="5">
                                    <Card.Body>
                                        <p className="infoText">
                                        With the feature Overview you can check the entered data and texts again and correct any errors. You also get a preview of how the application will be received by the employer.
                                        </p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </div>
                </div>
            </div>
        )
    }
}

export default Start