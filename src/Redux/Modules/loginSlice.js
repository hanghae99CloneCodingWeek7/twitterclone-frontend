import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import jwt_decode from "jwt-decode";

const initialState = {
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
      console.log(login);

      const response = await axios.post(
        "https://www.myspaceti.me/api/login",
        login
      );
      // {EMAIL:"GMAIL@GMAIL.COM",PASSWORD:"123123123"});
      alert("로그인전달 완료");
      navigate("/home");
      console.log(response.data.token);
      const token = response.data.token;
      const decode = jwt_decode(token);
      console.log(decode);
      return response.config.data.token;
    } catch (error) {
      alert("로그인실패");
      return error.code;
    }
  }
);

// export const getToken = createAsyncThunk("get/getToken", async()=>{
//     try{
//         const response = await
//         axios({
//             method:"get",
//             url: `https://www.myspaceti.me/api/posts`,
//             headers:{
//                 Authorization : `Bearer ${accessToken}`,
//                 // Bearea 는 토큰 포멧의 일종
//             },
//         });
//         const accessToken = response.data.token;
//         const decoded = jwt_decode(accessToken);

//         console.log(response);
//         return response;

//     }catch(error){
//         console.log(error.code, error.status);
//         return error.status;
//     }
// });

const loginSlice = createSlice({
  name: "loginData",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginDb.fulfilled, (state, action) => {
      state.loading = false;
      state.loginDB = action.payload;
      state.error = "";
    });
    // builder.addCase(getToken.fulfilled, (state, action)=>{
    //     state.loading = false;
    //     state.token = action.payload;
    //     state.error = "";
    // });
    // builder.addCase(googleLogin.fulfilled, (state, action)=>{
    //     state.loading = false;
    //     state.token = action.payload;
    //     state.error = "";
    // });
  },
});

export { loginSlice };
export const loginReducer = loginSlice.reducer;
