import React from "react";
import styled from "styled-components";
import HomeLeft from "../../UI/Organisems/homeLeft";

const Header = () => {
  return (
    <StLeftContainer>
      <StLeftMenuBox>
        <HomeLeft />
        <StLeftUserIdBox>
          <div>유저아이디</div>
        </StLeftUserIdBox>
      </StLeftMenuBox>
    </StLeftContainer>
  );
};

export default Header;

const StLeftContainer = styled.div`
  /* background-color: blue; */
  width: 275px;
  height: 100%;
  float: left; //다음 요소를 왼쪽으로 가로배치하기
`;

const StLeftMenuBox = styled.div`
  /* background-color: blue; */
  position: relative;
  overflow: visible;
  clear: both;
  width: 300px;
  height: 600px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 3px 8px;
`;
const StLeftUserIdBox = styled.div`
  /* background-color: green; */
  width: 300px;
  height: 200px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
