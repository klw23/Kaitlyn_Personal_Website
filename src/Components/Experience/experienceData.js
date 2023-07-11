import { useState, useEffect } from "react";

const ExperienceData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/experience")
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
        console.log("error retrieving data for the experience page")
      });
  }, []);

  return { data };
};

export default ExperienceData;
