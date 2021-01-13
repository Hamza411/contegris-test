import React, { useState } from 'react';
import TaskForm from './TaskForm';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function Task(props) {

    const { tasks, completeTask, removeTask, updateTask } = props

    const [edit, setEdit] = useState({
        id: null,
        value: ""
    })

    const submitUpdate = value => {
        updateTask(edit.id, value)
        setEdit({
            id: null,
            value: ""
        })
    }

    if (edit.id) {
        return <TaskForm edit={edit} onSubmit={submitUpdate} />
    }

    return tasks.map((task, index) => (
        <div className={"task-row"} key={index}>
            <div key={task.id} onClick={() => completeTask(task.id)}>
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
    ))
}

export default Task;