import React from "react";
import Navigation from '../Navigation'
import "./styles.css";
import AboutData from "./aboutData";

function About() {
  const { data } = AboutData();
  if (data === null) {
    console.log("loading page..");
  } else {
    return (
      <>
        <Navigation />
        <div className="about-page-container">
          <div className="row align-items-start justify-content-center text-center">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="about-page-headshot-container">
                <img src={data[0].pathToHeadshot} className="img-fluid about-page-headshot" alt="Headshot" />
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="row align-items-start justify-content-center">
                <div className="col-sm-10 col-md-8">
                  <h1 className="about-page-header-title"> {data[0]?.name}</h1>
                  <p className="about-page-description">
                    {data[0]?.description}
                  </p>
                  <a href={data[0]?.pathToResume} download={data[0]?.resume}>
                    <button className="about-page-download-resume-button"> DOWNLOAD RESUME </button>
                  </a>
                </div>
              </div>
              <div className="row align-items-start justify-content-center">
                <div className="col-sm-10 col-md-8 col-lg-6">
                  <h1 className="about-page-header-title"> EDUCATION </h1>
                  <p className="about-page-education-technology">
                    <span className="about-page-list-title"> Relevant Courses :</span>
                    {/* <span> : </span> */}
                    <br></br>
                    {data[0]?.relevantCourses.map((course) => (
                      <span> {course} </span>
                    ))}
                  </p>
                </div>
                <div className="col-sm-10 col-md-8 col-lg-6">
                  <h1 className="about-page-header-title"> TECHNOLOGY </h1>
                  <p className="about-page-education-technology">
                  <span className="about-page-list-title"> Languages : </span>
                    {/* <span> : </span> */}
                    <br></br>
                    {data[0]?.languages.map((app) => (
                      <span> {app} </span>
                    ))}
                    <br></br>
                    <br></br>
                    <span className="about-page-list-title"> Applications and Systems :</span>
                    {/* <span> : </span>                     */}
                    <br></br>
                    {data[0]?.appsAndSystems.map((app) => (
                      <span> {app} </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About;
