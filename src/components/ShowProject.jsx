import { useRef, useState } from "react";

function ShowProject({ project, onDeleteProject }) {
    const [currentTask, setCurrentTask] = useState({
        content: '',
    });

    const tasksList = useRef([]);

    function handleInputTask(e) {
        const {name, value} = e.target;

        setCurrentTask({
            [name]: value,
        });
    }

    function handleAddTask() {
        tasksList.current.push(currentTask);
        setCurrentTask({
            content: '',
        });

        console.log(tasksList.current);
    }

    function handleDeleteTask(task) {
        const taskIndex = tasksList.current.indexOf(task);
        tasksList.current.splice(taskIndex, 1);

        setCurrentTask({
            content: '',
        });
    }

    return(
        <>  
            <div id={`project ${project.title}`} >
                <hr/>
                <button onClick={() => onDeleteProject(project)}>Delete</button>
                <h2>{project.title}</h2>
                <p>{project.date}</p>
                <p>{project.description}</p>
                <hr/>
                <h2>Tasks</h2>
                <p>
                    <input 
                        type="text" 
                        name="content" 
                        id="task"
                        onChange={handleInputTask}
                        value={currentTask.content}
                    />
                    <button onClick={handleAddTask}>Add Task</button>
                </p>
                {tasksList.current.length !== 0
                    ?
                    tasksList.current.map((task, index) => 
                        <div key={index} id={`task${index}`}>
                            <p>{task.content}</p>
                            <button 
                                onClick={() => handleDeleteTask(task)}
                            >
                                Clear
                            </button>
                        </div>
                    )
                    :
                        <p>This project does not have any tasks yet.</p>
                }
            </div>
        </>
    )
}

export default ShowProject;
