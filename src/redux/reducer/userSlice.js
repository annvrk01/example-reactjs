import {  createSlice, current } from "@reduxjs/toolkit"
import { fetchUser } from "../api/user";

const userSlice = createSlice({
    name: 'users',

    initialState: [{
        id: 0,
        name: 'Nguyen Van A',
        age: 20,
    }],
    reducers: {
        addUser (state, action) {
            state.push(action.payload);
        },
        removeUser (state, action) {
            state.splice(action.payload, 1)
        },
        updateUser (state, action) {
               const indexUser = current(state).findIndex(item => item.id !== action.payload.id)
              if(indexUser > -1){
                state[indexUser]= action.payload
            }
        }
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchUser.fulfilled, (state, action) => {
          // Add user to the state array
          state.push(action.payload)
        })
      },

})

const { actions, reducer } = userSlice
export const { addUser, removeUser, updateUser , } = actions;
export default reducer