import NoProjectsPng from '../assets/no-projects.png';

function EmptyProjects({ createProject }) {
    return(
        <div className="flex flex-row-reverse basis-2/3">
            <div className="flex flex-col">
                <img src={NoProjectsPng} alt="NoProjectsPng" className="w-28"/>
                <h3>No Project Selected</h3>
                <p>Select a project or get started with a new one</p>
                <button onClick={createProject}>Create New Project</button>
            </div>

        </div>
    )
}

export default EmptyProjects;