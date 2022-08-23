import React from "react";
import { useState, useEffect } from "react";
import { Cookies, useCookies, withCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/";
import LeftWrap from "../Template/LeftWrap";
import FollowBox from "../Template/FollowBox";
import styled from "styled-components";
import comment from "./comment.png";
import comment1 from "./comment1.png";
import comment2 from "./comment2.png";
import comment3 from "./comment3.png";
import comment4 from "./comment4.png";
import ProfileImg from "UI/Organisems/myProfileBox/ProfileImg";
import { postFeedThunk } from "../../Redux/Modules/homePageSlice";
import { GetFeedThunk } from "../../Redux/Modules/gethomePageSlice";


const Home = () => {

    //비동기 처리이니까 로딩
    useEffect(() => {
        dispatch(GetFeedThunk());
    }, []);

    const {data} = useSelector((store) => store.GetFeed);
  console.log(data);
    // const state = useSelector((state) => state.Post.data.posts);
    const navigate = useNavigate();
    const { cookies } = useCookies;
    const dispatch = useDispatch();
    const [feed, setFeed] = useState({
        CONTENT: "",
        POST_PHOTO_URL: "",
    });

    const onchangeHandler = (e) => {
        const { name, value } = e.target;
        setFeed({
            ...feed,
            [name]: value,
        });
    };

    const onSubmit = (event) => {
        // event.preventDefault();
        if (feed.CONTENT.trim().length === 0) {
            return alert("내용을 입력하세요!");
        } else {
            dispatch(
                postFeedThunk([
                    {
                        CONTENT: feed.CONTENT,
                        // POST_PHOTO: feed.POST_PHOTO,
                    },
                    {},
                ])
            );
            alert("피드를 작성하였습니다.");
            // navigate("/");
        }
    };
    // console.log(state);


    const onProfile = () => {
        navigate("/profile");
    };

    return (
        <Total>
            <LeftWrap />
            <CenterWrap>
                <CenterHome>Home</CenterHome>
                <TotalFeed>
                    <FeedWrap>
                        <div onClick={onProfile}>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M22.772 10.506L17.154 8.31405L14.994 1.81405C14.892 1.50705 14.604 1.30005 14.282 1.30005C13.96 1.30005 13.672 1.50705 13.57 1.81305L11.41 8.31305L5.79 10.505C5.503 10.617 5.313 10.895 5.313 11.205C5.313 11.515 5.503 11.79 5.791 11.903L11.411 14.095L13.571 20.595C13.673 20.901 13.961 21.108 14.283 21.108C14.605 21.108 14.893 20.901 14.995 20.595L17.155 14.095L22.775 11.903C23.062 11.791 23.252 11.513 23.252 11.203C23.252 10.893 23.062 10.618 22.774 10.506H22.772ZM16.282 12.826C16.074 12.906 15.912 13.076 15.842 13.286L14.282 17.9811L12.722 13.288C12.652 13.078 12.492 12.908 12.284 12.826L8.129 11.206L12.283 9.58405C12.491 9.50405 12.653 9.33405 12.723 9.12205L14.283 4.42905L15.843 9.12305C15.913 9.33505 16.073 9.50505 16.281 9.58605L20.436 11.206L16.281 12.828L16.282 12.826ZM6.663 3.81205H4.783V2.05005C4.783 1.63605 4.446 1.30005 4.033 1.30005C3.62 1.30005 3.283 1.63605 3.283 2.05005V3.81205H1.5C1.086 3.81205 0.75 4.14805 0.75 4.56205C0.75 4.97605 1.086 5.31205 1.5 5.31205H3.282V7.07405C3.282 7.48805 3.618 7.82405 4.032 7.82405C4.446 7.82405 4.782 7.48805 4.782 7.07405V5.31205H6.662C7.077 5.31205 7.412 4.97605 7.412 4.56205C7.412 4.14805 7.077 3.81205 6.662 3.81205H6.663ZM9.198 19.434H8.098V18.418C8.098 18.004 7.763 17.668 7.348 17.668C6.933 17.668 6.598 18.004 6.598 18.418V19.434H5.57C5.156 19.434 4.82 19.77 4.82 20.184C4.82 20.598 5.156 20.934 5.57 20.934H6.6V21.9501C6.6 22.3641 6.935 22.7001 7.35 22.7001C7.765 22.7001 8.1 22.3641 8.1 21.9501V20.934H9.198C9.612 20.934 9.948 20.598 9.948 20.184C9.948 19.77 9.612 19.434 9.198 19.434V19.434Z"
                                    fill="black"
                                />
                            </svg>
                        </div>
                        <Input
                            value={feed.CONTENT}
                            name="CONTENT"
                            placeholder="내용을 입력해주세요!"
                            maxLength={500}
                            onChange={onchangeHandler}
                        ></Input>
                    </FeedWrap>
                    <UploadImg>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M22.772 10.506L17.154 8.31405L14.994 1.81405C14.892 1.50705 14.604 1.30005 14.282 1.30005C13.96 1.30005 13.672 1.50705 13.57 1.81305L11.41 8.31305L5.79 10.505C5.503 10.617 5.313 10.895 5.313 11.205C5.313 11.515 5.503 11.79 5.791 11.903L11.411 14.095L13.571 20.595C13.673 20.901 13.961 21.108 14.283 21.108C14.605 21.108 14.893 20.901 14.995 20.595L17.155 14.095L22.775 11.903C23.062 11.791 23.252 11.513 23.252 11.203C23.252 10.893 23.062 10.618 22.774 10.506H22.772ZM16.282 12.826C16.074 12.906 15.912 13.076 15.842 13.286L14.282 17.9811L12.722 13.288C12.652 13.078 12.492 12.908 12.284 12.826L8.129 11.206L12.283 9.58405C12.491 9.50405 12.653 9.33405 12.723 9.12205L14.283 4.42905L15.843 9.12305C15.913 9.33505 16.073 9.50505 16.281 9.58605L20.436 11.206L16.281 12.828L16.282 12.826ZM6.663 3.81205H4.783V2.05005C4.783 1.63605 4.446 1.30005 4.033 1.30005C3.62 1.30005 3.283 1.63605 3.283 2.05005V3.81205H1.5C1.086 3.81205 0.75 4.14805 0.75 4.56205C0.75 4.97605 1.086 5.31205 1.5 5.31205H3.282V7.07405C3.282 7.48805 3.618 7.82405 4.032 7.82405C4.446 7.82405 4.782 7.48805 4.782 7.07405V5.31205H6.662C7.077 5.31205 7.412 4.97605 7.412 4.56205C7.412 4.14805 7.077 3.81205 6.662 3.81205H6.663ZM9.198 19.434H8.098V18.418C8.098 18.004 7.763 17.668 7.348 17.668C6.933 17.668 6.598 18.004 6.598 18.418V19.434H5.57C5.156 19.434 4.82 19.77 4.82 20.184C4.82 20.598 5.156 20.934 5.57 20.934H6.6V21.9501C6.6 22.3641 6.935 22.7001 7.35 22.7001C7.765 22.7001 8.1 22.3641 8.1 21.9501V20.934H9.198C9.612 20.934 9.948 20.598 9.948 20.184C9.948 19.77 9.612 19.434 9.198 19.434V19.434Z"
                                fill="black"
                            />
                        </svg>
                    </UploadImg>

                    <form onSubmit={onSubmit}>
                        <Btn type="submit" onSubmit={onSubmit}>
                            Tweet
                        </Btn>
                    </form>

                    {/* <Btn form onSubmit={onSubmit}> 
                       Tweet
                    </Btn> */}
                </TotalFeed>
                <AllFeed>
                    <CommentFeed>{feed.CONTENT}</CommentFeed>

                    <TotalFeed>
                        {data.postDetail?.map(value =>
                            <MapFeedWrap key={value.postInfo._id}>
                                <>
                                <ImgContentWrap>
                                <TweetProfileImg src="https://lh3.googleusercontent.com/a/AItbvmkSJ_xTohZASxEYTNzTumaAkOEK36BQqs38Q60V=s96-c" />

                                    <InnerImgContentWrap>
                                    <Contentbox>
                                        <div>{value.postInfo.CONTENT}</div>
                                        <div>{value.postInfo.TIMESTAMPS}</div>
                                        <div>{value.postInfo.POST_PHOTO}</div>
                                    </Contentbox>
                                
                                    <CommentImg>
                                        <img src={comment} alt="comment" width="20"></img>
                                        <img src={comment1} alt="comment" width="20"></img>
                                        <img src={comment2} alt="comment" width="20"></img>
                                        <img src={comment3} alt="comment" width="20"></img>
                                        <img src={comment4} alt="comment" width="20"></img>
                                    </CommentImg>
                                    </InnerImgContentWrap>

                                </ImgContentWrap>
                                </>
                            </MapFeedWrap>
                        )
                           
                        }


                    </TotalFeed>
                    {/* <div className="bye" backgroundcolor="red">111{state.array}</div> */}
                </AllFeed>
            </CenterWrap >
            <RightWrap>
                <SearchWrap>
                    <SearchImg>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M15.4613 14.6221L12.5638 11.7246C13.6127 10.4817 14.25 8.87775 14.25 7.125C14.25 3.19042 11.0596 0 7.125 0C3.19042 0 0 3.19042 0 7.125C0 11.0596 3.19042 14.25 7.125 14.25C8.87854 14.25 10.4817 13.6135 11.723 12.5638L14.6205 15.4613C14.7369 15.5768 14.8897 15.6354 15.0401 15.6354C15.1905 15.6354 15.3449 15.5776 15.4597 15.4613C15.6932 15.2293 15.6932 14.854 15.4613 14.6221V14.6221ZM1.1875 7.125C1.1875 3.85146 3.85146 1.1875 7.125 1.1875C10.3985 1.1875 13.0625 3.85146 13.0625 7.125C13.0625 10.3985 10.3985 13.0625 7.125 13.0625C3.85146 13.0625 1.1875 10.3985 1.1875 7.125Z"
                                fill="#5B7083"
                            />
                        </svg>
                    </SearchImg>
                    <Search
                        value={feed.CONTENT}
                        name="SEARCH"
                        placeholder="Search Twitter"
                        onChange={onchangeHandler}
                    ></Search>
                </SearchWrap>
                <BoxWrap>
                    <h2>Trends for you</h2>
                    <Box className="grayHover">예시1</Box>
                    <Box className="grayHover">예시1</Box>
                    <Box className="grayHover">예시1</Box>
                    <Box className="grayHover">예시1</Box>
                    <Box className="grayHover">예시1</Box>
                    <Box className="grayHover">예시1</Box>
                    <Box className="grayHover">예시1</Box>
                </BoxWrap>
                <FollowBox count={2} />
            </RightWrap>
        </Total >
    );
};

export default withCookies(Home);
const Total = styled.div`
  display: flex;
  justify-content: center;
`;
// const Black = styled.div`
// width: 12.5vw;
// `;

const RightWrap = styled.div`
  flex-direction: column;
  /* border-left: 2px solid gray; */
  padding: 12px;
  padding-left: 35px;
  padding-bottom: 64px;
`;

const CenterWrap = styled.div`
  /* border : 2px solid gray; */
  display: flex;
  flex-direction: column;
  background-color: rgb(239, 243, 244);
`;

const CenterHome = styled.div`
  display: flex;
  align-items: center;
  background-color: gray;
  height: 5vh;
  color: white;
`;

const Input = styled.input`
  width: 30vw;
  font-size: 20px;
  font-weight: 400;
  border: solid white;
`;

const TotalFeed = styled.div`
  background-color: white;
  flex-direction: row;
`;
const FeedWrap = styled.div`
  /* border: 2px solid gray; */
  border-radius: 1rem;
  display: flex;
  justify-content: center; // 중앙이동
  /* background-color: #dee2e6; */
  margin: auto;
  width: 35vw;
  height: 10vh;
  padding: 30px;
`;

const MapFeedWrap = styled.div`
display: flex;
/* flex-direction: column; */
background-color: white;
`;

const UploadImg = styled.button`
  float: left;
  margin-left: 5vw;
`;

const Btn = styled.button`
  float: right;
  font-size: 15px;
  margin-right: 3.5vw;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 16px;
  padding-right: 16px;
  border-width: 1px;
  border-style: solid;
  border-color: white;
  background-color: rgb(29, 155, 240);
  color: white;
  border-radius: 1rem;
`;

const AllFeed = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: black; */
  /* padding: 30px; */
  /* padding-left: 16px;
  padding-right: 16px; */
`;

const CommentBtnWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const CommentFeed = styled.div`
  display: flex;
  /* width: 40vw; */
  font-size: 20px;
  font-weight: 400;
  font-size: 15px;
  border: solid 5px gray;
`;

const ImgContentWrap = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
/* background-color: gray; */
`;

const TweetProfileImg = styled.img`
display: flex;
border-radius: 9999px;
width: 3wv;
height:3vh;
margin: 5px;
`;

const InnerImgContentWrap = styled.div`
display: flex;
flex-direction: column;

`;
const Contentbox = styled.div`
display: flex;
width: 40vw;
  flex-direction: column;
  background-color: white;
  /* border:1px solid gray; */
 
`;

const CommentImg = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: white;
  /* background-color: rgb(239,243,244); */
  border-color: white;
  border-style: solid;

`;

const Test = styled.div`
color:white;
display: flex;
background-color: black;
`;

///우측//////
const BoxWrap = styled.div`
  font-weight: 800;
  font-size: 20px;
  background-color: rgb(247, 249, 249);
  border-radius: 1rem;
  padding: 16px;
  padding-top: 5px;
  height: 60vh;
  margin-bottom: 12px;
`;

const Box = styled.div`
  cursor: pointer;
  transition-property: background-color, box-shadow;
  pointer-events: auto;
  padding: 12px;
  padding-left: 16px;
  padding-right: 16px;
  /* display: flex;
width: 12.5vw;
padding: 16px;
padding-top :12px;
padding-bottom: 12px;
border:2px solid gray;
border-radius: 0.5rem;
background-color: #dee2e6; */
`;

const SearchWrap = styled.div`
  display: flex;
  background-color: rgb(247, 249, 249);
  border-radius: 9999px;
  /* border-radius: 9999px;  */
  flex-direction: row;
  align-items: center;
  padding: 0px;
  margin-bottom: 12px;
  padding: 12px;
`;

const SearchImg = styled.div`
  cursor: default;
  padding-left: 12px;
`;

const Search = styled.input`
  width: 100%;
  background-color: transparent;
  border-radius: 9999px;
  /* margin-bottom: 10px; */
  border-color: transparent;
  font-size: 15px;
`;

const PostedBox = styled.div`
  /* display: flex;
  justify-content: space-between;
  border: 1px solid white;

  width: 50%;
  min-width: 360px;
  max-height: 55px;
  margin: auto;
  background-color: white;
  margin-top: 10px;
  border-radius: 5px;
  padding: 8px;
  overflow: hidden; */
`;


//왼쪽아래에 프로필표시 피드작성왼쪽 프로필표시는 재활용가능한 component//