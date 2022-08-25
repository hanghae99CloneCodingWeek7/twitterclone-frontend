import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpenProfileModal:false,
    isOpenFollowModal:false,
  };


  const modalSlice = createSlice({
    name:"modal",
    initialState,
    reducers: {
        openProfileModal:(state,action)=>{
            state.isOpenProfileModal=true;
        },
        closeProfileModal:(state,action)=>{
            state.isOpenProfileModal=false;
        },
        openFollowModal:(state,action)=>{
            state.isOpenFollowModal=true;
        },
        closeFollowModal:(state,action)=>{
            state.isOpenFollowModal=false;
        },
    },
  })
  export const {openFollowModal,closeFollowModal,openProfileModal,closeProfileModal}=modalSlice.actions;
  export default modalSlice;