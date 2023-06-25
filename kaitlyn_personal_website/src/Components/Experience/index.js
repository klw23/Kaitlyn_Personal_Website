import React, { useState } from "react";
import Navigation from '../Navigation'
import "./styles.css";
import WorkExperienceCard from '../../WorkExperienceCard/index.js'

function Experience() {
    const [activeTab, setActiveTab] = useState("Work");

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
    return (
        <>
            <Navigation />
            <div className="experience-container">
                <div className="row align-items-start justify-content-center text-center">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <h1 className="experience-header-title"> EXPERIENCE </h1>
                        <div className="tab-buttons">
                            <button
                                className={activeTab === "Work" ? "activeTab" : "not-active"}
                                onClick={() => handleTabChange("Work")}
                            >
                                Work
                            </button>
                            <button
                                className={activeTab === "Teaching" ? "activeTab" : "not-active"}
                                onClick={() => handleTabChange("Teaching")}
                            >
                                Teaching
                            </button>
                            <button
                                className={activeTab === "Activities" ? "activeTab" : "not-active"}
                                onClick={() => handleTabChange("Activities")}
                            >
                                Activities
                            </button>
                        </div>
                        {activeTab === 'Work' &&
                            <><WorkExperienceCard
                                company={"Front End Engineer Intern @ Priceline"}
                                duration={"February - June 2023"}
                                photo={"../../../images/priceline.png"}
                                description={"Lorem Ipsum és un text de farciment usat per la indústria de la tipografia i la Lorem Ipsum és un text de farciment usat per la indústria de la tipografia i la Lorem Ipsum és un text de farciment usat per la indústria de la tipografia i la"} /><WorkExperienceCard
                                    company={"Software Engineer Intern @ Smartleaf"}
                                    duration={"February - June 2023"}
                                    photo={"../../../images/smartleaf.jpg"}
                                    description={"Lorem Ipsum és un text de farciment usat per la indústria de la tipografia i la Lorem Ipsum és un text de farciment usat per la indústria de la tipografia i la Lorem Ipsum és un text de farciment usat per la indústria de la tipografia i la"} /></>
                        }
                            
                    </div>
                </div>
            </div>
        </>

    )

}

export default Experience;
