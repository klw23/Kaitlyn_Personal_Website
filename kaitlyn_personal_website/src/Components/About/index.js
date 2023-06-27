import React from "react";
import Navigation from '../Navigation'
import "./styles.css";
import AboutData from "./aboutData";

function About() {
  const { data } = AboutData();
  if (data === null) {
    return (
        <div className="loading-container">
                <img src="../../../images/spinner.svg" alt="Loading" className="spinner" />
        </div>
    )
  }
  if (data) {
    return (
      <><Navigation />
        <div className="about-container">
          <div className="row align-items-start justify-content-center text-center">
            <div className="col-sm-12 col-md-8">
              <h1 className="about-header-title"> {data[0]?.name}</h1>
              <img src={data[0].pathToHeadshot} className="img-fluid about-headshot" alt="Headshot" />
              <p className="about-paragraph">
                {data[0]?.description}
              </p>
              <a href={data[0]?.pathToResume} download={data[0]?.resume}>
                <button className="about-download-resume-button"> DOWNLOAD RESUME </button>
              </a>
              <div className="row align-items-start justify-content-center">
                <div className="col-sm-10 col-md-8 col-lg-6 text-center">
                  <h1 className="about-header-title"> EDUCATION </h1>
                  <p className="about-paragraph">
                    College: {data[0]?.college}
                    <br></br>
                    Major: {data[0]?.major}
                    <br></br>
                    Duration: {data[0]?.duration}
                    <br></br>
                    GPA: {data[0]?.gpa}
                    <br></br>
                    Relevant Courses:
                    <br></br>
                    {data[0]?.relevantCourses.map((course) => (
                      <span> {course} </span>
                      ))}
                  </p>
                </div>
                <div className="col-sm-10 col-md-8 col-lg-6 text-center">
                  <h1 className="about-header-title"> TECHNOLOGY </h1>
                  <p className="about-paragraph">
                   Languages: 
                   <br></br>
                   {data[0]?.languages.map((app) => (
                      <span> {app} </span>
                    ))}
                    <br></br>
                   Applications and Systems: 
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
