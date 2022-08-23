import React from "react";
import styled from "styled-components";
import Grid from "../../Atoms/Grid";
import Button from "../../Atoms/Button";

const ProfileShort = () => {
  return (
    <div style={style}>
      <div>
        <p className="profileName">Bohyeon Kim</p>
        <p className="profileId">@Bohyeon_kim</p>
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
