import React from "react";

const ProfileImg = ({ IMG, size }) => {
  const style = {
    width: size + "px" || "40px",
    height: size + "px" || "40px",
    borderRadius: "50%",
    objectFit: "cover",
    objectPosition: "center left",
    margin: "5px",
  };

  return (
    <div onClick={goProfileModal}>
      <img style={style} src={IMG} alt="profileImage" />
    </div>
  );
};

const goProfileModal = () => {
  // alert("프로필 모달로 이동");
};

const style = {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  objectFit: "cover",
  objectPosition: "center left",
  margin: "5px",
  cursor: "pointer",
};

export default ProfileImg;
