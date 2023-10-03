import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './../reducer/todoSlice';
import userSlice from './../reducer/userSlice';

export  const store = configureStore({
  reducer: {
    todos: todoSlice,
    users: userSlice,
  },
})