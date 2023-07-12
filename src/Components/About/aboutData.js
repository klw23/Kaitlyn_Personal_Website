import { useState, useEffect } from "react";

const AboutData = () => {
  const [data, setData] = useState(null);
  let url = ""
  if (process.env.REACT_APP_API_BASE === undefined) {
    url = "http://localhost:4000/about";
  }
  else {
    url = `${process.env.REACT_APP_API_BASE}about`;
  }  useEffect(() => {
    fetch(url)
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
