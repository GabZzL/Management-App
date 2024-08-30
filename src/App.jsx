import SlideBar from "./components/SliderBar";
import DisplayProjects from "./components/DisplayProjects";
import { useRef, useState } from "react";

function App() {
  const [projects, setProjects] = useState([]);

  function addProject() {
    
  }

  function showProject() {
    console.log(projects.current);
  };

  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1>
      <button onClick={showProject}>Show Project</button>
      <SlideBar projects={projects.current}/>
      <DisplayProjects addProject={addProject}/>
    </>
  );
}

export default App;
