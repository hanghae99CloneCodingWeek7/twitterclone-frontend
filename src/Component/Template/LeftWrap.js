import React from "react";
import HomeLeft from "../../UI/Organisems/homeLeft";
import MyProfileBox from "../../UI/Organisems/MyProfileBox";
import { removeCookie, getCookie } from "../../Api/cookie";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const LeftWrap = ({ data }) => {

  const navigate = useNavigate();

    //로그아웃 테스트용
    const onLogout = () => {
      removeCookie("is_login");
      navigate("/")
    }
    
  return (
    <div style={leftStyle}>
      <HomeLeft />
      <LogoutButton onClick={onLogout}>
      로그아웃
      </LogoutButton>
      <MyProfileBox username={data.display_name} profileImg={data.image} />
    </div>
  );
};

const leftStyle = {
  flexBasis: "15%",
  display: "flex",
  height: "100vh",
  flexFlow: "column nowrap",
  justifyContent: "space-between",
  top: "0px",
  position: "sticky",
};

export default LeftWrap;

const LogoutButton = styled.button`
border-style: solid;
border-color: white;
height: 45px;
margin-bottom: 25vh;
border-radius: 9999px;
width: 226px;
margin-left: 27.5px;
font-weight: 600;
padding: 12px;
font-size: 19px;
justify-content: center;
`;