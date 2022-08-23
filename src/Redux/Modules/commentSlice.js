import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCommentList = createAsyncThunk("GET_COMMENT", async () => {
  const response = await axios.get("http://localhost:8000/list");
  return response.data;
});

export const addCommentList = createAsyncThunk(
  "ADD_COMMENT",
  async (newComment) => {
    const response = await axios.post("http://localhost:8000/list", newComment);
    return response.data;
  }
);

export const deleteCommentList = createAsyncThunk(
  "DELETE_COMMENT",
  async (xId) => {
    const response = await axios.delete(`http://localhost:8000/list/${xId}`);
    return xId;
  }
);

export const updateCommentList = createAsyncThunk(
  "UPDATE_LIST",
  async ({ xId, content }) => {
    const response = await axios.put(`http://localhost:8000/list/${xId}`, {
      content: content,
    });
    return { xId, content };
  }
);

export const commentReducer = createSlice({
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
