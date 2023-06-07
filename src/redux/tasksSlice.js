import { nanoid } from "nanoid";

const { createSlice } = require("@reduxjs/toolkit");

const taskInitialState = [
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: false },
    { id: 3, text: "Discover Redux", completed: false },
    { id: 4, text: "Build amazing apps", completed: false },
];

const taskSlice = createSlice({
    name: "tasks",
    initialState: taskInitialState,
    reducers: {
        addTask: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(text) {
                return {
                    payload: {
                    id: nanoid(),
                    completed: false,
                    text,
                },
                };
            },
        },
        deleteTask(state, action) {
            return state.filter(task => task.id !== action.payload);
        },
        toggleCompleted(state, action) {
            for (const task of state) {
            if (task.id === action.payload) {
                task.completed = !task.completed;
                break;
            }
        }
        },
    },
});

export const taskReducer = taskSlice.reducer;
export const { addTask, deleteTask, toggleCompleted } = taskSlice.actions;