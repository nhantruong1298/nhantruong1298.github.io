import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
    </Routes>
  );
}

export default App;
