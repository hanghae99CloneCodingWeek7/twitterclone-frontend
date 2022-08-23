import React, { useState } from "react";
import styled from "styled-components";
import CommentPost from "./commentPost";


function CommentFront() {
  //modal
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <CommentPost />
    // <Wrap>
    //   <button onClick={openModal}>코멘트 작성</button>
    //   {/* <CommentPost /> */}
    //   <CommentPost
    //     open={modalOpen}
    //     close={closeModal}
    //     // header="Modal heading"
    //   ></CommentPost>

    //   {/* // Modal.js <main> {props.children} </main>에 내용이 입력된다. 리액트
    //     함수형 모달 팝업창입니다. 쉽게 만들 수 있어요. 같이 만들어봐요! */}
    // </Wrap>
  );
}

export default CommentFront;

const Wrap = styled.div`
  background-color: skyblue;
  display: block;
  background-color: green;
  flex-wrap: wrap;
  width: 300px;
  height: 100px;
  display: flex;
  position: relative;
  margin: auto;
`;
