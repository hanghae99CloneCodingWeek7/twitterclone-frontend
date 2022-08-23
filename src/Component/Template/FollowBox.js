import React, { useState } from "react";
import styled from "styled-components";
import WhoToFollow from "../../UI/Organisems/followBox/WhoToFollow";

const FollowBox = ({ count }) => {
  const [whomToFollow, setWhomToFollow] = useState([
    {
      _id: "630056affde5db42c7dd4800",
      PROFILE_PIC:
        "https://t4.ftcdn.net/jpg/03/40/12/49/360_F_340124934_bz3pQTLrdFpH92ekknuaTHy8JuXgG7fi.jpg",
      DISPLAY_NAME: "Jack Dorsey",
    },
    {
      _id: "630056affde5db42c7dd4800",
      PROFILE_PIC:
        "https://t4.ftcdn.net/jpg/03/40/12/49/360_F_340124934_bz3pQTLrdFpH92ekknuaTHy8JuXgG7fi.jpg",
      DISPLAY_NAME: "Jack Dorsey",
    },
    {
      _id: "630056affde5db42c7dd4800",
      PROFILE_PIC:
        "https://t4.ftcdn.net/jpg/03/40/12/49/360_F_340124934_bz3pQTLrdFpH92ekknuaTHy8JuXgG7fi.jpg",
      DISPLAY_NAME: "Jack Dorsey",
    },
    {
      _id: "630056affde5db42c7dd4800",
      PROFILE_PIC:
        "https://t4.ftcdn.net/jpg/03/40/12/49/360_F_340124934_bz3pQTLrdFpH92ekknuaTHy8JuXgG7fi.jpg",
      DISPLAY_NAME: "Jack Doggy",
    },
    {
      _id: "630056affde5db42c7dd4800",
      PROFILE_PIC:
        "https://t4.ftcdn.net/jpg/03/40/12/49/360_F_340124934_bz3pQTLrdFpH92ekknuaTHy8JuXgG7fi.jpg",
      DISPLAY_NAME: "Jack Dorsey",
    },
    {
      _id: "630056affde5db42c7dd4800",
      PROFILE_PIC:
        "https://t4.ftcdn.net/jpg/03/40/12/49/360_F_340124934_bz3pQTLrdFpH92ekknuaTHy8JuXgG7fi.jpg",
      DISPLAY_NAME: "Jack Dorsey",
    },
    {
      _id: "630056affde5db42c7dd4800",
      PROFILE_PIC:
        "https://t4.ftcdn.net/jpg/03/40/12/49/360_F_340124934_bz3pQTLrdFpH92ekknuaTHy8JuXgG7fi.jpg",
      DISPLAY_NAME: "Jack Dorsey",
    },
    {
      _id: "630056affde5db42c7dd4800",
      PROFILE_PIC:
        "https://t4.ftcdn.net/jpg/03/40/12/49/360_F_340124934_bz3pQTLrdFpH92ekknuaTHy8JuXgG7fi.jpg",
      DISPLAY_NAME: "Jack Doggy",
    },
  ]);

  return (
    <div style={followBoxStyle}>
      <h2> Who to follow </h2>
      {whomToFollow.slice(0, count).map(function (e) {
        return (
          <>
            <WhoToFollow element={e} />
          </>
        );
      })}
      <h2> Show more </h2>
    </div>
  );
};

const followBoxStyle = {
  // container로서의 css
  display: "flex",
  flexFlow: "column nowrap",
  // element로서의 css
  borderRadius: "15px",
  padding: "0px",
  justifyContent: "center",
  background: "rgb(247, 249, 249)",
};

export default FollowBox;

// const BoxWrap2 = styled.div`
//   background-color: #dee2e6;
//   border-radius: 1rem;
//   padding: 16px;
//   padding-top: 5px;
//   height: 30vh;
// `;
