import React from "react";
import Navigation from '../Navigation'
import "./styles.css";

function About() {

  return (
    <><Navigation />
      <div className="about-container">
        <div className="row align-items-start justify-content-center text-center">
          <div className="col-sm-12 col-md-8">
            <h1 className="about-header-title"> KAITLYN WONG </h1>
            <img src="../../../images/photo.jpeg" className="img-fluid about-headshot" alt="Headshot" />
            <p className="about-paragraph">
              Lorem Ipsum és un text de farciment usat per la indústria de la tipografia i la
              Lorem Ipsum és un text de farciment usat per la indústria de la tipografia i la
              Lorem Ipsum és un text de farciment usat per la indústria de la tipografia i la
              Lorem Ipsum és un text de farciment usat per la indústria de la tipografia i la
            </p>
            <button className="about-download-resume-button"> DOWNLOAD RESUME </button>
            <div className="row align-items-center justify-content-center">
              <div className="col-sm-10 col-md-8 col-lg-6 text-center">
                <h1 className="about-header-title"> EDUCATION </h1>
                <p className="about-paragraph">
                  Lorem Ipsum és un text de farciment usat per la indústria de la tipografia i la
                  Lorem Ipsum és un text de farciment usat per la indústria de la tipografia i la
                  Lorem Ipsum és un text de farciment usat per la indústria de la tipografia i la
                  Lorem Ipsum és un text de farciment usat per la indústria de la tipografia i la
                </p>
              </div>
              <div className="col-sm-10 col-md-8 col-lg-6 text-center">
                <h1 className="about-header-title"> TECHNOLOGY </h1>
                <p className="about-paragraph">
                  Lorem Ipsum és un text de farciment usat per la indústria de la tipografia i la
                  Lorem Ipsum és un text de farciment usat per la indústria de la tipografia i la
                  Lorem Ipsum és un text de farciment usat per la indústria de la tipografia i la
                  Lorem Ipsum és un text de farciment usat per la indústria de la tipografia i la
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </>
  );
}

export default About;
