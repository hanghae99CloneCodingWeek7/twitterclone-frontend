

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { current } from "@reduxjs/toolkit";
import { server_url } from "../index";


const initialState = {
  write: [],
  isLoading: false,
  error: null,
};


export const postFeedThunk = createAsyncThunk(
  "user/FeedWrite",
  async (data1, I) => {
    console.log(data1);
    console.log(data1[0]);
    try {
        const response = await axios.post( `https://www.myspaceti.me/api/posts/create`, data1[0],
        // ,
      //   {
      //   headers: {
      //     Authorization: `Bearer ${data[1].id}`,
      //   },
      // }
      );
      console.log(response.data);
      return response.data;
    } 
    catch (error) {
      console.log("에러발생")
      console.log(error);
    }
  }
);


const PostFeed = createSlice({
  name: "writed",
  initialState,
  reducers: {},
  extraReducers: {
    [postFeedThunk.fulfilled]: (state, action) => {
      console.log(current(state), action);
    },
    [postFeedThunk.rejected]: (state,action) => {
      state.error = action.payload;
    },
  }
});

export const postReducer =  PostFeed.reducer;  
export {PostFeed};
