import Button from "./Button";

function SlideBar({ projects, onCreateProject, onSelectProject, selectedProjectId }) {
    
    return(
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">YOUR PROJECTS</h2>
            <div>
                <Button
                    onClick={onCreateProject}
                >
                    + Add Project
                </Button>
                <ul className="mt-8">
                    {projects.map((project) => {
                        let classes = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

                        if(project.id === selectedProjectId){
                            classes += ' bg-stone-800 text-stone-200' 
                        } else {
                            classes += ' text-stone-400';
                        }

                        return(
                            <li key={project.id} >
                                <button 
                                    onClick={() => onSelectProject(project.id)}
                                    className={classes}
                                >
                                    {project.title}
                                </button>
                            </li>
                        )
                    }

                    )}
                </ul>

            </div>
        </aside>
    )
};

export default SlideBar;