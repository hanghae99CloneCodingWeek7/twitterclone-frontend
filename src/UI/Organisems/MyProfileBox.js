import React from "react";
import Button from "../Atoms/Button";

import ProfileImg from "../Organisems/myProfileBox/ProfileImg";
import ProfileShort from "../Organisems/myProfileBox/ProfileShort";

const MyProfileBox = () => {
  return (
    <div>
      <Container style={style} />
    </div>
  );
};

const Container = () => {
  return (
    <div>
      <ProfileImg />
      <ProfileShort />
    </div>
  );
};

export default MyProfileBox;
