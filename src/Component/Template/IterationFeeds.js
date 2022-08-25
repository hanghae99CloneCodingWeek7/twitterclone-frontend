import React, { useEffect, useState } from "react";
import styled from "styled-components";
import WhoToFollow from "../../UI/Organisems/followBox/WhoToFollow";
import { getCookie, setCookie } from "../../Api/cookie";
import axios from "axios";

import comment from "./img/comment.png";
import comment1 from "./img/comment1.png";
import comment2 from "./img/comment2.png";
import comment3 from "./img/comment3.png";
import comment4 from "./img/comment4.png";
import ProfileImg from "UI/Organisems/myProfileBox/ProfileImg";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { deletePost } from "Redux/Modules/homePageSlice";
import { useDispatch } from "react-redux";
import { BiWindows } from "react-icons/bi";

const IterationFeeds = ({ data }) => {
  const navigate = useNavigate(); //댓글페이지이동

  const dispatch = useDispatch();


  const [feeds, setFeeds] = useState({});

  useEffect(() => {
    axios({
      method: "get",
      url: `https://www.myspaceti.me/api/posts`,
      headers: {
        Authorization: `Bearer ${getCookie("is_login")}`,
      },
    }).then((e) => {
      console.log("e", e);
      setFeeds(e);
    });
  }, [deletePost]);

  return (
    <>
      {feeds.data?.postDetail.map((data) => {
        return (
          <div style={feedStyle}>
            <MapFeedWrap key={data.postInfo._id}>
              <EditDeleteWrap>
                {/* <button>수정</button> */}
                <FaTrash 
                  color="#ccc"
                  size="20"
                  margin="5px"
                  onClick={() => {
                    dispatch(deletePost(data.postInfo._id))
                    alert("삭제가 완료되었습니다.")
                    
                  }
                }
                

                />
              </EditDeleteWrap>
              <ImgContentWrap>
                <ProfileImg IMG={data.writerInfo.PROFILE_PIC} size={50} />
                <InnerImgContentWrap>
                  <Contentbox>
                    <p className="profileName">
                      {data.writerInfo.DISPLAY_NAME} {"  "}
                      <span className="profileId">
                        @{data.writerInfo.DISPLAY_NAME} 14h
                      </span>
                    </p>
                    <p>{data.postInfo.CONTENT} 14h</p>
                  </Contentbox>
                  <ImageBox>
                    {data.postInfo.POST_PHOTO ? (
                      <img
                        className="crop"
                        style={imageBoxStyle}
                        src={data.postInfo.POST_PHOTO}
                      ></img>
                    ) : (
                      <></>
                    )}
                  </ImageBox>
                  <CommentImg>
                    <img
                      style={commentIconStyle}
                      src={comment}
                      onClick={() =>
                        alert(
                          "포스트 ID" +
                          data.postInfo._id +
                          "에 댓글을 확인하고 게시합니다."
                        )

                      }
                      alt="코멘트 남기기"
                      width="20"
                    ></img>
                    <img
                      src={comment1}
                      style={commentIconStyle}
                      alt="comment"
                      width="20"
                    ></img>
                    <img
                      src={comment2}
                      style={commentIconStyle}
                      alt="comment"
                      width="20"
                    ></img>
                    <img
                      src={comment3}
                      style={commentIconStyle}
                      alt="comment"
                      width="20"
                    ></img>
                    <img
                      src={comment4}
                      style={commentIconStyle}
                      alt="comment"
                      width="20"
                    ></img>
                  </CommentImg>
                </InnerImgContentWrap>
              </ImgContentWrap>
            </MapFeedWrap>
          </div>
        );
      })}
    </>
  );
};

const feedStyle = {
  // container로서의 css
  display: "flex",
  flexFlow: "column nowrap",
  padding: "5px",
  justifyContent: "center",
};

export default IterationFeeds;

const commentIconStyle = {
  margin: "5px 20px",
};
const imageBoxStyle = {
  margin: "10px 3px",
};

const CommentImg = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: white;
  border-color: white;
  border-style: solid;
  cursor: pointer;
`;
const EditDeleteWrap = styled.div`
  display: flex;
  flex-direction: row-reverse;
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

  /* border:1px solid gray; */
`;
const ImageBox = styled.div`
  flex-shrink: 1;
  display: flex;
  width: 40vw;
  flex-direction: column;
  background-color: white;
  /* border:1px solid gray; */
`;
const TweetProfileImg = styled.img`
  display: flex;
  border-radius: 9999px;
  width: 3wv;
  height: 3vh;
  margin: 5px;
  cursor: pointer;
`;

const ImgContentWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const MapFeedWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
`;
