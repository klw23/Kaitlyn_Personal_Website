import { useState, useEffect } from "react";

const ProjectData = () => {
  const [data, setData] = useState(null);
  let url = ""
  if (process.env.REACT_APP_API_BASE === undefined) {
    url = "http://localhost:4000/projects";
  }
  else {
    url = `${process.env.REACT_APP_API_BASE}projects`;
  }
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
        console.log("error retrieivng data for the project page")
      });
  }, []);

  return { data };
};

export default ProjectData;
