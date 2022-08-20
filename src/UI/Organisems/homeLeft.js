import React from "react";
import styled from "styled-components";
import Grid from "../Atoms/Grid";
import Button from "../Atoms/Button";

// import twitterLogoSmall from "../Atoms/icons/twitterLogoSmall.svg";

// import homebtn from "../Atoms/icons/homebtn.svg";

const HomeLeft = () => {
  return (
    <div>
      {/* <TwitterLogoSmall /> */}
      <Grid margin="10px 0 8px 0">
        <Button>
          {/* <Icons1 /> */}
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



