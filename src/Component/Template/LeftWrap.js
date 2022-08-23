import React from "react";
import HomeLeft from "../../UI/Organisems/homeLeft";
import MyProfileBox from "../../UI/Organisems/MyProfileBox";

const LeftWrap = () => {
  return (
    <div style={leftStyle}>
      <HomeLeft />
      <MyProfileBox user={{}} />
    </div>
  );
};

const leftStyle = {
  flexBasis: "15%",
  display: "flex",
  height: "100vh",
  flexFlow: "column nowrap",
  justifyContent: "space-between",
};

export default LeftWrap;
