import { useState, useEffect } from "react";

const ContactData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/contacts")
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
        console.log("error retrieving data for the contacts page")
      });
  }, []);

  return { data };
};

export default ContactData;
