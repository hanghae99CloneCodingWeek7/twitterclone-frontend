import React, { useEffect, useState } from "react";
import ProfileImg from "../myProfileBox/ProfileImg";
import styled from "styled-components";
import { removeCookie, getCookie } from "../../../Api/cookie";
import axios from "axios";
import { openFollowModal, openProfileModal } from "Redux/Modules/modalSlice";
import { useDispatch, useSelector } from "react-redux";

const WhoToFollow = ({ element }) => {
  
  const isOpen = useSelector((store) =>store.modal.isOpenProfileModal);
  const [isHover, setIsHover] = useState(false);


  const dispatch = useDispatch();

  //봐야함
  const followBtnClick = (event, _id) => {
    event.stopPropagation();
    console.log(`${getCookie("is_login")}`);
    axios({
      method: "put",
      url: `https://www.myspaceti.me/api/profiles/follow/${_id}`,
      headers: {
        Authorization: `Bearer ${getCookie("is_login")}`,
      },
    }).then((e) => {
      console.log(e);
      alert("follow 했습니다." + _id);
    });
  };

  useEffect(() => {});

  const goModal = (event) => {
    // event.preventDefault();
    // event.stopPropagation()


    dispatch(openProfileModal())
    // dispatch(openFollowModal())
  };

  const style = {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    padding: "10px 15px",
    alignItems: "center",
    alignContent: "center",
    pointerEvents: "auto",
  };

  const svgStyle = {
    display: "inline",
    width: "15px",
    height: "auto",
    fill: "#ccc",
  };

  return (
    <div style={style} className="grayHover" onClick={goModal}>
      <ProfileImg IMG={element.PROFILE_PIC} size={30} />
      <div>
        <span className="profileId">{element.DISPLAY_NAME} </span>
        <svg
          viewBox="0 0 24 24"
          aria-label="Verified account"
          style={svgStyle}
          role="img"
        >
          <g>
            <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
          </g>
        </svg>
      </div>{" "}
      <FollowButton
        className="follow"
        onClick={(event) => followBtnClick(event, element._id)}
      >
        Follow
      </FollowButton>
    </div>
  );
};

export default WhoToFollow;

const FollowButton = styled.button`
  display: flex;
  height: 2rem;
  background-color: black;
  border-radius: 1rem;
  align-items: center;
  cursor: pointer;
`;
