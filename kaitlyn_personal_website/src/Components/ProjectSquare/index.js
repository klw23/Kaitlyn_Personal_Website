import React, { useState } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import DialogBox from '../DialogBox';  // path to your DialogBox component


function ProjectsSquare(props) {
    const [dialogOpen, setDialogOpen] = useState(false);

    function handleProjectPhotoClick() {
        setDialogOpen(true);
    }

    function handleCloseDialog() {
        setDialogOpen(false);
    }



    return (
        <>
            <DialogBox open={dialogOpen} handleClose={handleCloseDialog} {...props} />
            <div className="projects-square-container">
                <button className="project-square-button">
                        <img
                            src={props.photo}
                            className="img-fluid project-photo"
                            alt="project"
                            onClick={handleProjectPhotoClick}
                        />
                    <img src={props.photo} className="img-fluid project-photo" alt="project" onClick={handleProjectPhotoClick} />
                </button>
            </div>
        </>
    );
}

export default ProjectsSquare;
