import React from 'react';
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import '@fortawesome/fontawesome-free/css/all.min.css';


function DialogBox(props) {
    if (!props.open) return null
    return (
        <><div className="modal-overlay show d-block"></div>
            <div className="modal show d-block" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title"> {props.projectName} </h5>
                            <button type="button" className="btn-close" onClick={props.handleClose}></button>

                        </div>
                        <div className="modal-body">
                            <div className="video-container">
                                <video className="video-project" controls>
                                    <source src={props.videoPath} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <p className="video-description">
                                    {props.videoDescription}
                                </p>
                                <div className="icon-container">
                                    <i className="fas fa-plus"></i>
                                    <span className="tech-stack">{props.techStack}</span>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <a className="link-to-github" href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <i className="icon-github fab fa-github fa-lg"></i>
                            </a>
                            <button type="button" className="btn-close" onClick={props.handleClose}></button>
                        </div>
                    </div>
                </div>
            </div></>
    );
}



export default DialogBox;
