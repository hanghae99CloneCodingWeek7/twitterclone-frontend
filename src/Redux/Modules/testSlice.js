import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { server_url } from "../index";

// const initialState = {
//   loading: false,
//   comments: [],
//   error: "",
// };

// https://www.myspaceti.me/api/posts

//!코멘트 get
export const gettestList = createAsyncThunk("GET_COMMENT", async () => {
  const response = await axios.get("https://myspaceti.me/api/submitTest");
  console.log(response);
  return response.data;
});

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
export const addtestList = createAsyncThunk("ADD_COMMENT", async (newTest) => {
  const response = await axios.post(
    "https://www.myspaceti.me/api/submitTest",
    newTest
  );
  return response.data;
});

//!코멘트 delete
export const deletetestList = createAsyncThunk(
  "DELETE_COMMENT",
  async (xId) => {
    const response = await axios.delete(`http://localhost:8000/list/${xId}`);
    return xId;
  }
);
//!코멘트 update
export const updatetestList = createAsyncThunk(
  "UPDATE_LIST",
  async ({ xId, content }) => {
    const response = await axios.put(`http://localhost:8000/list/${xId}`, {
      content: content,
    });
    return { xId, content };
  }
);

// const commentSlice = createSlice({
//   name: "comments",
//   initialState: [],
//   reducers: {},
//   extraReducers: (builder) => {
//     //!보여주기
//     builder.addCase(getCommentList.pending, (state) => {
//       state.loading = true;
//     });
//     builder.addCase(getCommentList.fulfilled, (state, action) => {
//       state.loading = false;
//       state.comments = action.payload;
//       state.error = "";
//     });
//     builder.addCase(getCommentList.rejected, (state, action) => {
//       state.loading = false;
//       state.comments = [];
//       state.error = action.error.message;
//     });
//     //!가져오기
//     builder.addCase(addCommentList.pending, (state) => {
//       state.loading = true;
//     });
//     builder.addCase(addCommentList.fulfilled, (state, action) => {
//       state.loading = false;
//       state.comments = [...state.comments, action.payload];
//       state.error = "";
//     });
//     builder.addCase(addCommentList.rejected, (state, action) => {
//       state.loading = false;
//       state.comments = [];
//       state.error = action.error.message;
//     });
//     //!삭제하기
//     builder.addCase(deleteCommentList.pending, (state) => {
//       state.loading = true;
//     });
//     builder.addCase(deleteCommentList.fulfilled, (state, action) => {
//       state.loading = false;
//       state.comments = state.comments.filter(
//         (comment) => comment.id != action.payload
//       );
//       state.error = "";
//     });
//     builder.addCase(deleteCommentList.rejected, (state, action) => {
//       state.loading = false;
//       state.comments = [];
//       state.error = action.error.message;
//     });
//     //!수정하기
//     builder.addCase(updateCommentList.pending, (state) => {
//       state.loading = true;
//     });
//     builder.addCase(updateCommentList.fulfilled, (state, action) => {
//       state.loading = false;
//       state.comments = state.comments.map((comment) => {
//         if (comment.id === action.payload.commentId) {
//           return action.payload.commentData;
//         } else {
//           return comment;
//         }
//       });
//       state.error = "";
//     });
//     builder.addCase(updateCommentList.rejected, (state, action) => {
//       state.loading = false;
//       state.comments = [];
//       state.error = action.error.message;
//     });
//   },
// });

// export default CommentSlice.reducer;

//백업 23일 18시
const testSlice = createSlice({
  name: "testList",
  initialState: [],
  reducers: {},
  extraReducers: {
    [gettestList.fulfilled]: (state, { payload }) => [...payload],
    [addtestList.fulfilled]: (state, { payload }) => [...state, payload],
    [deletetestList.fulfilled]: (state, { payload }) =>
      state.filter((x) => x.id !== payload),
    [updatetestList.fulfilled]: (state, { payload }) => {
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
export { testSlice };
export const testReducer = testSlice.reducer;
