import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { server_url } from "../index";
import { getCookie } from "Api/cookie";

// const initialState = {
//   loading: false,
//   comments: [],
//   error: "",
// };

// https://www.myspaceti.me/api/posts

//!코멘트 get
export const getCommentList = createAsyncThunk(
  "GET_COMMENT",
  async (newPostId) => {
    const response = await axios.get(
      `https://www.myspaceti.me/api/comments/${newPostId.post_id}`,
      {
        headers: {
          Authorization: `Bearer ${getCookie("is_login")}`,
        },
      }
    );
    return response.data;
  }
);

// export const getCommentList = createAsyncThunk(
//   "GET_COMMENT",
//   async (thunkApi) => {
//     try {
//       const res = await axios.get("http://localhost:8000/list");
//       console.log(res.data);
//       return res.data;
//     } catch (error) {
//       return error.message;
//     }
//   }
// );

//!코멘트 post
export const addCommentList = createAsyncThunk(
  "ADD_COMMENT",
  async (newComment) => {
    console.log(newComment);
    const response = await axios({
      method: "post",
      url: `https://www.myspaceti.me/api/comments/${newComment.post_id}/create/`,
      headers: {
        Authorization: `Bearer ${getCookie("is_login")}`,
      },
      data: newComment,
    });
    return response.data;
  }
);
//!코멘트 delete
export const deleteCommentList = createAsyncThunk(
  "DELETE_COMMENT",
  async (xId) => {
    const response = await axios.delete(
      `https://www.myspaceti.me/api/comments`,
      {
        headers: {
          Authorization: `Bearer ${getCookie("is_login")}`,
        },
      }
    );
    return xId;
  }
);
//!코멘트 update
export const updateCommentList = createAsyncThunk(
  "UPDATE_LIST",
  async ({ xId, content }) => {
    const response = await axios.put(`http://localhost:8000/list/${xId}`, {
      content: content,
    });
    return { xId, content };
  }
);

const commentSlice = createSlice({
  name: "commentList",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getCommentList.fulfilled]: (state, { payload }) => [...payload],
    [addCommentList.fulfilled]: (state, { payload }) => [...state, payload],
    [deleteCommentList.fulfilled]: (state, { payload }) =>
      state.filter((x) => x.id !== payload),
    [updateCommentList.fulfilled]: (state, { payload }) => {
      return state.map((x) => {
        if (x.id === payload.listId) {
          return { ...x, content: payload.content };
        } else {
          return x;
        }
      });
    },
  },
});
export { commentSlice };
export const commentReducer = commentSlice.reducer;
