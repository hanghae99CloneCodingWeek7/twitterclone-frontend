import React, { useEffect, useState } from "react";
import "../../UI/Molcules/modal.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ProfileImg from "UI/Organisems/myProfileBox/ProfileImg";
import { openFollowModal, closeProfileModal } from "Redux/Modules/modalSlice";

const ProfileModal = ({ loginUser, userProfile }) => {
  const userstate = useSelector((store) => store.loginSlice);
  const isOpen = useSelector((store) => store.modal.isOpenProfileModal);

  //모달창을 위한 props 전달받은 변수
  // const isOpen = useSelector((store) => store.modal.isOpenProfileModal)
  // let [isOpened, setIsOpened] = useState(willOpen);
  const navigate = useNavigate(); //로그인 성공시 의 다음 경로 를  리다이렉트 하기위해서 사용
  const dispatch = useDispatch();

  const divStyle = {
    margin: "20px",
    disply: "flex",
  };

  const textMargin = {
    margin: "20px",
  };

  const columnStyle = {
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div
      className={isOpen ? "openloginModal modal" : "modal"}
      // onClick={}
    >
      <section onClick={(e) => e.stopPropagation()}>
        {/* 클릭 이벤트 중첩을 방지 */}
        <header>
          {/* 모달 닫기 */}
          <button
            className="close btn"
            onClick={() => {
              dispatch(closeProfileModal());
            }}
          >
            &times;
          </button>
        </header>

        {loginUser?.data.myProfile._id === userProfile?.data.myProfile._id ? (
          <div style={divStyle}>
            <h2>My Profile</h2>
            <div style={columnStyle} id={userProfile?.data.myProfile._id}>
              <ProfileImg
                IMG={userProfile?.data.myProfile.PROFILE_PIC}
                size={120}
              />
              <h2>{userProfile?.data.myProfile.DISPLAY_NAME}</h2>

              <span style={textMargin} className="profileName">
                {userProfile?.data.myProfile.LAST_NAME}{" "}
                {userProfile?.data.myProfile.FIRST_NAME}
              </span>
              <p style={textMargin} className="profileName">
                {new Date(userProfile?.data.myProfile.TIMESTAMPS).getFullYear()}
                년{" "}
                {new Date(userProfile?.data.myProfile.TIMESTAMPS).getMonth() +
                  1}
                월 가입
              </p>
              <p style={textMargin} className="profileName">
                <a
                  onClick={() => {
                    dispatch(openFollowModal());
                    dispatch(closeProfileModal());
                  }}
                >
                  <span>FOLLOWER</span>{" "}
                  {userProfile?.data.myProfile.FOLLOWER.length} 명
                </a>{" "}
                /{" "}
                <a
                  onClick={() => {
                    dispatch(openFollowModal());
                    dispatch(closeProfileModal());
                  }}
                >
                  <span>FOLLOWING</span>{" "}
                  {userProfile?.data.myProfile.FOLLOWING.length} 명{" "}
                </a>
              </p>
              <a href="#">수정하기</a>
            </div>
          </div>
        ) : (
          <div style={divStyle}>
            <h2>My Profile</h2>
            <div style={columnStyle} id={userProfile?.data.myProfile._id}>
              <ProfileImg
                IMG={userProfile?.data.myProfile.PROFILE_PIC}
                size={120}
              />
              <h2>{userProfile?.data.myProfile.DISPLAY_NAME}</h2>

              <span style={textMargin} className="profileName">
                {userProfile?.data.myProfile.LAST_NAME}{" "}
                {userProfile?.data.myProfile.FIRST_NAME}
              </span>
              <p style={textMargin} className="profileName">
                {new Date(userProfile?.data.myProfile.TIMESTAMPS).getFullYear()}
                년{" "}
                {new Date(userProfile?.data.myProfile.TIMESTAMPS).getMonth() +
                  1}
                월 가입
              </p>
              <p style={textMargin} className="profileName">
                <a
                  onClick={() => {
                    dispatch(openFollowModal());
                    dispatch(closeProfileModal());
                  }}
                >
                  <span>FOLLOWER</span>{" "}
                  {userProfile?.data.myProfile.FOLLOWER.length} 명
                </a>{" "}
                /{" "}
                <a
                  onClick={() => {
                    dispatch(openFollowModal());
                    dispatch(closeProfileModal());
                  }}
                >
                  <span>FOLLOWING</span>
                  {userProfile?.data.myProfile.FOLLOWING.length} 명{" "}
                </a>
              </p>
              <a href="#">수정하기</a>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

// _id: "630056affde5db42c7dd4800",
// FIRST_NAME: "Jack",
// LAST_NAME: "Dorsey",
// PROFILE_PIC" "https://t4.ftcdn.~.jpg",
// FOLLOWER: [”ffde5db4~”, ”b42c7dd4~”],
// FOLLOWING:  [”ffde5db4~”, ”b42c7dd4~”],
// REGISTER_FROM: "web",
// DISPLAY_NAME: "Jack Dorsey",
// TIMESTAMPS: "2022-08-20T03:36:15.519Z"

const MapFeedWrap = styled.div`
  display: flex;
  /* flex-direction: column; */
  background-color: white;
`;
export default ProfileModal;
