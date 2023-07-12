import { useState, useEffect } from "react";

const NavData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE}nav`)
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
        console.log("error retrieivng data for the nav page")
      });
  }, []);

  return { data };
};

export default NavData;
