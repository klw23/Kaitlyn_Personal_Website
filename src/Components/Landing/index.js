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
    }, 500); // 1-second delay

    return () => clearTimeout(textTimer);
  }, []);

  const handleClick = () => {
    navigate("/about");
  };

  const { data } = LandingData();
  if (data === null) {
    console.log("loading page..")
  }
  else {
    return (
      <div
      className="landing-page"
      style={{
        backgroundImage: `url('${data[0].pathToBackgroundImage}')`,
      }}
      >
        <div className="container">
          <div className="row row-landing-page">
            <div className="col-sm-4 col-md-6 col-lg-8">
              {showText && (
                <>
                  <h1 className="landing-page-title">{data[0]?.title}</h1>
                  <div className="landing-page-learn-more-div">
                    <button onClick={handleClick} className="landing-page-learn-more-button">
                      LEARN MORE
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
