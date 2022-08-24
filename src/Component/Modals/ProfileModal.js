import React, { useState } from "react";
import "../../UI/Molcules/modal.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const ProfileModal = ({ willOpen }) => {
  //모달창을 위한 props 전달받은 변수
  let [isOpened, setIsOpened] = useState(willOpen);
  const navigate = useNavigate(); //로그인 성공시 의 다음 경로 를  리다이렉트 하기위해서 사용
  const dispatch = useDispatch();

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
        <main>Profile</main>
        <body></body>
      </section>
    </div>
  );
};

export default ProfileModal;
