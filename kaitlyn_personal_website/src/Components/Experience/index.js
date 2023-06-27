import React, { useState } from "react";
import Navigation from '../Navigation'
import "./styles.css";
import WorkExperienceCard from '../WorkExperienceCard/index.js'
import ExperienceData from "./experienceData";

function Experience() {
    const { data } = ExperienceData();
    const [activeTab, setActiveTab] = useState("Work");

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    if (data === null) {
        return (
            <div className="loading-container">
                <img src="../../../images/spinner.svg" alt="Loading" className="spinner" />
            </div>
        )
      }

    if (data) {
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
                               <>
                               {data
                                 .filter((item) => item.typeOfExperience === 'Work')
                                 .map((item) => (
                                   <WorkExperienceCard
                                     key={item._id}
                                     title={item.titleOfJob}
                                     duration={item.duration}
                                     description={item.description}
                                     pathToImage={item.pathToImage}
                                   />
                                 ))}
                             </>
                            }
                              {activeTab === 'Teaching' &&
                               <>
                               {data
                                 .filter((item) => item.typeOfExperience === 'Teaching')
                                 .map((item) => (
                                   <WorkExperienceCard
                                     key={item._id}
                                     title={item.titleOfJob}
                                     duration={item.duration}
                                     description={item.description}
                                     pathToImage={item.pathToImage}
                                   />
                                 ))}
                             </>
                            }
                            {activeTab === 'Activities' &&
                               <>
                               {data
                                 .filter((item) => item.typeOfExperience === 'Activities')
                                 .map((item) => (
                                   <WorkExperienceCard
                                     key={item._id}
                                     title={item.titleOfJob}
                                     duration={item.duration}
                                     description={item.description}
                                     pathToImage={item.pathToImage}
                                   />
                                 ))}
                             </>
                            }

                        </div>
                    </div>
                </div>
            </>

        )
    }
}

export default Experience;
