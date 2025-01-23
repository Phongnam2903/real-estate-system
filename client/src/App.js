import React, { useState } from "react";

function App() {
  const [data, setData] = useState("");

  const connectToBackend = () => {
    fetch("/api")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setData(data.message))
      .catch((error) => console.error("Error fetching data:", error));
  };

  return (
    <div className="App">
      <h1>React Website with an Express backend</h1>
      <button onClick={connectToBackend}>Send Request to Backend</button>
      <p>{data}</p>
    </div>
  );
}

export default App;

