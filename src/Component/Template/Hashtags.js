import React, { useState } from "react";
import styled from "styled-components";
import WhoToFollow from "../../UI/Organisems/followBox/WhoToFollow";

const Hashtags = ({ data }) => {
  return (
    <div style={HashtagsStyle}>
      <p className="profileId">{data.category}</p>
      <p className="profileName">{data.keyword}</p>
      <p className="profileId">{data.tweetcount} Tweets</p>
    </div>
  );
};

const HashtagsStyle = {
  // container로서의 css
  cursor: "pointer",
  transitionProperty: "background-color, box-shadow",
  pointerEvents: "auto",
  padding: "12px 20px",
  margin: "0px",
  fontWeight: "normal",
};

export default Hashtags;
