import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading : false,
    loginDB: [],
    token: "",
    error: "",
}

// 로그인 이메일 , 비밀번호 db에 전송
export  const loginDb = createAsyncThunk (
    "post/loginDb",
    async ({navigate,login}) =>{
        try {
            const response = await axios.post('https://www.myspaceti.me/api/login',
            login);
            const accessToken = response.data;
            console.log(accessToken);
            alert("로그인전달 완료")
            navigate("/");
            return response.data.token;
    
        }catch(error){
            alert("로그인실패")
            return error.code;        }
    }
);

const loginSlice = createSlice({
    name: "loginData",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(loginDb.fulfilled,(state, action)=>{
            state.loading =false;
            state.loginDb = action.payload;
            state.error ="";
        });
    }
})


export {loginSlice};
export const loginReducer = loginSlice.reducer;