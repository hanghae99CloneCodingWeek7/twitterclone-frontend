import React from "react";
import { useState, useEffect } from "react";
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
import { postFeedThunk } from "../../Redux/Modules/homePageSlice";
// import { GetFeedThunk } from "../../Redux/Modules/gethomePageSlice";
// import ProfileImg from "../../UI/Organisems/myProfileBox/ProfileImg";
import gif from "./gif.png";
import smile from "./smile.png";
import upload from "./upload.png";
import new1 from "./new1.png";
//로그인한 유저정보를 가져오기위한 import
import { getToken } from "../../Redux/Modules/loginSlice"
import { removeCookie, getCookie } from "../../Api/cookie";
import ProfileImg from "../../UI/Organisems/myProfileBox/ProfileImg";
import ProfileModal from "../Modals/ProfileModal";
import WhoToFollow from "../../UI/Organisems/followBox/WhoToFollow";
import WhoToFollowModal from "../Modals/WhoToFollowModal";
import sampleToFollow from "../../mockData/sampleToFollow.json";

const Home = () => {
  const userstate = useSelector((store) => store.loginSlice);
  const leftstate = useSelector((store) => store.loginSlice.post);

  console.log(userstate);
  console.log(leftstate)
  const dispatch = useDispatch();
  // 유저정보를 저장하기위함
  //  const [islogin, setIsLogin] = useState(userEmail);
  useEffect(() => {
    if (getCookie("is_login")) {
      dispatch(getToken());
    }
  }, []);

  const navigate = useNavigate();

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
    event.preventDefault();
    if (feed.CONTENT.trim().length === 0) {
      return alert("내용을 입력하세요!");
    } else {
      dispatch(
        postFeedThunk([
          {
            CONTENT: feed.CONTENT,
            POST_PHOTO: feed.POST_PHOTO,

          },
          {},
        ])
      );
      alert("피드를 작성하였습니다.");
      // navigate("/");
    }
  };

  const onProfile = () => {
    navigate("/profile");
  };

  return (
    <Total>
      <LeftWrap data={leftstate} />
      <ProfileModal willOpen={true} />
      <WhoToFollowModal willOpen={true} />
      <CenterWrap>
        <CenterHome>Home</CenterHome>
        <TotalFeed>
          <FeedWrap>
            <div onClick={onProfile}>
              <TweetProfileImg src="https://lh3.googleusercontent.com/a/AItbvmkSJ_xTohZASxEYTNzTumaAkOEK36BQqs38Q60V=s96-c" />
            </div>
            <Input
              value={feed.CONTENT}
              name="CONTENT" // HTML
              placeholder="What's happening"
              maxLength={500}
              onChange={onchangeHandler}
            ></Input>
          </FeedWrap>


          <UploadTweetWrap>
            <UploadImg>
              <img src={upload} alt="upload" width="20"></img>
              <img src={gif} alt="gif" width="20"></img>
              <img src={smile} alt="smile" width="20"></img>
              <img src={new1} alt="new" width="20"></img>
            </UploadImg>

            <TweetBtn>
              <form onSubmit={onSubmit}>
                <Btn type="submit" onSubmit={onSubmit}>
                  Tweet
                </Btn>
              </form>
            </TweetBtn>
          </UploadTweetWrap>

        </TotalFeed>


        <AllFeed>
          <CommentFeed>{feed.CONTENT}</CommentFeed>

          <TotalFeed>
            {userstate.post?.map((value) => (
              <MapFeedWrap key={value?.postInfo._id}>
                <>
                  <ImgContentWrap>
                    <TweetProfileImg
                      src={
                        value.writerInfo.PROFILE_PIC
                        // ||
                        // "https://lh3.googleusercontent.com/a/AItbvmkSJ_xTohZASxEYTNzTumaAkOEK36BQqs38Q60V=s96-c"
                      }
                    />

                    <InnerImgContentWrap>
                      <Contentbox>
                        <EditDeleteWrap>
                          <button>수정</button>
                          <button>삭제</button>
                        </EditDeleteWrap>

                        <div>{value?.postInfo.CONTENT}</div>
                        <div>{value?.postInfo.TIMESTAMPS}</div>
                        <div>{value?.postInfo.POST_PHOTO}</div>
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
            ))}
          </TotalFeed>
          {/* <div className="bye" backgroundcolor="red">111{state.array}</div> */}
        </AllFeed>
      </CenterWrap>
      <RightWrap>
        <div className="fixed">
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
              value={feed.search}
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
          </BoxWrap>
          <FollowBox count={4} data={sampleToFollow} />
        </div>
      </RightWrap>

    </Total>
  );
};

export default Home;
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
  /* background-color: gray; */
  height: 5vh;
  color: white;
  color: black;
  font-weight: 700;
  background-color: white;
  font-size: 20px;
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
  background-color: #dee2e6;
  margin: auto;
  width: 35vw;
  height: 10vh;
  padding: 30px;
  /* float:left; */
  
`;

const MapFeedWrap = styled.div`
  display: flex;
  /* flex-direction: column; */
  background-color: white;
`;

const UploadTweetWrap = styled.div`
display: flex;
flex-direction: row;

`;

const UploadImg = styled.button`
background-color: white;
gap:10px;
  display: flex;
  flex-direction: row;
  margin-left: 5vw;
  color: rgb(29, 155, 240);
  border-color: white;
  border-style: solid;
`;

const TweetBtn = styled.div`
display: flex;
/* flex-direction: row-reverse; */
/* background-color: red; */
margin-left: 20vw;
`;

const Btn = styled.button`
display: flex;
float: right;
  font-size: 15px;
  /* margin-right: 3.5vw; */
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 16px;
  padding-right: 16px;
  border-width: 1px;
  border-style: solid;

  background-color: rgb(29, 155, 240);
  color: white;
  border-radius: 1rem;
  margin-bottom: 10px;
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
  /* border: solid 5px gray; */
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
  height: 3vh;
  margin: 5px;
  cursor: pointer;
`;

const InnerImgContentWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const Contentbox = styled.div`
flex-shrink: 1;
display: flex;
width: 40vw;
  flex-direction: column;
  background-color: white;
  border:1px solid gray;
  /* border:1px solid gray; */
`;

const EditDeleteWrap = styled.div`
display: flex;
flex-direction: row-reverse;
`;
const CommentImg = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: white;
  /* background-color: rgb(239,243,244); */
  border-color: white;
  border-style: solid;
  cursor: pointer;
`;

const Test = styled.div`
  color: white;
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