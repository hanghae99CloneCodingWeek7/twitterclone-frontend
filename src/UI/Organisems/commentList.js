import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { deleteCommentList } from "../../Redux/Modules/commentSlice";
import { updateCommentList } from "../../Redux/Modules/commentSlice";
import { getCommentList } from "../../Redux/Modules/commentSlice";

const CommentList = ({ xId, content }) => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const onDelete = (e) => {
    e.preventDefault();
    dispatch(deleteCommentList(xId));
    setInputValue("");
  };

  const onUpdate = (e) => {
    e.preventDefault();
    if (inputValue) {
      dispatch(updateCommentList({ xId, content: inputValue }));
    } else {
      console.log("다시적으세요");
    }
    setInputValue("");
    // window.location.reload();
  };

  //   useEffect(() => {
  //     setInputValue("");
  //   }, []);

  return (
    <div>
      <h4>
        {xId}
        {content}
      </h4>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button type="button" onClick={onDelete}>
        삭제하기
      </button>
      <button type="button" onClick={onUpdate}>
        수정하기
      </button>
    </div>
  );
};

export default CommentList;

const StCommentUpdate = styled.div`
  border: 1px solid black;
`;
