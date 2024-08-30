function SlideBar({}) {
    return(
        <div className="flex flex-row">
            <div className="flex flex-col basis-1/3 bg-black text-white">
                <h2>YOUR PROJECTS</h2>
                <button>+ Add Project</button>
                {projects.map((project) => {
                    <button>{project.title}</button>
                })}
            </div>
        </div>
    )
}

export default SlideBar;