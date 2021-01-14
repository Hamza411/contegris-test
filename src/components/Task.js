import React, { useState } from 'react';
import TaskForm from './TaskForm';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';


function Task(props) {

    const { tasks, removeTask, updateTask, completeTask } = props

    const [edit, setEdit] = useState({
        id: null,
        value: "",
        isComplete: false
    })

    const submitUpdate = value => {
        updateTask({ id: edit.id, text: value, isComplete: false })
        setEdit({
            id: null,
            value: "",
            isComplete: false
        })
    }

    if (edit.id) {
        return <TaskForm edit={edit} onSubmit={submitUpdate} />
    }

    return (
        <div>
            {
                tasks.map((task, index) => {
                    return (
                        task.isComplete === false ?
                            <div className={"task-row"} key={index}>
                                <IconButton>
                                    <DoneIcon onClick={() => completeTask(task.id)}
                                        className="done-icon" />
                                </IconButton>
                                <div key={task.id} onClick={() => updateTask({ id: task.id, isComplete: task.isComplete })}>
                                    {task.text}
                                </div>
                                <div className="icons">
                                    <IconButton>
                                        <DeleteIcon
                                            onClick={() => removeTask(task.id)}
                                            className="delete-icon"
                                        />
                                    </IconButton>
                                    <IconButton>
                                        <EditIcon
                                            onClick={() => setEdit({ id: task.id, value: task.text })}
                                            className="edit-icon"
                                        />
                                    </IconButton>
                                </div>
                            </div >
                            : ""
                    )
                })
            }
        </div>

    )
}
export default Task;