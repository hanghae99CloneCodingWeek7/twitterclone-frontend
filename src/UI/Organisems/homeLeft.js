import React from "react";
import styled from "styled-components";
import FlexHojn from "../Atoms/FlexHojn";
// import Button from "../Atoms/Button";
import { FaTwitter } from "react-icons/fa";
import { RiHome7Fill } from "react-icons/ri";
import { SiSharp } from "react-icons/si";
import { GrNotification } from "react-icons/gr";
import { BiEnvelope } from "react-icons/bi";
import { FiBookmark } from "react-icons/fi";
import { RiFileList2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { CgMoreO } from "react-icons/cg";

const HomeLeft = () => {
  return (
    <div>
      <FaTwitter color="#0095ED" size="40" />

      <FlexHojn margin="10px 0 8px 0"></FlexHojn>

      <button>
        <RiHome7Fill color="black" size="30" />
        Home
      </button>
      <button>
        <SiSharp />
        Explore
      </button>
      <button>
        <GrNotification />
        Notifications
      </button>
      <button>
        <BiEnvelope />
        Messages
      </button>
      <button>
        <FiBookmark />
        Bookmarks
      </button>
      <button>
        <RiFileList2Line />
        Lists
      </button>
      <button>
        <CgProfile />
        Profile
      </button>
      <button>
        <CgMoreO />
        More
      </button>
      <button>Tweet</button>
    </div>
  );
};

export default HomeLeft;

const StOutline = styled.div``;
