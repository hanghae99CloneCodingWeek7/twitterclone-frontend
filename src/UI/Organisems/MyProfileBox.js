import React, { useState } from "react";

import ProfileImg from "../Organisems/myProfileBox/ProfileImg";
import ProfileShort from "../Organisems/myProfileBox/ProfileShort";

const goModal = () => {
  alert("모달로 이동");
};

const MyProfileBox = ({ user }) => {
  user.PROFILE_PIC =
    "https://lh3.googleusercontent.com/a/AItbvmkSJ_xTohZASxEYTNzTumaAkOEK36BQqs38Q60V=s96-c";
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const style = {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    borderRadius: "200px",
    padding: "12px",
    backgroundColor: isHover ? "#eee" : "rgb(247, 249, 249)",
  };

  return (
    <div
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={goModal}
    >
      <ProfileImg IMG={user.PROFILE_PIC} />
      <ProfileShort />
    </div>
  );
};

export default MyProfileBox;
