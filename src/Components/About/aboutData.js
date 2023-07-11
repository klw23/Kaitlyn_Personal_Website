import { useState, useEffect } from "react";

const AboutData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/about")
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
        console.log("error retrieivng data for the about page")
      });
  }, []);

  return { data };
};

export default AboutData;
