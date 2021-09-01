import React, {Component} from "react";
import {Button} from "react-bootstrap";

class Attachments extends Component {
    constructor(props) {
        super(props)

        this.state = {}

        this.onFileChange = this.onFileChange.bind(this);
        this.onFileUpload = this.onFileUpload.bind(this);
    }

    onFileChange(event, key) {
        this.setState({
            [key]: event.target.files[0]
        });
    };

    onFileUpload(event) {
        event.preventDefault();

        let {
            selectedFile,
            uploadedFiles
        } = this.props.data;

        uploadedFiles.push({
            selectedFile
        });
        console.log(uploadedFiles)
        this.props.onUpdate({uploadedFiles})
    };

    

    render() {
        const fileData = this.props.data;
        let fileView = fileData.uploadedFiles;

        return (
            <div>
                <h2>Zeugnisse und Zertifikate der Bewerbung hinzufügen</h2>
                <div>
                    <form onSubmit={this.onFileUpload}>
                    <input 
                    type="file"
                    id={'selectedFile'}
                    style={{color: "skyblue", borderRadius: "10px"}}
                    onChange={(event)=>{
                    this.props.onUpdate(event.target.id, event.target.files[0])
                    }} />
                    <Button type="submit">
                        Datei hochladen
                    </Button>
                    </form>
                </div>
                <div>
                <img src={fileView.File} alt="" />
                </div>
            </div>
        );
    }
}   

export default Attachments