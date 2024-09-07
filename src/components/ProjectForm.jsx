import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

function ProjectForm({ onAddProject, onCancelProject }) {
    const modal = useRef();

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSaveProject() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if(enteredTitle.trim() === '' || enteredDescription === '' || enteredDueDate === '') {
            modal.current.open();
            return;
        };

        onAddProject({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
        });
    }

    return(
        <>
            <Modal ref={modal} buttonCaption='Okay'>
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
                <p className="text-stone-600 mb-4">You forgot to enter a value.</p>
                <p className="text-stone-600 mb-4">Please make sure your provide a valid value for each field.</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <button 
                        className="text-stone-800 hover:text-stone-950" 
                        onClick={onCancelProject}
                    >
                        Cancel
                    </button>
                    <button
                        className=" px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                        onClick={handleSaveProject}
                    >
                        Save
                    </button>
                </menu>
                <div>
                    <Input 
                        ref={title}
                        type="text"
                        label='Title'
                        textArea={false}
                    />
                    <Input 
                        ref={description}
                        label='Description'
                        textArea={true}
                    />
                    <Input 
                        ref={dueDate}
                        type="date"
                        label='Due Date'
                        textArea={false}
                    />
                </div>
            </div>
        </>

    )
}

export default ProjectForm;