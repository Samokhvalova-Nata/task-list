import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://goit-task-manager.herokuapp.com/";

// To add JWT
const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// To remove JWT
const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

// body: { name, email, password }
export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        try {
            const res = await axios.post("/users/signup", credentials);
            setAuthHeader(res.data.token);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// body: { email, password }
export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
        try {
            const res = await axios.post("/users/login", credentials);
            setAuthHeader(res.data.token);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// headers: Authorization: Bearer token
export const logOut = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            await axios.post('/users/logout');
            clearAuthHeader();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// headers: Authorization: Bearer token
export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            // If there is no token, exit without performing any request
            return thunkAPI.rejectWithValue('Unable to fetch user');
        }
        
        try {
            setAuthHeader(persistedToken);
            const res = await axios.get('/users/me');
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
