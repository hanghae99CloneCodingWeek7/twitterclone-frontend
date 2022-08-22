import React from "react";
import styled from "styled-components";
import HomeLeft from "../../UI/Organisems/homeLeft";
import MyProfileBox from "../../UI/Organisems/MyProfileBox";

const Header = () => {
  return (
    <StLeftContainer>
      <StLeftMenuBox>
        <HomeLeft />
      </StLeftMenuBox>
      <StLeftUserBox>
        <MyProfileBox />
      </StLeftUserBox>
    </StLeftContainer>
  );
};

export default Header;

const StLeftContainer = styled.div`
  /* background-color: blue; */
  width: 275px;
  height: 100vh;
`;

const StLeftMenuBox = styled.div`
  /* background-color: blue; */
  width: 100%;
  height: 87%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 3px 8px;
`;
const StLeftUserBox = styled.div`
  /* background-color: green; */
  width: 100%;
  height: 13%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
