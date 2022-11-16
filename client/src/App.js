import axios from "axios";
import { useEffect } from "react";

function App() {
  // CONNECTION TO API
  // IT IS PROXY: FIND WITH /route

  const fetchApiTest = async () => {
    await axios
      .get("/api/v1/test")
      .then((serverRes) => console.log(serverRes.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchApiTest();
  }, []);

  return (
    <div className="App">
      <h1>Borrow App</h1>
    </div>
  );
}

export default App;
