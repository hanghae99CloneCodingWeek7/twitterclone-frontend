import React, { useState } from "react";
import styled from "styled-components";
import WhoToFollow from "../../UI/Organisems/followBox/WhoToFollow";

const Hashtags = ({ data }) => {
  return (
    <div className="grayHover" style={HashtagsStyle}>
      <p className="profileId" style={margin5}>
        {data.category}
      </p>
      <p className="profileName" style={margin5}>
        #{data.keyword}
      </p>
      <p className="profileId" style={margin5}>
        {data.tweetcount} Tweets
      </p>
    </div>
  );
};

const HashtagsStyle = {
  // container로서의 css
  transitionProperty: "background-color, box-shadow",
  pointerEvents: "auto",
  padding: "12px 20px",
  margin: "0px",
  fontWeight: "normal",
};
const margin5 = {
  margin: "3px",
};

export default Hashtags;
