import { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/message")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMessage(data.message);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <>
      <h1>Hello World</h1>
      <p>{message}</p>
    </>
  );
}

export default App;
