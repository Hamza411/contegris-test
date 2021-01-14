import { CREATE_TASK, UPDATE_TASK, DELETE_TASK, GET_TASK, FAILED_TASK } from "./taskType"

const initialState = {
    newTask: []
}

const taskReducer = (state = initialState, action) => {
    // console.log("reducer called", action.type)
    switch (action.type) {
        case GET_TASK: return {
            ...state,
            newTask: action.payload,
        }
        case CREATE_TASK: return {
            ...state,
            newTask: [...state.newTask, action.payload],
            error: ""
        }
        case UPDATE_TASK: {
            let t = [...state.newTask]
            for (let i = 0; i < t.length; i++) {
                if (t[i].id === action.payload.id) {
                    t[i] = action.payload
                }
            }
            return { ...state, newTask: t }

        }
        case DELETE_TASK: {

            let updatedTask = state.newTask.filter((task) => task.id !== action.payload)
            return { ...state, newTask: updatedTask }
        }

        case FAILED_TASK: return {
            ...state,
            newTask: [],
            error: action.payload
        }
        default: return state
    }
}

export default taskReducer