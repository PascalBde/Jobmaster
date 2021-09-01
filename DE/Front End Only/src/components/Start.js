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
                            <h1 className="startHeader">Willkommen beim Jobmaster!</h1>
                            <p className="infoText">
                                Hier ist eine Einführung in das Webprogramm Jobmaster mit genaueren Erklärungen der verfügbaren Features.
                            </p>
                            <br />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                    <div >
                        <Accordion>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0" >
                                        <h2 className="acctitle">Was ist der Jobmaster?</h2>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <p className="infoText">
                                            Der Jobmaster ist einfach und direkt gesagt ein Webprogramm zum schnellen erstellen, bearbeiten und versenden einer vollständigen Email-Bewerbung. Diese beinhaltet ein Anschreiben, einen Lebenslauf und Anhänge wie Zeugnisse und Zertifikate.  
                                        </p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card className="appInfo">
                                <Card.Header >
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1" >
                                        <p className="acctitle">Welche grundlegenden Features hat Jobmaster?</p>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <p className="infoText">
                                            Jobmaster beinhaltet die grundlegenden Features Bewerberdaten, Anschreiben, Lebenslauf und Übersicht. Anhänge und Versand per Email sind noch in der Entwicklung. 
                                        </p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card className="appInfo">
                                <Card.Header >
                                    <Accordion.Toggle as={Button} variant="link" eventKey="2" >
                                        <p className="acctitle">Was macht das Feature Bewerberdaten?</p>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body>
                                        <p className="infoText">
                                            Mit dem Feature Bewerberdaten werden die nötigen Daten der/des Bewerberin/Bewerbers erfasst. Neben den persönlichen Daten wie Name, Anschrift, Geburtstag etc. können auch berufliche und Persönliche Fähigkeiten wie zb MS Office, Buchhaltung, Kundenservice etc. /  Kommunikativ, Teamfähig, Zuverlässig etc. dem persönlichen Profil hinzugefügt werden. Diese erscheinen dann mit den persönlichen Angaben im Lebenslauf.
                                        </p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card className="appInfo">
                                <Card.Header >
                                    <Accordion.Toggle as={Button} variant="link" eventKey="3" >
                                        <p className="acctitle">Was macht das Feature Anschreiben?</p>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="3">
                                    <Card.Body>
                                        <p className="infoText">
                                            Mit dem Feature Anschreiben werden die Daten des Arbeitgebers auf dessen Stelle man sich bewerben möchte erfasst, wobei natürlich die Email-Adresse eine unverzichtbare Angabe ist. Die Stellenbezeichnung ist auch gleichzeitig der Betreff im Anschreiben, ebenso sollte auch das Datum der Bewerbung nicht fehlen. Danach kann man dann den Anschreibentext in einem Textfeld eingeben. Diese Angaben werden dann zu einem geordneten Lebenslauf mit den persönlichen Daten der/des Bewerberin/Bewerbers zussammengefasst und so formatiert wie man es zb von MS Word kennt.
                                        </p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card className="appInfo">
                                <Card.Header >
                                    <Accordion.Toggle as={Button} variant="link" eventKey="4" >
                                        <p className="acctitle">Was macht das Feature Lebenslauf?</p>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="4">
                                    <Card.Body>
                                        <p className="infoText">
                                            Mit dem Feature Lebenslauf wird ein tabellarischer Lebenslauf erstellt der mit dem Arbeitsverhältnis anfängt und sich chronologisch über die berufliche Ausbildung bzw. Studium bis zu absolvierten Praktika in die Vergangenheit durcharbeitet. Diese Daten werden dann formatiert, sortiert und dem Lebenslauf hinzugefügt.
                                        </p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card className="appInfo">
                                <Card.Header >
                                    <Accordion.Toggle as={Button} variant="link" eventKey="5" >
                                        <p className="acctitle">Was macht das Feature Übersicht?</p>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="5">
                                    <Card.Body>
                                        <p className="infoText">
                                            Mit dem Feature Übersicht kann man die eingebenen Daten und Texte noch einmal überprüfen und eventuelle Fehler korrigieren. Ebenso erhält man eine Vorschau darüber wie die Bewerbung beim Arbeitgeber ankommt.
                                        </p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Start