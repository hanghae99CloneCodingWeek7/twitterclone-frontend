import React from "react";

const ProfileImg = ({ USER_ID }) => {
  return (
    <div>
      <img
        style={style}
        src="https://i.kinja-img.com/gawker-media/image/upload/gd8ljenaeahpn0wslmlz.jpg"
        alt="profileImage"
      />
    </div>
  );
};

const style = {
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  objectFit: "cover",
  objectPosition: "center left",
};

export default ProfileImg;
