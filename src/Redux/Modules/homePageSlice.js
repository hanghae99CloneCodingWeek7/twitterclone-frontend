

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { current } from "@reduxjs/toolkit";
import { server_url } from "../index";

export const postFeedThunk = createAsyncThunk(
  "user/FeedWrite",
  async (data, thunkAPI) => {
    try {
        const response = await axios.post(server_url + `/api/posts`, data[0], {
        headers: {
          Authorization: `Bearer ${data[1].id}`,
        },
      });
    } 
    catch (error) {
      console.log("에러발생")
      console.log(error);
    }
  }
);

const initialState = {
  writed: [],
  isLoading: false,
  error: null,
};

const Feed = createSlice({
  name: "writed",
  initialState,
  reducers: {},
  extraReducers: {
    [postFeedThunk.fulfilled]: (state, action) => {
      console.log(current(state), action);
    },
    [postFeedThunk.rejected]: (state, action) => {
      console.log("오류입니다,");
      state.error = action.payload;
    },
  },
});

export default Feed.reducer;
