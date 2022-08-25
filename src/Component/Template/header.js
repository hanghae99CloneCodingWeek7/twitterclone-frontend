import React from "react";
import styled from "styled-components";
import HomeLeft from "../../UI/Organisems/homeLeft";

const Header = () => {
  return (
    <StLeftContainer>
      <StLeftMenuBox>
        <HomeLeft />
      </StLeftMenuBox>
      <StLeftUserIdBox></StLeftUserIdBox>
    </StLeftContainer>
  );
};

export default Header;

const StLeftContainer = styled.div`
  /* background-color: blue; */
  margin-left: 300px;
  width: 275px;
  height: 100%;
  float: left; //다음 요소를 왼쪽으로 가로배치하기
`;

const StLeftMenuBox = styled.div`
  /* background-color: green; */
  position: relative;
  width: 100%;
  height: 80%;
  display: flex;
  /* justify-content: flex-start;
  flex-direction: column; */
  padding: 3px 8px;
  /* -webkit-box-align: start; */
  align-items: flex-start;
`;
const StLeftUserIdBox = styled.div`
  /* background-color: yellow; */
  width: 100%;
  height: 200px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: rgba(0, 0, 0, 0);
`;
