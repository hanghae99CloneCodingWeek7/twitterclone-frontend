import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getCommentList } from "../../Redux/Modules/commentSlice";
import { addCommentList } from "../../Redux/Modules/commentSlice";
import { deleteCommentList } from "../../Redux/Modules/commentSlice";
import { updateCommentList } from "../../Redux/Modules/commentSlice";
import CommentList from "./commentList";
import InputComment from "../Atoms/inputComment";

const CommentPost = (props) => {
  //모달창 pros 상위 컴포넌트에서 보내준것들...
  const { open, close, header } = props;

  //
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const cList = useSelector((state) => state.commentSlice);
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
    <div>
      <form onSubmit={onCreate}>
        <input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button type="submit">추가</button>
        <div>
          {/* //!map 오류시 && 추가할것. */}
          {cList &&
            cList.map((x) => (
              <CommentList
                key={x.id}
                xId={x.id}
                content={x.content}
              ></CommentList>
            ))}
        </div>
      </form>
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
{
  /* <div className={open ? "openModal modal" : "modal"}>
      {" "}
      //!확인할것
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>{props.children}</main>
          <footer>
            <button className="close" onClick={close}>
              close
            </button>
          </footer>
        </section>
      ) : null}
    </div> */
}
