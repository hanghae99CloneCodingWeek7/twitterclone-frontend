import React from "react";
import styled from "styled-components";
import Grid from "../../Atoms/Grid";
import Button from "../../Atoms/Button";

const ProfileShort = () => {
  return (
    <div style={style}>
      <div>
        <p>Bohyeon Kim</p>
        <p>@Bohyeon_kim</p>
      </div>
      <button>...</button>
    </div>
  );
};
const style = {
  flexGrow: "2",
  display: "flex",
  flexFlow: "row",
};

export default ProfileShort;
