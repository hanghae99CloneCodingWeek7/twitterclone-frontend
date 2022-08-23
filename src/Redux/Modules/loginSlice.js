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
            console.log(login);
            const response = await axios.post('https://www.myspaceti.me/api/login',login,{withCredentials : true})
            // {EMAIL:"GMAIL@GMAIL.COM",PASSWORD:"123123123"});
            alert("로그인전달 완료")
            navigate("/home")
            console.log(response);
            console.log(response.data);
            return response.data;
    
        }catch(error){
            alert("로그인실패")
            return error.code;        }
    }
);

const loginSlice = createSlice({
    name: "loginData",
    initialState:initialState,
    reducers:{},
    extraReducers: (builder)=>{
        
        builder.addCase(loginDb.fulfilled,(state, action)=>{
            state.loading =false;
            state.loginDB = action.payload;
            state.error ="";
        });
    }
})


export {loginSlice};
export const loginReducer = loginSlice.reducer;