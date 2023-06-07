// import { createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import { rootReducer } from "./reducer";

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);
// -----------------------------------------------------------------
import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./tasksSlice";
import { filterReducer } from "./filtersSlice";

export const store = configureStore({
    reducer: {
        tasks: taskReducer,
        filters: filterReducer,
    },
});