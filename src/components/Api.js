import React, { useState, useEffect } from "react";
import axios from "axios";

function Api() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("https://reactnd-books-api.udacity.com/books", {
        headers: { Authorization: "whatever-you-want" },
      })
      .then((res) => setdata(res.data.books));
  }, []);

  console.log(data);

  return (
    <div>
      <h1>Api</h1>
      <hr size="1px" width="100%" color="black" /> 
      {data.map((alt) => {
        return (
          <div>
            <div>
              <b>{alt.title}</b>
            </div>
            <div className="flex">
              <div>
                <img src={alt.imageLinks.smallThumbnail} alt="ghfgh" />
              </div>
              <div>
                <p>{alt.description}</p>
              </div>
            </div>
            <div>
              <b>{alt.authors}</b>
            </div>
            <hr size="1px" width="100%" color="black" />
          </div>
        );
      })}
    </div>
  );
}

export default Api;
