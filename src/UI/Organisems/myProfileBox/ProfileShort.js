import React from "react";
import styled from "styled-components";
import Grid from "../../Atoms/Grid";
import Button from "../../Atoms/Button";

const ProfileShort = ({ username }) => {
  return (
    <div style={style}>
      <div>
        <p className="profileName">{username}</p>
        <p className="profileId">@{username}</p>
      </div>
    </div>
  );
};

const style = {
  flexGrow: "3",
  display: "flex",
  flexFlow: "row",
  color: "#555",
  marginLeft: "5px",
};

export default ProfileShort;
