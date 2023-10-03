import { createSlice} from "@reduxjs/toolkit"




const userSlice = createSlice({
    name: 'users',
    initialState: [{
        id:0,
        name: 'Nguyen Van A',
        age: 20,
    }],
    reducers: {
        addUser(state, action) {
          console.log('adding user')
          state.push(action.payload);
        },
        removeUser(state, action) {
            console.log('remove user')
            state.splice(action.payload, 1)
            console.log(action.payload)
          },
        updateUser(state, action) {
            
        }
    }
})

const {actions, reducer} = userSlice
export const { addUser, removeUser, updateUser } = actions;
export default reducer