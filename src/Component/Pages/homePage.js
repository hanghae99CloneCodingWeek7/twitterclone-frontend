import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/";

import LeftWrap from "../Template/LeftWrap";
import FollowBox from "../Template/FollowBox";
import styled from "styled-components";

import gif from "./gif.png";
import smile from "./smile.png";
import upload from "./upload.png";
import new1 from "./new1.png";
import { postFeedThunk } from "../../Redux/Modules/homePageSlice";
// import { GetFeedThunk } from "../../Redux/Modules/gethomePageSlice";
// import ProfileImg from "../../UI/Organisems/myProfileBox/ProfileImg";

//로그인한 유저정보를 가져오기위한 import
import { getToken } from "../../Redux/Modules/loginSlice";
import { removeCookie, getCookie } from "../../Api/cookie";
import ProfileImg from "../../UI/Organisems/myProfileBox/ProfileImg";
import { deletePost } from "../../Redux/Modules/homePageSlice";
import ProfileModal from "../Modals/ProfileModal";
import WhoToFollowModal from "../Modals/WhoToFollowModal";
import Hashtags from "../Template/Hashtags";

// 목업 데이터
import sampleToFollow from "../../mockData/sampleToFollow.json";
import hashtags from "../../mockData/hashtags.json";
import IterationFeeds from "Component/Template/IterationFeeds";
import axios from "axios";

const Home = () => {
  const userstate = useSelector((store) => store.loginSlice);
  const leftstate = useSelector((store) => store.loginSlice.post);
  const [usersToFollow, setUsersToFollow] = useState(undefined);

  const dispatch = useDispatch();
  // 유저정보를 저장하기위함
  
  //  const [islogin, setIsLogin] = useState(userEmail);
  useEffect(() => {
    if (getCookie("is_login")) {
      dispatch(getToken());
    }
     axios({
      method: "get",
      url: `https://www.myspaceti.me/api/profiles/whotofollow`,
      headers: {
        Authorization: `Bearer ${getCookie("is_login")}`,
      },
    }).then((e) => {
      setUsersToFollow(e);
    });

  }, [deletePost]);

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
    // event.preventDefault();
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

const Ondelete = () => {
  dispatch(deletePost({}))
  alert("삭제")
};

  const onProfile = () => {
    navigate("/profile");
  };

  return (
    <Total>

      <LeftWrap data={leftstate} />
      <ProfileModal willOpen={true} />
      {usersToFollow ? (
        <WhoToFollowModal willOpen={true} data={usersToFollow} />
      ) : ( <></> )}
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
          <IterationFeeds className="grayHover" />
        </AllFeed>
      </CenterWrap>
      <RightWrap>
        <div class="sticky_wrap">
          <SearchWrap className="sticky">
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
            {hashtags.slice(0, 6).map((e) => {
              return <Hashtags data={e} />;
            })}
            <h2>show more</h2>
          </BoxWrap>
          {usersToFollow ? <FollowBox count={4} data={usersToFollow} /> : <></>}
        </div>
      </RightWrap>



    </Total>
  );
};

export default Home;

// styled-components
const Total = styled.div`
  display: flex;
  justify-content: center;
`;

const RightWrap = styled.div`
  flex-direction: column;
  /* border-left: 2px solid gray; */
  padding: 12px;
  flex-basis: 18%;
  padding-bottom: 64px;
`;
const CenterWrap = styled.div`
  /* border : 2px solid gray; */
  display: flex;
  flex-direction: column;
  flex-basis: 40%;
`;
const CenterHome = styled.div`
  display: flex;
  align-items: center;
  background-color: gray;
  /* background-color: gray; */
  height: 90px;
  margin-left: 50px;
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

const UploadTweetWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

const UploadImg = styled.button`
  background-color: white;
  gap: 10px;
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
`;

const CommentFeed = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: 400;
  font-size: 15px;
`;

const TweetProfileImg = styled.img`
  display: flex;
  border-radius: 9999px;
  width: 3wv;
  height: 3vh;
  margin: 5px;
  cursor: pointer;
`;

///우측//////
const BoxWrap = styled.div`
  font-weight: 800;
  font-size: 20px;
  background-color: rgb(247, 249, 249);
  border-radius: 1rem;
  padding: 16px 0px;
  padding-top: 5px;
  height: auto;
  margin-bottom: 12px;
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
