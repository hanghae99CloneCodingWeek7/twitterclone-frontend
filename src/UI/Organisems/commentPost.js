import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCommentList } from "../../Redux/Modules/commentSlice";
import { addCommentList } from "../../Redux/Modules/commentSlice";
import { deleteCommentList } from "../../Redux/Modules/commentSlice";
import { updateCommentList } from "../../Redux/Modules/commentSlice";
import CommentList from "./commentList";
import InputComment from "../Atoms/inputComment";

const CommentPost = (props) => {
  //모달창 props 상위 컴포넌트에서 보내준것들...
  const { open, close, header } = props;
  //모달 props 미사용시
  const [modal, setModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  // param
  const param = useParams();
  //dispatch
  const dispatch = useDispatch();

  //인풋(댓글) 입력시 값을 담을 state
  const [inputValue, setInputValue] = useState("");

  //store에서 받아오는 데이터(댓글get)
  const cList = useSelector((state) => state.commentSlice);
  console.log(cList);

  //form submit , 들어온값을 payload로 담아서 dispatch로 보낸다(리듀서에서 작성된 모듈을 사용해서)
  const onCreate = (e) => {
    e.preventDefault();
    console.log(e);
    if (inputValue) {
      const newComment = { value: inputValue }; //!comment 이름 변경 될 수있으니 확인할것
      dispatch(addCommentList(newComment));
      setInputValue("");
    } else {
      console.log("값을 입력해야합니다");
    }
  };

  //ㅇ
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
      </form>
      <div>
        {/* //!map 오류시 && 추가할것. */}
        {cList &&
          cList.map((x, y) => {
            if (parseInt(x.post_id) === parseInt(param.id)) {
              return (
                <div key={x.COMMENT_ID}>
                  <CommentList
                    key={x.id}
                    xId={x.id}
                    x={x}
                    y={y}
                    content={x.content}
                    setModal={setModal}
                    setSelectedIndex={setSelectedIndex}
                  ></CommentList>
                </div>
              );
            }
          })}
      </div>
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

// 백업 map
// <form onSubmit={onCreate}>
//         <input
//           type="text"
//           onChange={(e) => setInputValue(e.target.value)}
//           value={inputValue}
//         />
//         <button type="submit">추가</button>
//         <div>
//           {/* //!map 오류시 && 추가할것. */}
//           {cList &&
//             cList.map((x) => (
//               <CommentList
//                 key={x.id}
//                 xId={x.id}
//                 content={x.content}
//               ></CommentList>
//             ))}
//         </div>
//       </form>
