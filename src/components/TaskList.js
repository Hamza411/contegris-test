import React from 'react';
import Task from './Task';
import TaskForm from './TaskForm';
import { connect } from "react-redux";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createTaskReq, updateTaskReq, deleteTaskReq } from "../redux/task/taskAction";


function TaskList(props) {

    const addTask = task => {
        console.log(task)
        props.createTaskReq(task)
    }

    const updateTask = (task) => {
        props.updateTaskReq(task)
    }


    const removeTask = id => {
        toast.error("Task Deleted!", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
        });
        props.deleteTaskReq(id)
    }

    const completeTask = id => {
        let completedTask = props.newTask.map(task => {
            if (task.id === id) {
                task.isComplete = !task.isComplete
            }
            return task
        })
        toast.success("Task Completed!", {
            position: "bottom-left",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
        });
        props.updateTaskReq(completedTask)
    }

    return (
        <div>
            <h1>Task list</h1>
            <TaskForm onSubmit={addTask} />
            <Task
                tasks={props.newTask}
                updateTask={updateTask}
                completeTask={completeTask}
                removeTask={removeTask}
            />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        newTask: state.task.newTask
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createTaskReq: (payload) => dispatch(createTaskReq(payload)),
        updateTaskReq: (payload) => dispatch(updateTaskReq(payload)),
        deleteTaskReq: (payload) => dispatch(deleteTaskReq(payload)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
