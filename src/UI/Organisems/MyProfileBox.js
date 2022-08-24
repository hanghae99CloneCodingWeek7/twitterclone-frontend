import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { openProfileModal } from "Redux/Modules/modalSlice";
import ProfileImg from "../Organisems/myProfileBox/ProfileImg";
import ProfileShort from "../Organisems/myProfileBox/ProfileShort";



const MyProfileBox = ({ username, profileImg }) => {
  const dispatch = useDispatch();
  const goModal = () => {
    dispatch(openProfileModal())
    };
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
      <ProfileImg IMG={profileImg} />
      <ProfileShort username={username} />
    </div>
  );
};

export default MyProfileBox;
