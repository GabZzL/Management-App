function ProjectForm({ onChangeInput, onSaveProject, data }) {



    return(
        <div>
            <p>
                <label htmlFor="title">TITLE</label>
                <input 
                    type="text" 
                    id="title" 
                    name="title" 
                    onChange={onChangeInput}
                    value={data.name}
                />
            </p>
            <p>
                <label htmlFor="description">DESCRIPTION</label>
                <input 
                    type="text" 
                    id="description" 
                    name="description" 
                    onChange={onChangeInput}
                    value={data.description}
                />
                    
            </p>
            <p>
                <label htmlFor="date">DUE DATE</label>
                <input 
                    type="text" 
                    id="date" 
                    name="date" 
                    onChange={onChangeInput}
                    value={data.date}
                />
            </p>
            <button className="m-1" onClick={onSaveProject}>Save</button>
            <button className="m-1">Cancel</button>
        </div>
    )
}

export default ProjectForm;