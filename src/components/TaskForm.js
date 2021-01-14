import React, { useState, useEffect, useRef } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TaskForm(props) {

    const [input, setInput] = useState(props.edit ? props.edit.value : "")

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault()


        if (props.edit) {
            props.onSubmit(input)
            setInput("")
        }
        else {
            props.onSubmit({
                id: Math.floor(Math.random() * 10000),
                text: input,
                isComplete: false
            })
            setInput("")
        }
    }

    return (
        <form className="task-form" onSubmit={handleSubmit}>

            {props.edit ? (
                <>
                    <input
                        type="text"
                        placeholder="Update Task"
                        value={input}
                        name="text"
                        className="task-input"
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button className="task-button">Update Task</button>
                </>
            ) : (
                    <>
                        <input
                            type="text"
                            placeholder="Add a Task"
                            value={input}
                            name="text"
                            className="task-input"
                            onChange={handleChange}
                            ref={inputRef}
                        />
                        <button className="task-button">Add Task</button>
                    </>)
            }
            <ToastContainer />
        </form>
    );
}

export default TaskForm;