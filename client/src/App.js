import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom"
import Layout from "./Layout/Layout"

// import { fetchApiTest } from "./utils/api";

function App() {

  return (
    <BrowserRouter>
        <Layout/>
    </BrowserRouter>
  );
}

export default App;
