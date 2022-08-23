import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { joinSlice } from "../Modules/JoinSlice";

import { getDefaultMiddleware } from "@reduxjs/toolkit"; //!호진추가 getDefaultMiddleware
import { commentReducer } from "../Modules/commentSlice"; //!호진추가 commentReducer
import logger from "redux-logger"; //!호진추가 logger
import PostFeed from "../Modules/homePageSlice";
import GetFeed from "../Modules/gethomePageSlice";



// store에 등록할 Slice 들을 import  합시다 

const reducer = combineReducers({


  joinSlice: joinSlice.reducer,
  commentReducer: commentReducer.reducer, //!호진 추가 (commentReducer)
});

export default configureStore({
  reducer: {
    PostFeed,
    GetFeed,
    
  },
  middleware: [...getDefaultMiddleware(), logger], //!호진추가 (middleware: [...getDefaultMiddleware(), logger],)
  //reducer 등록한것을 export
  //해서 다른 컴포넌트에서 useSelector hook 을 통해서 사용할수 있습니다.
});
