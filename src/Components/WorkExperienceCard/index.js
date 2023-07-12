import React from "react";
import "./styles.css";

function WorkExperienceCard(props) {
    return (
        <>
            <div className="experience-card-container">
                <div className="row row-work-experience-card align-items-start justify-content-center">
                    <div className="col-sm-12 col-md-8 col-lg-3">
                        <p className="work-experience-card-header-small-title mb-1">
                            {props.title}
                        </p>
                        <p className="work-experience-card-header-duration-title">
                            {props.duration}
                        </p>
                        <img src={props.pathToImage} className="img-fluid work-experience-card-company-photo" alt="company" />
                    </div>
                    <div className="col-sm-12 col-md-8 col-lg-6">
                        <p className="work-experience-card-paragraph">
                            <ul>
                            {props?.description.map((bullet) => (
                                <li> {bullet} </li>
                            ))}
                            </ul>
                           
                        </p>
                    </div>
                </div>
            </div>

        </>
    )

}

export default WorkExperienceCard;
