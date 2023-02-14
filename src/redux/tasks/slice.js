import { createSlice } from "@reduxjs/toolkit";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import { addTask, deleteTask, fetchTasks, updateTask } from "./operations";

const handdlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [
    ],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchTasks.pending, handdlePending)
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, handleRejected)
      .addCase(addTask.pending, handdlePending)
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addTask.rejected, handleRejected)
      .addCase(deleteTask.pending, handdlePending)
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const taskIndex = state.items.findIndex(
          (task) => task._id === action.payload._id
        );
        state.items.splice(taskIndex, 1);
      })
      .addCase(deleteTask.rejected, handleRejected)
      .addCase(updateTask.pending, handdlePending)
      .addCase(updateTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const taskIndex = state.items.findIndex((task) => task._id === action.payload._id);
        state.items[taskIndex].completed = action.payload.completed;
      })
      .addCase(updateTask.rejected, handleRejected),
});

// const persistConfig = {
//   key: "tasks",
//   storage,
// };

// export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
// export const tasksReducer = persistReducer(persistConfig, tasksSlice.reducer);

export const tasksReducer = tasksSlice.reducer;
