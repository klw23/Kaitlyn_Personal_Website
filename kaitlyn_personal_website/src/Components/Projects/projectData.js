import { useState, useEffect } from "react";

const ProjectData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/projects")
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
