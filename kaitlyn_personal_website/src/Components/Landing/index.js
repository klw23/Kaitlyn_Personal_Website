import React, { useState, useEffect } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import LandingData from "./landingData";

function Landing() {
  const navigate = useNavigate();
  const [showText, setShowText] = useState(false);


  useEffect(() => {
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 100); // 1-second delay

    return () => clearTimeout(textTimer);
  }, []);

  const handleClick = () => {
    navigate("/about");
  };

  const { data } = LandingData();

  if (data === null) {
    return (
      <div className="loading-container">
                <img src="../../../images/spinner.svg" alt="Loading" className="spinner" />
      </div>
    )
  }
  if (data) {
    return (
      <div className="landing">
        <div className="container">
          <div className="row row-landing">
            <div className="col-sm-4 col-md-6 col-lg-8">
              {showText && (
                <>
                  <h1 className="landing-title">{data[0]?.title}</h1>
                  <div className="landing-learn-more-div">
                    <button onClick={handleClick} className="landing-learn-more-button">
                      Learn More
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
