// import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addTask, deleteTask, setStatusFilter, toggleCompleted } from "./actions";
import { statusFilters } from "./constants";

const taskInitialState = [
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: false },
    { id: 3, text: "Discover Redux", completed: false },
    { id: 4, text: "Build amazing apps", completed: false },
];
const filterInitialState = {
    status: statusFilters.all,
};

export const taskReducer = createReducer(taskInitialState, {
    [addTask]: (state, action) => {
        // return [...state, action.payload];
        state.push(action.payload);
    },
    [deleteTask]: (state, action) => {
        return state.filter(task => task.id !== action.payload);
    },
    [toggleCompleted]: (state, action) => {
        // return state.map(task => {
        //     if (task.id !== action.payload) {
        //         return task;
        //     }
        //     return { ...task, completed: !task.completed };
        // });
        for (const task of state) {
            if (task.id === action.payload) {
                task.completed = !task.completed;
                break;
            }
        }
    },
});

export const filterReducer = createReducer(filterInitialState, {
    [setStatusFilter]: (state, action) => {
        return {
            ...state,
            status: action.payload,
        };
    },
});

// export const taskReducer = (state = taskInitialState, action) => {
//     switch (action.type) {
//         case addTask.type:
//             return [...state, action.payload];
//         case deleteTask.type:
//             return state.filter(task => task.id !== action.payload);
//         case toggleCompleted.type:
//             return state.map(task => {
//                 if (task.id !== action.payload) {
//                 return task;
//                 }
//                 return { ...task, completed: !task.completed };
//             });
//         default:
//             return state;
//         }
// };

// export const filterReducer = (state = filterInitialState, action) => {
//     switch (action.type) {
//         case "filters/setStatusFilter":
//             return {
//                 ...state,
//                 status: action.payload,
//             };
//         default:
//             return state;
//     }
// };

// export const rootReducer = combineReducers({
//     tasks: taskReducer,
//     filters: filterReducer,
// });