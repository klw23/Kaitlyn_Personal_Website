import React , {useState} from 'react';
import Navigation from '../Navigation';
import ProjectsSquare from '../ProjectSquare';
import "./styles.css";
import {  Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Projects() {
    return (
        <>
            <Navigation />
            <div className="projects-container">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-12">
                            <h1 className="projects-header-title"> EXPLORE MY PROJECTS </h1>
                            <h1 className="projects-header-subtitle"> 
                            some of the projects below were completed in academic courses, and can be made public on github upon request 
                            <Nav.Link className="projects-header-contact-me" as={Link} to="/contact"> here  </Nav.Link>  </h1>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-4 col-lg-2">
                            <ProjectsSquare
                                photo="../../../images/sunset-photo.jpg"
                                projectName="Tetris"
                                videoPath="../../../images/randomVideo.mp4"
                                videoDescription=" Lorem Ipsum és un text de farciment usat per la indústria de la tipografia i la
                                Lorem Ipsum és un text de farciment usat per la indústria de la tipografia i la
                                Lorem Ipsum és un text de farciment usat per la indústria de la tipografia i la"
                                techStack="racket, java, visual studio code"
                            />
                        </div>
                        <div className="col-12 col-md-4 col-lg-2">
                            <ProjectsSquare
                                photo="../../../images/sunset-photo.jpg"
                                projectName="Tetris"
                                videoPath="../../../images/randomVideo.mp4"
                                videoDescription=".."
                                techStack="racket, java, visual studio code"
                            />
                        </div>
                        <div className="col-12 col-md-4 col-lg-2">
                            <ProjectsSquare
                                photo="../../../images/sunset-photo.jpg"
                                projectName="Tetris"
                                videoPath="../../../images/randomVideo.mp4"
                                videoDescription=".."
                                techStack="racket, java, visual studio code"
                            />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-4 col-lg-2">
                            <ProjectsSquare
                                photo="../../../images/sunset-photo.jpg"
                                projectName="Tetris"
                                videoPath="../../../images/randomVideo.mp4"
                                videoDescription=".."
                                techStack="racket, java, visual studio code"                            />
                        </div>
                        <div className="col-12 col-md-4 col-lg-2">
                            <ProjectsSquare
                                photo="../../../images/sunset-photo.jpg"
                                projectName="Tetris"
                                videoPath="../../../images/randomVideo.mp4"
                                videoDescription=".."
                                techStack="racket, java, visual studio code"
                            />
                        </div>
                        <div className="col-12 col-md-4 col-lg-2">
                            <ProjectsSquare
                                photo="../../../images/sunset-photo.jpg"
                                projectName="Tetris"
                                videoPath="../../../images/randomVideo.mp4"
                                videoDescription=".."
                                techStack="racket, java, visual studio code"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;
