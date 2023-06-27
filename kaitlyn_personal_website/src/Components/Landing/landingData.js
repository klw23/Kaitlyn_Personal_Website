import { useState, useEffect } from "react";

const LandingData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/landing")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error: " + response.statusText);
        }
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log("error retrieivng data for the landing page")
      });
  }, []);

  return { data };
};

export default LandingData;
