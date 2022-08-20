
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import Feed from "../Modules/homePageSlice"
// store에 등록할 Slice 들을 import  합시다



const reducer = combineReducers({
        //슬라이스 등록하는곳입니다. mainSlice: mainSlice.reducer, 이런식으로 
})


export default configureStore({
    reducer :{
        Feed,
    }   
    //reducer 등록한것을 export 
    //해서 다른 컴포넌트에서 useSelector hook 을 통해서 사용할수 있습니다.
})

