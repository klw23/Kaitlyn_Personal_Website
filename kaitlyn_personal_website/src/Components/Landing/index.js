import React, { useState, useEffect } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [showText, setShowText] = useState(false);


  useEffect(() => {
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 200); // 1-second delay

    return () => clearTimeout(textTimer);
  }, []);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 700); // Adjust the delay time as needed

  //   return () => clearTimeout(timer);
  // }, []);

  const handleClick = () => {
    navigate("/about");
  };

  // if (isLoading) {
  //   return (
  //     <div className="landing-loader-container">
  //       <img src="../../../images/spinner.svg" alt="Loader" className="loader" />
  //     </div>
  //   );
  // }


  return (
    <div className="landing">
      <div className="container">
        <div className="row row-landing">
          <div className="col-sm-4 col-md-6 col-lg-8">
            {showText && (
              <>
                <h1 className="landing-title">Hi, I'm Kaitlyn</h1>
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

export default Landing;
