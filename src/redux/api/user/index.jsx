import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { URL_API } from "./../../../config/index"

// First, create the thunk
export const fetchUser = createAsyncThunk(
    'users/fetchAll',
    async (thunkAPI) => {
      const response = await axios.get(URL_API +'/users')
      return response.data
    }
  )
