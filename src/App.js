import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Resume from "./routes/resume/resume.component";
import Projects from "./routes/projects/projects.component";

import "./App.css";
import Contact from "./routes/contact/contact.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation></Navigation>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="resume" element={<Resume></Resume>}></Route>
        <Route path="projects" element={<Projects></Projects>}></Route>
        <Route path="contact" element={<Contact></Contact>}></Route>


      </Route>
    </Routes>
  );
}

export default App;
