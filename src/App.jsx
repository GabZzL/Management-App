import SlideBar from "./components/SliderBar";
import MenuProjects from "./components/MenuProjects";
import ProjectForm from "./components/ProjectForm";
import ShowProject from "./components/ShowProject"
import { useRef, useState } from "react";

function App() {
  const [isCreatedProject, setIsCreatedProject] = useState(false);
  // const [isShowProject, setIsShowProject] = useState(false);
  const [currentProject, setCurrentProject] = useState(false);
  const [projectData, setProjectData] = useState({
    title: '',
    description: '',
    date: '',
  });

  const projectList = useRef([]);
  
  function handleCreateProject() {
    setCurrentProject(false);
    setIsCreatedProject(true);
  };

  function handleChange(e) {
    const {name, value} = e.target;

    setProjectData({
        ...projectData,
        [name]: value
    });
  };

  function handleSaveProject() {
    console.log('save');
    console.log(projectData);

    projectList.current.push(projectData);

    setIsCreatedProject(false);

    setProjectData({
        title: '',
        description: '',
        date: '',
        tasks: [],
    });
  };

  function handleCancelProject() {
    console.log('cancel');
    setIsCreatedProject(false);
  };

  function handleShowProject(index) {
    setCurrentProject(projectList.current[index]);
    setIsCreatedProject(false);
  }

  function handleDeleteProject(project) {
    const projectIndex = projectList.current.indexOf(project);
    projectList.current.splice(projectIndex, 1);
    setCurrentProject(false);
  }

  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1>
      <SlideBar 
        projects={projectList.current}
        onCreateProject={handleCreateProject}
        onShowProject={handleShowProject}
      />
      {!isCreatedProject ? <MenuProjects onCreateProject={handleCreateProject}/> : null}
      {isCreatedProject && 
        <ProjectForm 
            onChangeInput={handleChange}
            onSaveProject={handleSaveProject}
            onCancelProject={handleCancelProject}
            data={projectData}
        />
      }
      {currentProject ? 
        <ShowProject 
          project={currentProject}
          onDeleteProject={handleDeleteProject}
        /> 
        : 
        null
      }
    </>
  );
}

export default App;
