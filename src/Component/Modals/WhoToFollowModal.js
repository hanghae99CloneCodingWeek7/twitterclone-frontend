import React, { useState } from "react";
import "../../UI/Molcules/modal.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import WhoToFollow from "../../UI/Organisems/followBox/WhoToFollow";

const WhoToFollowModal = ({ willOpen }) => {
  //모달창을 위한 props 전달받은 변수
  let [isOpened, setIsOpened] = useState(willOpen);
  const [whomToFollow, setWhomToFollow] = useState(followerRecommendation);
  const [howManyShow, setHowManyShow] = useState(8);

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
      className={isOpened ? "openloginModal modal" : "modal"}
      onClick={() => setIsOpened(false)}
    >
      <section onClick={(e) => e.stopPropagation()}>
        {/* 클릭 이벤트 중첩을 방지 */}
        <header>
          <button className="close btn" onClick={() => setIsOpened(false)}>
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
            <h2>Show more</h2>
          </div>
        </body>
      </section>
    </div>
  );
};

export default WhoToFollowModal;

const followerRecommendation = [
  {
    _id: "630056affde5db42c7dd4800",
    PROFILE_PIC:
      "https://t4.ftcdn.net/jpg/03/40/12/49/360_F_340124934_bz3pQTLrdFpH92ekknuaTHy8JuXgG7fi.jpg",
    DISPLAY_NAME: "Jack Dorsey",
  },
  {
    _id: "630056affde5db42c7dd4800",
    PROFILE_PIC:
      "https://t4.ftcdn.net/jpg/03/40/12/49/360_F_340124934_bz3pQTLrdFpH92ekknuaTHy8JuXgG7fi.jpg",
    DISPLAY_NAME: "Jack Dorsey",
  },
  {
    _id: "630056affde5db42c7dd4800",
    PROFILE_PIC:
      "https://t4.ftcdn.net/jpg/03/40/12/49/360_F_340124934_bz3pQTLrdFpH92ekknuaTHy8JuXgG7fi.jpg",
    DISPLAY_NAME: "Jack Dorsey",
  },
  {
    _id: "630056affde5db42c7dd4800",
    PROFILE_PIC:
      "https://t4.ftcdn.net/jpg/03/40/12/49/360_F_340124934_bz3pQTLrdFpH92ekknuaTHy8JuXgG7fi.jpg",
    DISPLAY_NAME: "Jack Doggy",
  },
  {
    _id: "630056affde5db42c7dd4800",
    PROFILE_PIC:
      "https://t4.ftcdn.net/jpg/03/40/12/49/360_F_340124934_bz3pQTLrdFpH92ekknuaTHy8JuXgG7fi.jpg",
    DISPLAY_NAME: "Jack Dorsey",
  },
  {
    _id: "630056affde5db42c7dd4800",
    PROFILE_PIC:
      "https://t4.ftcdn.net/jpg/03/40/12/49/360_F_340124934_bz3pQTLrdFpH92ekknuaTHy8JuXgG7fi.jpg",
    DISPLAY_NAME: "Jack Dorsey",
  },
  {
    _id: "630056affde5db42c7dd4800",
    PROFILE_PIC:
      "https://t4.ftcdn.net/jpg/03/40/12/49/360_F_340124934_bz3pQTLrdFpH92ekknuaTHy8JuXgG7fi.jpg",
    DISPLAY_NAME: "Jack Dorsey",
  },
  {
    _id: "630056affde5db42c7dd4800",
    PROFILE_PIC:
      "https://t4.ftcdn.net/jpg/03/40/12/49/360_F_340124934_bz3pQTLrdFpH92ekknuaTHy8JuXgG7fi.jpg",
    DISPLAY_NAME: "Jack Doggy",
  },
  {
    _id: "630056affde5db42c7dd4800",
    PROFILE_PIC:
      "https://t4.ftcdn.net/jpg/03/40/12/49/360_F_340124934_bz3pQTLrdFpH92ekknuaTHy8JuXgG7fi.jpg",
    DISPLAY_NAME: "Jack Dorsey",
  },
  {
    _id: "630056affde5db42c7dd4800",
    PROFILE_PIC:
      "https://t4.ftcdn.net/jpg/03/40/12/49/360_F_340124934_bz3pQTLrdFpH92ekknuaTHy8JuXgG7fi.jpg",
    DISPLAY_NAME: "Jack Dorsey",
  },
  {
    _id: "630056affde5db42c7dd4800",
    PROFILE_PIC:
      "https://t4.ftcdn.net/jpg/03/40/12/49/360_F_340124934_bz3pQTLrdFpH92ekknuaTHy8JuXgG7fi.jpg",
    DISPLAY_NAME: "Jack Dorsey",
  },
  {
    _id: "630056affde5db42c7dd4800",
    PROFILE_PIC:
      "https://t4.ftcdn.net/jpg/03/40/12/49/360_F_340124934_bz3pQTLrdFpH92ekknuaTHy8JuXgG7fi.jpg",
    DISPLAY_NAME: "Jack Doggy",
  },
];
