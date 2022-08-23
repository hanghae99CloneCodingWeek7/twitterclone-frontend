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
import { useParams } from "react-router-dom";
import ButtonHeaders from "../Atoms/ButtonHeaders";

const HomeLeft = () => {
  const param = useParams();

  return (
    <StOutline>
      <StNav>
        <FaTwitter color="#0095ED" size="40" />
      </StNav>

      <StNav>
        <StDiv>
          <RiHome7Fill color="black" size="30" margin="0 10px 0 " />
          Home
        </StDiv>

        <StDiv>
          <SiSharp color="black" size="30" />
          Explore
        </StDiv>
        <StDiv>
          <GrNotification color="black" size="30" />
          Notifications
        </StDiv>
        <StDiv>
          <BiEnvelope color="black" size="30" />
          Messages
        </StDiv>
        <StDiv>
          <FiBookmark color="black" size="30" />
          Bookmarks
        </StDiv>
        <StDiv>
          <RiFileList2Line color="black" size="30" />
          Lists
        </StDiv>
        <StDiv>
          <CgProfile color="black" size="30" />
          Profile
        </StDiv>
        <StDiv>
          <CgMoreO color="black" size="30" />
          More
        </StDiv>
        <ButtonHeaders
          is_tweeterHover
          width="226px"
          height="52px"
          font_color="#fff"
          bold="900"
        >
          Tweet
        </ButtonHeaders>
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
  /* background-color: yellow; */
  width: 100%;
  /* -webkit-box-direction: normal;
  -webkit-box-orient: vertical;
  flex-direction: column;
  outline-style: none; */
  cursor: pointer;
  /* border: 1px solid black; */
  border-radius: 20px;
  /* transition-property: background-color, box-shadow;
  transition-duration: 2s; */
  -webkit-box-direction: normal;
  -webkit-box-orient: vertical;
  flex-direction: column;
`;

const StDiv = styled.div`
  /* border: 1px solid black; */
  border-radius: 20px;
  -webkit-box-align: center;
  align-items: center;
  /* text-align: center; */
  justify-content: space-between;
  font-size: 25px;
  margin: 20px;
  width: 200px;
  height: 40px;
  /* letter-spacing: 0.006em; //자간 */
  word-spacing: -5px;
  &:hover {
    background-color: #e4f2fb;
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

const StText = styled.div``;

{
  /* <ButtonHeaders >
          <RiHome7Fill color="black" size="30" margin="0 10px 0 " />
          Home
        </ButtonHeaders>

        <ButtonHeaders >
          <SiSharp color="black" size="30" />
          Explore
        </ButtonHeaders>
        <ButtonHeaders >
          <GrNotification color="black" size="30" />
          Notifications
        </ButtonHeaders>
        <ButtonHeaders >
          <BiEnvelope color="black" size="30" />
          Messages
        </ButtonHeaders>
        <ButtonHeaders >
          <FiBookmark color="black" size="30" />
          Bookmarks
        </ButtonHeaders>
        <ButtonHeaders >
          <RiFileList2Line color="black" size="30" />
          Lists
        </ButtonHeaders>
        <ButtonHeaders >
          <CgProfile color="black" size="30" />
          Profile
        </ButtonHeaders>
        <ButtonHeaders >
          <CgMoreO color="black" size="30" />
          More
        </ButtonHeaders>
        <ButtonHeaders
          is_tweeterHover
          width="226px"
          height="52px"
          font_color="#fff"
          bold="900"
        >
          Tweet
        </ButtonHeaders> */
}
