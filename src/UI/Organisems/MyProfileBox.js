import React from "react";

import ProfileImg from "../Organisems/myProfileBox/ProfileImg";
import ProfileShort from "../Organisems/myProfileBox/ProfileShort";

const goModal = () => {
  alert("모달로 이동");
};

const MyProfileBox = () => {
  return (
    <div style={style} onClick={goModal}>
      <ProfileImg IMG="https://i.kinja-img.com/gawker-media/image/upload/gd8ljenaeahpn0wslmlz.jpg" />
      <ProfileShort />
    </div>
  );
};

const style = {
  display: "flex",
  flexFlow: "row nowrap",
  borderRadius: "200px",
  padding: "15px",
};

export default MyProfileBox;
