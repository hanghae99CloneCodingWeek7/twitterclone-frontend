import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    joinData: [],
    id: [],
    error: "",
    //view 컴포넌트에서 dispatch 로 전해받는 joinData와 회원 각각의 고유id 에러정보를  초기화
}

// post 회원정보 전송
export const addJoin = createAsyncThunk(
    "join",
    async ({ joinData, joinClose }) => {
        console.log(joinData);
        try {
            const response = await axios.post(
                "https://www.myspaceti.me/api/signup",
                joinData
            );
            alert("가입해주셔서 감사합니다.");
            joinClose(); //회원가입성공후 모달창 닫기위함
            return response.data;
        } catch (error) {
            console.log(error.code);
            alert("다시 입력해주세요.");
            return error.code;
        }
    }
);

const joinSlice = createSlice({
    name: "joinData",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //호원정보 전송
        builder.addCase(addJoin.pending, (state) => {
            state.loading = true;
            //로딩중일때
        });
        builder.addCase(addJoin.fulfilled, (state, action) => {
            state.loading = false;
            state.joinData = action.payload;
            state.error = "";
            //성공했을때
        });
        builder.addCase(addJoin.rejected, (state, action) => {
            state.loading = false;
            state.joinData = [];
            state.error = action.error.message;
            //실패했을때
        });
    }
});

export { joinSlice };

export const joinReducer = joinSlice.reducer;
