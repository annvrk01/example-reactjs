import { createSlice} from "@reduxjs/toolkit"
const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
      addPost(state, action) {
        console.log('addPost BBBB ')
        state.push(action.payload);
      },
      removePost(state, action) {
        console.log('removePost')
        state.splice(action.payload, 1)
      }
    }
  });
  const { actions, reducer } = todoSlice;
  export const { addPost, removePost } = actions;
  export default reducer;