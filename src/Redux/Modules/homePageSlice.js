

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { current } from "@reduxjs/toolkit";
import { server_url } from "../index";
import { getCookie, setCookie } from "../../Api/cookie";
import { BiWindows } from "react-icons/bi";


const initialState = {
  write: [],
  isLoading: false,
  error: null,
};


//게시글 삭제
export const deletePost = createAsyncThunk(
  "user/FeedDelete",
  async (value, thunkAPI) => {
    console.log(value);
    try {
      console.log(2322222)
      const res = await axios.delete(server_url + `/api/posts/${value}`,
      {
        headers: {
          Authorization: `Bearer ${getCookie("is_login")}`,
        },
      }
      );
      // try{
      //   const res = await axios({
      //     method: "delete",
      //     url: `https://www.myspaceti.me/api/posts/`,
      //     headers: {
      //       Authorization: `Bearer ${getCookie("is_login")}`,
      //       // Bearea 는 토큰 포멧의 일종 
      //     },
      //   })
      console.log(res.status);
      window.location.href="/home"
      
      
    } catch (error) {
      if (thunkAPI.rejectWithValue(error))
      console.log(error);
        alert("게시글을 삭제할 수 없습니다!");
    }
  }
);

// 게시글 작성
export const postFeedThunk = createAsyncThunk(
  "user/FeedWrite",
  async (data1, I) => {
    console.log(data1);
    try {
      const response = await
        axios({
          method: "post",
          url: server_url + `/api/posts/create`,
          headers: {
            Authorization: `Bearer ${getCookie("is_login")}`,
            // Bearea 는 토큰 포멧의 일종 
          },
          data: data1[0],
        });
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
    [postFeedThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.write = action.payload;
      
      console.log(current(state), action);
    },
    [deletePost.rejected]: (state, action) => {
      console.log("뭔가가이상하다")
      state.error = action.payload;
    }
  }
});

export const postReducer = PostFeed.reducer;
export { PostFeed };
