import React from "react";
import styled from "styled-components";
import FlexHojn from "../Atoms/FlexHojn";
// import Button from "../Atoms/Button";
import { FaTwitter } from "react-icons/fa";
import { RiHome7Fill } from "react-icons/ri";
import { SiSharp } from "react-icons/si";
import { GrNotification } from "react-icons/gr";
import { BiEnvelope } from "react-icons/bi";
import { FiBookmark } from "react-icons/fi";
import { RiFileList2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { CgMoreO } from "react-icons/cg";
import { useNavigate, useParams } from "react-router-dom";
import ButtonHeaders from "../Atoms/ButtonHeaders";
import Button from "../Atoms/Button";
import { removeCookie } from "../../Api/cookie";

const HomeLeft = () => {
  const param = useParams();
  const navigate = useNavigate();

  //로그아웃 테스트용
  const onLogout = () => {
    removeCookie("is_login");
    navigate("/");
  };

  return (
    <StOutline>
      <StNav>
        <StDiv>
          <FaTwitter color="#0095ED" size="40" />
        </StDiv>
      </StNav>

      <StNav>
        <StDiv>
          <RiHome7Fill color="black" size="30" margin="15px" />
          <span className="navMenu active">Home</span>
        </StDiv>

        <StDiv>
          <SiSharp color="black" size="30" />
          <span className="navMenu">Explore</span>
        </StDiv>
        <StDiv>
          <GrNotification color="black" size="30" />
          <span className="navMenu">Notifications</span>
        </StDiv>
        <StDiv>
          <BiEnvelope color="black" size="30" />
          <span className="navMenu">Messages</span>
        </StDiv>
        <StDiv>
          <FiBookmark color="black" size="30" />
          <span className="navMenu">Bookmarks</span>
        </StDiv>
        <StDiv>
          <RiFileList2Line color="black" size="30" />
          <span className="navMenu">Lists</span>
        </StDiv>
        <StDiv>
          <CgProfile color="black" size="30" />
          <span className="navMenu">Profile</span>
        </StDiv>
        <StDiv>
          <CgMoreO color="black" size="30" />
          <span className="navMenu">More</span>
        </StDiv>
        <ButtonHeaders
          is_tweeterHover
          width="85%"
          height="52px"
          font_color="#fff"
          bold="900"
          margin="10px auto"
        >
          Tweet
        </ButtonHeaders>
        <LogoutButton className="grayHover" onClick={onLogout}>
          로그아웃
        </LogoutButton>
      </StNav>
    </StOutline>
  );
};

export default HomeLeft;

const StOutline = styled.div`
  /* background-color: gray; */
  width: 100%;
  height: 100%;
`;

const StA = styled.a`
  cursor: pointer;
`;

const StNav = styled.nav`
  width: 100%;
  cursor: pointer;

  flex-flow: column nowrap;
  justify-content: center;
`;

const StDiv = styled.div`
  /* border: 1px solid black; */
  -webkit-box-align: center;
  border-radius: 30px;
  align-items: center;
  /* text-align: center; */
  display: flex;
  flex-flow: row nowrap;
  justify-content: left;
  font-size: 20px;
  margin: 20px auto;
  padding: 15px;
  width: 200px;
  height: 40px;
  word-spacing: -5px;
  &:hover {
    background-color: #eee;
    transition: 0.2s;
  }
  &:not(:hover) {
    transition: 0.2s;
  }
`;

const StTweet = styled(StDiv)`
  text-align: center;
  background-color: #1d9bf0;
  color: white;
  padding: auto;
`;

const LogoutButton = styled.button`
  border: none;
  height: 45px;
  margin: 20px 20px;
  border-radius: 9999px;
  width: 40%;
  font-weight: 400;
  font-size: 15px;
  justify-content: center;
`;
