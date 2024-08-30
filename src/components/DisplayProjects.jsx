import { forwardRef, useState } from "react";
import EmptyProjects from "./EmptyProjects";
import ProjectForm from "./ProjectForm";

let projectList = [];

const DisplayProjects = forwardRef(function DisplayProjects({ addProject }, ref) {
    const [isCreatedProject, setIsCreatedProject] = useState(false);
    const [projectData, setProjectData] = useState({
        title: '',
        description: '',
        date: '',
    });

    function handleCreateProject() {
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

        projectList.push(projectData);

        // add project list

        setIsCreatedProject(false);

        setProjectData({
            title: '',
            description: '',
            date: '',
        });
    };

    return(
        <>
            {!isCreatedProject ? <EmptyProjects createProject={handleCreateProject}/> : null}
            {isCreatedProject && 
                <ProjectForm 
                    onChangeInput={handleChange}
                    onSaveProject={handleSaveProject}
                    data={projectData}
                />
            }
        </>
    );
});

export default DisplayProjects;