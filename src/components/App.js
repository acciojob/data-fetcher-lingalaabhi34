import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [datas, setDatas] = useState(null);

  useEffect(() => {
    getsomedata();
  }, []);

  const getsomedata = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => setDatas(response.data))
      .catch((err) => {
        console.error("Error fetching data:", err);
        setDatas("error");
      });
  };

  return (
    <div>
      {!datas ? (
        <h1>Loading...</h1>
      ) : datas === "error" ? (
        <h1>Error fetching data</h1>
      ) : (
        <pre>{JSON.stringify(datas, null, 2)}</pre>
      )}
    </div>
  );
};

export default App;
