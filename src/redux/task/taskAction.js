import { CREATE_TASK, UPDATE_TASK, DELETE_TASK, GET_TASK, FAILED_TASK } from "./taskType"

export const getTask = tasks => {
    return {
        type: GET_TASK,
        payload: tasks
    }
}

export const createTaskReq = task => {
    console.log(task, "in action")
    return {
        type: CREATE_TASK,
        payload: task
    }
}

export const updateTaskReq = task => {
    return {
        type: UPDATE_TASK,
        payload: task
    }
}

export const deleteTaskReq = task => {
    return {
        type: DELETE_TASK,
        payload: task
    }
}

export const taskFailedReq = error => {
    return {
        type: FAILED_TASK,
        payload: error
    }
}