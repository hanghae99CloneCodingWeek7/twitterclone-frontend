import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie, setCookie } from "../../Api/cookie";
import jwt_decode from "jwt-decode";
import { server_url } from "Redux";
import { server_url1 } from "Redux";
const initialState = {
    post: [],
    loading: false,
    loginDB: [],
    token: "",
    error: "",
};

// 로그인 이메일 , 비밀번호 db에 전송


export const loginDb = createAsyncThunk(

    "post/loginDb",
    async ({ navigate, login }) => {
        try {
            const response = await axios({
                method: "post",
                url: server_url1 +`/login`,
                data: login
            });
            const accessToken = response.data.token;
            console.log(accessToken);
            setCookie("is_login", `${accessToken}`);
            alert("환영합니다");
            navigate("/home");
            return response.data.token;
        } catch (error) {
            alert("로그인실패")
            return error.code;
        }
    }
);





export const getToken = createAsyncThunk("get/getToken", async () => {
    try {
        const response = await
            axios({
                method: "get",
                url: server_url + `/api/posts`,
                headers: {
                    Authorization: `Bearer ${getCookie("is_login")}`,
                    // Bearea 는 토큰 포멧의 일종 
                },
            });

        const loginToken = getCookie("is_login");
        const userData = { token: loginToken, post: response.data.postDetail }
        return userData;

    } catch (error) {
        console.log(error.code, error.status);
        return error.status;
    }
});



export const exsearch = createAsyncThunk("get/getToken", async () => {
    try {
        const response = await
            axios({
                method: "get",
                url: server_url +`/api/posts/search`,
                headers: {
                    Authorization: `Bearer ${getCookie("is_login")}`,
                    // Bearea 는 토큰 포멧의 일종 
                },
            });

        const loginToken = getCookie("is_login");
        const userData = { token: loginToken, post: response.data.postDetail }
        return userData;

    } catch (error) {
        console.log(error.code, error.status);
        return error.status;
    }
});


export const loginSlice = createSlice({
    name: "loginData",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(loginDb.fulfilled, (state, action) => {
            state.loading = false;
            state.loginDB = action.payload;
            state.error = "";
        });
        builder.addCase(getToken.fulfilled, (state, action) => {
            state.loading = false;
            state.post = action.payload.post;
            state.token = action.payload.token;
            // state.error = "";
        });
        // builder.addCase(googleLogin.fulfilled, (state, action)=>{
        //     state.loading = false;
        //     state.token = action.payload;
        //     state.error = "";
        // });

    },
})


// export {loginSlice};
export const loginReducer = loginSlice.reducer;