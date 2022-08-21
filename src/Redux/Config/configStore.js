import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit"; //!호진추가 getDefaultMiddleware
import { commentReducer } from "../Modules/commentSlice"; //!호진추가 commentReducer
import logger from "redux-logger"; //!호진추가 logger
// store에 등록할 Slice 들을 import  합시다

const reducer = combineReducers({
  //슬라이스 등록하는곳입니다. mainSlice: mainSlice.reducer, 이런식으로
  commentReducer: commentReducer.reducer, //!호진 추가 (commentReducer)
});

export default configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), logger], //!호진추가 (middleware: [...getDefaultMiddleware(), logger],)
  //reducer 등록한것을 export
  //해서 다른 컴포넌트에서 useSelector hook 을 통해서 사용할수 있습니다.
});
