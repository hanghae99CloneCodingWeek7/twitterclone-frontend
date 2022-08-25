import React, { useState } from "react";
import { openFollowModal } from "Redux/Modules/modalSlice";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import WhoToFollow from "../../UI/Organisems/followBox/WhoToFollow";

const FollowBox = ({ count, data }) => {
  const [whomToFollow, setWhomToFollow] = useState(data);

  const dispatch = useDispatch();
  const goModal = () => {
    dispatch(openFollowModal());
  };

  return (
    <div style={followBoxStyle}>
      <h2> Who to follow </h2>
      {whomToFollow.data.resultData.slice(0, count).map(function (e) {
        return (
          <>
            <WhoToFollow element={e} />
          </>
        );
      })}
      <h2 onClick={goModal}> Show more </h2>
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
