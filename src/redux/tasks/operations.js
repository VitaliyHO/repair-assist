import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "http://localhost:4444/api/";

export const fetchTasks = createAsyncThunk(
  "tasks/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/tasks");
      return response.data.result;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (taskInfo, thunkAPI) => {
    try {
      const response = await axios.post("/tasks", { text: taskInfo });
      return response.data.result;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async (credentiials, thunkAPI) => {
    try {
      const {id, status} = credentiials;
      const response = await axios.patch(`/tasks/${id}/completed`, {completedStatus: status});
      return response.data.result;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/tasks/${taskId}`);
      return response.data.result;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
