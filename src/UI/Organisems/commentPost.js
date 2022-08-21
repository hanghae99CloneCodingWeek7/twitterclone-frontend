import React from "react";
import styled from "styled-components";

const CommentPost = () => {
  const onChange = () => {};

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const { value } = e.target;
    console.log(value);
  };

  //////////////////////////////
  return (
    <StOutline>
      <form
        onSubmit={(e) => {
          onSubmitHandler(e);
        }}
      >
        <div>
          <input
            type="text"
            placeholder="닉네임"
            name="nickname"
            //   value={nickname}
            onChange={onChange}
            required
            width="10rem"
            marginRight="10px"
          />
          <input
            type="text"
            name="comment"
            //   value={comment}
            placeholder="댓글을 입력해주세요"
            onChange={onChange}
            required
            width="30rem"
          />
        </div>
        <button backgroundColor="black" color="white">
          추가하기
        </button>
      </form>
    </StOutline>
  );
};

export default CommentPost;

const StOutline = styled.div`
  position: relative;
  /* background-color: blue; */
  margin-top: 100px;
  margin-left: 400px;
  padding-top: 100px;
  width: 400px;
  height: 600px;
  overflow: hidden;
`;
