import React, { useState } from "react";
import "../../UI/Molcules/modal.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeProfileModal } from "Redux/Modules/modalSlice";
import styled from "styled-components";

const ProfileModal = () => {
  const userstate = useSelector((store) => store.loginSlice);
  // console.log(userstate);

  //모달창을 위한 props 전달받은 변수
  const isOpen = useSelector((store) => store.modal.isOpenProfileModal);
  // let [isOpened, setIsOpened] = useState(willOpen);
  const navigate = useNavigate(); //로그인 성공시 의 다음 경로 를  리다이렉트 하기위해서 사용
  const dispatch = useDispatch();

  return (
    <div
      className={isOpen ? "openloginModal modal" : "modal"}
      // onClick={}
    >
      <section onClick={(e) => e.stopPropagation()}>
        {/* 클릭 이벤트 중첩을 방지 */}
        <header>
          <button
            className="close btn"
            onClick={() => {
              dispatch(closeProfileModal());
            }}
          >
            &times;
          </button>
        </header>
        <main>Profile</main>
        <body>test</body>
        {userstate.post?.map((value) => (
          <MapFeedWrap key={value?.postInfo._id}>
            <>{value.writerInfo.DISPLAY_NAME}</>
          </MapFeedWrap>
        ))}

        {/*             
                        {userstate.post?.map((value) => (
              <MapFeedWrap key={value?.postInfo._id}>
                <>
                {value.slice(0,1).writerInfo.DISPLAY_NAME}
                </>
              </MapFeedWrap>
            ))} */}
      </section>
    </div>
  );
};

const MapFeedWrap = styled.div`
  display: flex;
  /* flex-direction: column; */
  background-color: white;
`;
export default ProfileModal;
