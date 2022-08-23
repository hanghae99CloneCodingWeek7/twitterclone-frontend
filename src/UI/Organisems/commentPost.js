import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getCommentList } from "../../Redux/Modules/commentSlice";
import { addCommentList } from "../../Redux/Modules/commentSlice";
import { deleteCommentList } from "../../Redux/Modules/commentSlice";
import { updateCommentList } from "../../Redux/Modules/commentSlice";
import CommentList from "./commentList";
import InputComment from "../Atoms/inputComment";
import "./modal.css";

const CommentPost = (props) => {
  const { open, close, header } = props;

  //
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const cList = useSelector((state) => state);
  console.log(cList);

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
    <div className={open ? "openModal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main></main>
          <footer>
            <button className="close" onClick={close}>
              close
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default CommentPost;

const StOutline = styled.div`
  /* background-color: cadetblue; */
  position: absolute;
  margin-top: 100px;
  /* margin-left: 400px; */
  padding-top: 100px;
  width: 400px;
  height: 600px;
  overflow: scroll;
  border: 1px solid black;
`;

const StSection = styled.section`
  max-width: 600px;
`;

//백업
