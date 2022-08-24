import React from "react";
import HomeLeft from "../../UI/Organisems/homeLeft";
import MyProfileBox from "../../UI/Organisems/MyProfileBox";

const LeftWrap = ({ data }) => {
  return (
    <div style={leftStyle}>
      <HomeLeft />
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
