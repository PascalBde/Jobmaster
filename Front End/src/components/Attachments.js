import React, {Component} from "react"
import Upload from "rc-upload/lib/Upload";
import {Button} from "react-bootstrap";
import LoadingIndicator from "./LoadingIndicator";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Attachments extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isUploading: false
        }

        this.isUploadingToast = null;
    }

    render() {

        const {isUploading} = this.state;
        const uploaderProps = {
            action: 'http://localhost/pascal_be/upload.php/upload',
            data: { a: 1, b: 2 },
            multiple: true,
            beforeUpload: (file) => {
                console.log('beforeUpload', file.name);
            },
            onStart: (file) => {
                console.log('onStart', file.name);
                this.setState({isUploading: true});
                this.isUploadingToast = toast.info('Datei wird hochgeladen...', {
                    position: "top-center",
                    autoClose: false,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                });
            },
            onSuccess: (file) => {
                console.log('onSuccess', file);

                this.setState({isUploading: false});
                toast.dismiss(this.isUploadingToast);

                toast.success('Dateiupload erfolgreich.', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                });
            },
            onProgress: (step, file) => {
                console.log('onProgress', Math.round(step.percent), file.name);
            },
            onError: (err) => {
                console.log('onError', err);

                this.setState({isUploading: false});
            },
        };

        return (
            <div>
                <h2>Zeugnisse und Zertifikate der Bewerbung hinzufügen</h2>
                <div>
                    <Upload {...uploaderProps}>
                        <Button>Hinzufügen
                            {isUploading &&
                        <LoadingIndicator />
                        }
                        </Button>
                    </Upload>
                    <ToastContainer />
                </div>
            </div>
        );
    }
}

export default Attachments