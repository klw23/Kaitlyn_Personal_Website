import { useState, useEffect } from "react";

const LandingData = () => {
  const [data, setData] = useState(null);
  let url = ""
  if (process.env.REACT_APP_API_BASE === undefined) {
    url = "http://localhost:4000/landing";
  }
  else {
    url = `${process.env.REACT_APP_API_BASE}landing`;
  }
  console.log("url ", url)
  useEffect(() => {
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
        console.log("error retrieivng data for the landing page")
      });
  }, []);

  return { data };
};

export default LandingData;
