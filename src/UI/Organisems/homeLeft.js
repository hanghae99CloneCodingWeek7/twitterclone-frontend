import React from "react";
import styled from "styled-components";
import Grid from "../Atoms/Grid";
import Button from "../Atoms/Button";

import twitterLogoSmall from "../Atoms/icons/twitterLogoSmall.svg";

import homebtn from "../Atoms/icons/homebtn.svg";

const HomeLeft = () => {
  return (
    <div>
      <TwitterLogoSmall />
      <Grid margin="10px 0 8px 0">
        <Button>
          <Icons1 />
          Home
        </Button>
      </Grid>

      <button>Explore</button>
      <button>Notifications</button>
      <button>Messages</button>
      <button>Bookmarks</button>
      <button>Lists</button>
      <button>Profile</button>
      <button>More</button>
      <button>Tweet</button>
    </div>
  );
};

export default HomeLeft;

const Icons1 = styled.div`
  width: 26px;
  height: 26px;
  background-image: url(${homebtn});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 20px;
`;

const TwitterLogoSmall = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: transparent;
  background-image: url(${twitterLogoSmall});
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: center;
  &:hover {
    background-color: #e4f2fb;
    transition: 0.2s;
  }
  &:not(:hover) {
    transition: 0.2s;
  }
`;
