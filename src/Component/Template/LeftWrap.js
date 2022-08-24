import React, { useEffect, useState } from "react";
import HomeLeft from "../../UI/Organisems/homeLeft";
import MyProfileBox from "../../UI/Organisems/MyProfileBox";
import { removeCookie, getCookie } from "../../Api/cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LeftWrap = () => {
  const [feeds, setFeeds] = useState({});

  useEffect(() => {
    axios({
      method: "get",
      url: `https://www.myspaceti.me/api/posts`,
      headers: {
        Authorization: `Bearer ${getCookie("is_login")}`,
      },
    }).then((e) => {
      console.log("e", e);
      setFeeds(e);
    });
  }, []);

  console.log("feeds22", feeds);

  return (
    <div style={leftStyle}>
      <HomeLeft />
      <MyProfileBox
        username={feeds.data?.display_name}
        profileImg={feeds.data?.image}
      />
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

