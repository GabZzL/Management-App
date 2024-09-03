function SlideBar({ projects, onCreateProject, onShowProject }) {
    console.log(projects);

    return(
        <div className="flex flex-row">
            <div className="flex flex-col basis-1/3 bg-black text-white">
                <h2>YOUR PROJECTS</h2>
                <button onClick={onCreateProject}>+ Add Project</button>
                {projects.map((project, index) => 
                    <p 
                        key={index} 
                        onClick={() => onShowProject(index)}
                    >
                        {project.title}
                    </p>
                )}
            </div>
        </div>
    )
};

export default SlideBar;