import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
import { server_url } from "../index";

const initialState = {
    data: [],
    isLoading: false,
    error: null,
  };
  

export const GetFeedThunk = createAsyncThunk(
  "hompage->tweet->homepage",
  async ( value,thunkAPI) => {
    console.log(value);
    try {
      const result = await axios.get(server_url + `/api/posts`,);
      console.log(result);
      console.log(result.data);
      return thunkAPI.fulfillWithValue(result.data);

      
    } catch (error) {
        console.log("에러발생");
      return thunkAPI.rejectWithValue(error);
    }
  }
);


const GetFeed = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: {
    [GetFeedThunk.fulfilled]: (state, action) => {
      state.data = action.payload;

    },
    [GetFeedThunk.rejected]: (state, action) => {
        console.log("에러발생1");
      console.log(action.payload.message);
    },
  },
});

export {GetFeed};
export const getFeed = GetFeed.reducer;