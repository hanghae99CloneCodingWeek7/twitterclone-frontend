import React from "react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

const Home = () => {
    const navigate = useNavigate();
    const [feed, setFeed] = useState({
        CONTENT: "",
        POST_PHOTO_URL: "",
    })


    const onProfile = () => {
        navigate("/profile")
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (todo.title.trim() === "" || todo.body.trim() === "") {
          return alert("내용을 입력하세요!");
        }
        dispatch
        alert("피드를 작성하였습니다.");
        // navigate("/");
    }

    const onchangeHandler = (e) => {
        const { name, value } = e.target;
        setFeed({
            ...feed,
            [name]: value,
        });
    };

    return (
        <Total>
            <leftWrap>
                <div>왼쪽</div>
                <Box>
                    예시1
                </Box>
                <Box>
                    예시1
                </Box>
                <Box>
                    예시1
                </Box>
                <Box>
                    예시1
                </Box>
            </leftWrap>

            <centerWrap>
                <FeedWrap>
                    <Img onClick={onProfile}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.772 10.506L17.154 8.31405L14.994 1.81405C14.892 1.50705 14.604 1.30005 14.282 1.30005C13.96 1.30005 13.672 1.50705 13.57 1.81305L11.41 8.31305L5.79 10.505C5.503 10.617 5.313 10.895 5.313 11.205C5.313 11.515 5.503 11.79 5.791 11.903L11.411 14.095L13.571 20.595C13.673 20.901 13.961 21.108 14.283 21.108C14.605 21.108 14.893 20.901 14.995 20.595L17.155 14.095L22.775 11.903C23.062 11.791 23.252 11.513 23.252 11.203C23.252 10.893 23.062 10.618 22.774 10.506H22.772ZM16.282 12.826C16.074 12.906 15.912 13.076 15.842 13.286L14.282 17.9811L12.722 13.288C12.652 13.078 12.492 12.908 12.284 12.826L8.129 11.206L12.283 9.58405C12.491 9.50405 12.653 9.33405 12.723 9.12205L14.283 4.42905L15.843 9.12305C15.913 9.33505 16.073 9.50505 16.281 9.58605L20.436 11.206L16.281 12.828L16.282 12.826ZM6.663 3.81205H4.783V2.05005C4.783 1.63605 4.446 1.30005 4.033 1.30005C3.62 1.30005 3.283 1.63605 3.283 2.05005V3.81205H1.5C1.086 3.81205 0.75 4.14805 0.75 4.56205C0.75 4.97605 1.086 5.31205 1.5 5.31205H3.282V7.07405C3.282 7.48805 3.618 7.82405 4.032 7.82405C4.446 7.82405 4.782 7.48805 4.782 7.07405V5.31205H6.662C7.077 5.31205 7.412 4.97605 7.412 4.56205C7.412 4.14805 7.077 3.81205 6.662 3.81205H6.663ZM9.198 19.434H8.098V18.418C8.098 18.004 7.763 17.668 7.348 17.668C6.933 17.668 6.598 18.004 6.598 18.418V19.434H5.57C5.156 19.434 4.82 19.77 4.82 20.184C4.82 20.598 5.156 20.934 5.57 20.934H6.6V21.9501C6.6 22.3641 6.935 22.7001 7.35 22.7001C7.765 22.7001 8.1 22.3641 8.1 21.9501V20.934H9.198C9.612 20.934 9.948 20.598 9.948 20.184C9.948 19.77 9.612 19.434 9.198 19.434V19.434Z" fill="black" />
                    </svg></Img>
                    <Input
                        value={feed.CONTENT}
                        name="CONTENT"
                        placeholder="내용을 입력해주세요!"
                        maxLength={500}
                        onChange={onchangeHandler}
                    ></Input>
                    <Img><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.772 10.506L17.154 8.31405L14.994 1.81405C14.892 1.50705 14.604 1.30005 14.282 1.30005C13.96 1.30005 13.672 1.50705 13.57 1.81305L11.41 8.31305L5.79 10.505C5.503 10.617 5.313 10.895 5.313 11.205C5.313 11.515 5.503 11.79 5.791 11.903L11.411 14.095L13.571 20.595C13.673 20.901 13.961 21.108 14.283 21.108C14.605 21.108 14.893 20.901 14.995 20.595L17.155 14.095L22.775 11.903C23.062 11.791 23.252 11.513 23.252 11.203C23.252 10.893 23.062 10.618 22.774 10.506H22.772ZM16.282 12.826C16.074 12.906 15.912 13.076 15.842 13.286L14.282 17.9811L12.722 13.288C12.652 13.078 12.492 12.908 12.284 12.826L8.129 11.206L12.283 9.58405C12.491 9.50405 12.653 9.33405 12.723 9.12205L14.283 4.42905L15.843 9.12305C15.913 9.33505 16.073 9.50505 16.281 9.58605L20.436 11.206L16.281 12.828L16.282 12.826ZM6.663 3.81205H4.783V2.05005C4.783 1.63605 4.446 1.30005 4.033 1.30005C3.62 1.30005 3.283 1.63605 3.283 2.05005V3.81205H1.5C1.086 3.81205 0.75 4.14805 0.75 4.56205C0.75 4.97605 1.086 5.31205 1.5 5.31205H3.282V7.07405C3.282 7.48805 3.618 7.82405 4.032 7.82405C4.446 7.82405 4.782 7.48805 4.782 7.07405V5.31205H6.662C7.077 5.31205 7.412 4.97605 7.412 4.56205C7.412 4.14805 7.077 3.81205 6.662 3.81205H6.663ZM9.198 19.434H8.098V18.418C8.098 18.004 7.763 17.668 7.348 17.668C6.933 17.668 6.598 18.004 6.598 18.418V19.434H5.57C5.156 19.434 4.82 19.77 4.82 20.184C4.82 20.598 5.156 20.934 5.57 20.934H6.6V21.9501C6.6 22.3641 6.935 22.7001 7.35 22.7001C7.765 22.7001 8.1 22.3641 8.1 21.9501V20.934H9.198C9.612 20.934 9.948 20.598 9.948 20.184C9.948 19.77 9.612 19.434 9.198 19.434V19.434Z" fill="black" />
                    </svg></Img>
                    <Btn type="button" onClick={onSubmit}>Tweet</Btn>
                </FeedWrap>
                <AllFeed>
                    {feed.CONTENT}
                </AllFeed>
            </centerWrap>

            <rightWrap>
                <div>오른쪽</div>
                <Box>
                    예시1
                </Box>
                <Box>
                    예시1
                </Box>
                <Box>
                    예시1
                </Box>
            </rightWrap>
        </Total>
    )
}
export default Home;
const Total = styled.div`
display: flex;

`;
const leftWrap = styled.div`
display: flex;
width: 30vw;
background-color: green;
`;

const rightWrap = styled.div`
display: flex;
width: 30vw;
background-color: brown;
`;
const FeedWrap = styled.div`
display: flex;
/* justify-content: center;  // 중앙이동 */
background-color: red;
margin-top: 5vh;
padding: 0 16px;
`;
const Logo = styled.img`
`;
const Input = styled.input`
width: 40vw;

`;
const Img = styled.button`

`;
const Btn = styled.button`
`;

const AllFeed = styled.div`
display: flex;
flex-direction: row;
background-color: blue;
`;

const Box = styled.div`
width: 25vw;
background-color: yellow;

`
//왼쪽아래에 프로필표시 피드작성왼쪽 프로필표시는 재활용가능한 component