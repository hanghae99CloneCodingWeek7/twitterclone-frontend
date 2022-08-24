import React from "react";
import styled from "styled-components";
import Grid from "../../Atoms/Grid";
import Button from "../../Atoms/Button";

const ProfileShort = ({ username }) => {
  const style = {
    flexGrow: "3",
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    color: "#555",
    marginLeft: "5px",
  };
  const box = {
    width: "52px",
    height: "52px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "30px",
  };

  return (
    <div style={style}>
      <div>
        <p className="profileName">{username}</p>
        <p className="profileId">@{username}</p>
      </div>
      <div style={box}>ꞏ ꞏ ꞏ</div>
    </div>
  );
};

export default ProfileShort;
