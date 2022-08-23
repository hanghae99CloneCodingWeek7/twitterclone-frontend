//토큰정보를 서버에서 가져와 return 하는 로직

const SET_TOKEN = `set_token`;

const AuthInitailState ={
    token : null
}

export const setToken = (token) =>({
    type: SET_TOKEN,
    token
})


export const AuthReducer = (state = AuthInitailState,action)=>{
    switch(action.type){
        case SET_TOKEN:
            return {
                ...state,
                token:action.token
            }
            default:
                return state;
    }
}
