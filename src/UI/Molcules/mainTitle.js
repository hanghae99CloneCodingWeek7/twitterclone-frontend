import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../Atoms/Button";
import { FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import LoginModal from "./loginModal";
import SignupModal from "./signupModal";

function MainTitle() {
  const [loginmodalOpen, setloginModalOpen] = useState(false);

  const openloginModal = () => {
    setloginModalOpen(true);
    // modal state가 true 가 되면서 모달창이 열립니다.
  };

  const closeloginModal = () => {
    setloginModalOpen(false);
    // modal state가 false 가 되면서 모달창이 닫힙니다.
  };
  // 로그인모달창 로직

  const [joinModalOpen, setjoinModalOpen] = useState(false);

  const openJoinModal = () => {
    setjoinModalOpen(true);
    // modal state가 true 가 되면서 모달창이 열립니다.
  };

  const closeJoinModal = () => {
    setjoinModalOpen(false);
    // modal state가 false 가 되면서 모달창이 닫힙니다.
  };
  //회원가입창 로직

  const navigate = useNavigate();

  return (
    <Title>
      <Titlecons>
        <FaTwitter size="24" color="#0095ED" />
      </Titlecons>

      <Top>
        <span>지금 일어나고 있는 일</span>
      </Top>

      <Middle>
        <span>오늘 트위터에 가입하세요</span>
      </Middle>

      <GoogleBtn>
        <Button
          width={"274px"}
          height={"38px"}
          margin={"-15px "}
          text={`Google 계정으로 가입하기`}
          backgroundColor={"#fff"}
          fontColor={"black"}
          borderColor={"#eee"}
        />
        <Ic>
          <FcGoogle size="24"></FcGoogle>
        </Ic>
      </GoogleBtn>
      <Button
        _onClick={() => navigate("/home")}
        width={"274px"}
        height={"38px"}
        text={"Apple 에서 가입하기(미구현)"}
        margin={" 15px  "}
        backgroundColor={"#fff"}
        fontColor={"black"}
        borderColor={"white"}
      />

      <p style={{ marginLeft: "120px" }}>또는</p>

      <Button
        _onClick={openJoinModal}
        width={"274px"}
        height={"38px"}
        text={"이메일 주소로 가입하기"}
        margin={"  10px "}
        backgroundColor={"#0095ED"}
        fontColor={"white"}
        borderColor={"#000"}
      />
      <Agree>
        가입하시려면 쿠키 사용을 포함해 이용약관과 개인정보 처리방침에 동의해야
        합니다.
      </Agree>

      <IsJoin>이미 트위터에 가입하셨나요?</IsJoin>
      <Button
        _onClick={openloginModal}
        width={"274px"}
        height={"38px"}
        text={"로그인"}
        margin={"  14px "}
        backgroundColor={"#fff"}
        fontColor={"#0095ED"}
      />
      <LoginModal loginOpen={loginmodalOpen} loginClose={closeloginModal}>
        트위터에 로그인하기
      </LoginModal>
      <SignupModal
        joinOpen={joinModalOpen}
        joinClose={closeJoinModal}
        header="계정을 생성하세요"
      >
        회원가입하기
      </SignupModal>
    </Title>
  );
}

export default MainTitle;

const Title = styled.div`
  text-align: left;
  margin: 150px 20px;
`;

const Top = styled.div`
  font-size: 3.2rem;
  font-weight: bold;
`;

const Middle = styled.div`
  margin: 30px 0;
  font-weight: bold;
  font-size: 2rem;
`;
const Agree = styled.p`
  width: 240px;
  height: 10px;
  margin-left: 10px;
  font-size: 3px;
`;

const IsJoin = styled.p`
  margin-top: 40px;
`;

const Ic = styled.div`
  display: inline-block;
  position: relative;
  bottom: 15px;
  left: 0px;
`;

const Titlecons = styled.div`
  display: inline-block;
  position: relative;
  bottom: 50px;
`;

const GoogleBtn = styled.div`
  margin-left: 30px;
`;
