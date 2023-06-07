import { createSlice } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";

const filterInitialState = {
    status: statusFilters.all,
};

const filterSlice = createSlice({
    name: "filter",
    initialState: filterInitialState,
    reducers: {
        setStatusFilter(state, action) {
            state.status = action.payload
        },
    },
});

export const filterReducer = filterSlice.reducer;
export const { setStatusFilter } = filterSlice.actions;