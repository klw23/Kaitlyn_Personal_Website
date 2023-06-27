import React from 'react';
import Navigation from '../Navigation';
import ProjectsSquare from '../ProjectSquare';
import "./styles.css";
import { Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import ProjectData from './projectData';
function Projects() {
    const { data } = ProjectData();
    if (data === null) {
        return (
            <div className="loading-container">
                <img src="../../../images/spinner.svg" alt="Loading" className="spinner" />
            </div>
        )
    }
    const groupsOfThree = [];
    console.log("data ", data)
    for (let i = 0; i < data.length; i += 3) {
        groupsOfThree.push(data.slice(i, i + 3));
    }
    if (data) {
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
                            {groupsOfThree.map((row, rowIndex) => (
                                <div className="row justify-content-center" key={rowIndex}>
                                    {row.map((item, columnIndex) => (
                                        <div className="col-12 col-md-4 col-lg-2" key={columnIndex}>
                                            <ProjectsSquare
                                                photo={item.pathToimage}
                                                projectName={item.nameOfProject}
                                                videoPath={item.pathToVideo}
                                                videoDescription={item.description}
                                                techStack={item.techStack}
                                            />
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default Projects;
