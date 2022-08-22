import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getCommentList } from "../../Redux/Modules/commentSlice";
import { addCommentList } from "../../Redux/Modules/commentSlice";
import { deleteCommentList } from "../../Redux/Modules/commentSlice";
import { updateCommentList } from "../../Redux/Modules/commentSlice";
import CommentList from "./commentList";

const CommentPost = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const commentList = useSelector((state) => state.commentReducer);

  const onCreate = (e) => {
    e.preventDefault();
    console.log(e);
    if (inputValue) {
      const newComment = { content: inputValue }; //!comment 이름 변경 될 수있으니 확인할것
      dispatch(addCommentList(newComment));
      setInputValue("");
    } else {
      console.log("적으세요");
    }
  };

  useEffect(() => {
    dispatch(getCommentList());
  }, []);

  //////////////////////////////
  return (
    <StOutline>
      <form onSubmit={onCreate}>
        <div>
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            // required
            width="20rem"
            marginRight="20px"
          />
          {/* <input
            type="text"
            name="comment"
            //   value={comment}
            placeholder="댓글을 입력해주세요"
            onChange={onChange}
            required
            width="30rem"
          /> */}
        </div>
        <button backgroundColor="black" color="white">
          추가하기
        </button>
        <div>
          {/* //!map 오류시 && 추가할것. */}
          {commentList &&
            commentList.map((x) => (
              <CommentList
                key={x.id}
                xId={x.id}
                content={x.content}
              ></CommentList>
            ))}
        </div>
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
  overflow: scroll;
  /* border: 1px solid black; */
`;
