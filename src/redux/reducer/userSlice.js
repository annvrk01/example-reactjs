import { createSlice, current } from "@reduxjs/toolkit"

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
    }
})

const { actions, reducer } = userSlice
export const { addUser, removeUser, updateUser } = actions;
export default reducer