import React, { useState } from "react";
import "../../UI/Molcules/modal.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import WhoToFollow from "../../UI/Organisems/followBox/WhoToFollow";
import sampleToFollow from "../../mockData/sampleToFollow.json";
import { closeFollowModal } from "Redux/Modules/modalSlice";

// const WhoToFollowModal = ({ willOpen }) => {
  const WhoToFollowModal = () => {
  //모달창을 위한 props 전달받은 변수

  const isOpen = useSelector((store) => store.modal.isOpenFollowModal)
  // let [isOpened, setIsOpened] = useState(willOpen);
  const [whomToFollow, setWhomToFollow] = useState(sampleToFollow);

  const [howManyShow, setHowManyShow] = useState(10);

  const navigate = useNavigate(); //로그인 성공시 의 다음 경로 를  리다이렉트 하기위해서 사용
  const dispatch = useDispatch();

  const modalBodyStyle = {
    display: "flex",
    flexFlow: "column nowrap",
    overflowY: "scroll",
    paddingLeft: "10%",
    paddingRight: "10%",
    height: "410px",
  };

  return (
    <div
      className={isOpen ? "openloginModal modal" : "modal"}
      // onClick={() => setIsOpened(false)}
    >
      <section onClick={(e) => e.stopPropagation()}>
        {/* 클릭 이벤트 중첩을 방지 */}
        <header>
          {/* <button className="close btn" onClick={() => setIsOpened(false)}> */}
          <button className="close btn" onClick={() => {dispatch(closeFollowModal())}}>
            &times;
          </button>
        </header>
        <main>WhoToFollow</main>
        <body>
          <div style={modalBodyStyle}>
          {whomToFollow.slice(0, howManyShow).map(function (e) {
              return (
                <>
                  <WhoToFollow element={e} />
                </>
              );
            })}
            {/* {whomToFollow.data.resultData
              .slice(0, howManyShow)
              .map(function (e) {
                return (
                  <>
                    <WhoToFollow element={e} />
                  </>
                );
              })} */}
            <h2>Show more</h2>
          </div>
        </body>
      </section>
    </div>
  );
};

export default WhoToFollowModal;
