import React from "react";
import styled from "styled-components";
import "../../UI/Molcules/modal.css";
import CommentList from "UI/Organisems/commentList";
import CommentPost from "UI/Organisems/commentPost";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getCommentList } from "../../Redux/Modules/commentSlice";
import { useParams } from "react-router-dom";
import { addCommentList } from "../../Redux/Modules/commentSlice";
import { deleteCommentList } from "../../Redux/Modules/commentSlice";
import ButtonHeaders from "UI/Atoms/ButtonHeaders";

const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  // 댓글목록
  const cList = useSelector((state) => state.commentSlice);
  console.log(cList);
  const dispatch = useDispatch();

  const post = useSelector((store) => store.loginSlice.post);
  console.log(post);

  // 각각의 고유의 게시글마다 그게시글 만의 댓글이 나오게하려면?

  const params = useParams();
  // console.log(params);
  const search = params.id;
  console.log(search);

  const newPostId = { post_id: search };

  useEffect(() => {
    dispatch(getCommentList(newPostId));
  }, []);
  const [inputValue, setInputValue] = useState();
  const newComment = { CONTENT: inputValue };
  useEffect(() => {
    dispatch(addCommentList(newComment));
  }, []);
  //   dispatch(getCommentList(newPostId));

  //댓글쓰기
  const onCreate = (e) => {
    e.preventDefault();
    console.log(e);
    if (inputValue) {
      console.log(newComment); //!comment 이름 변경 될 수있으니 확인할것

      dispatch(addCommentList(newComment));

      setInputValue("");
      window.location.reload();
    } else {
      console.log("값을 입력해야합니다");
    }
  };

  const onChangeHandler = (e) => {};

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            <button className="close" onClick={close}>
              &times;
            </button>
            <form onSubmit={onCreate}>
              <ButtonHeaders
                is_tweeterHover
                width="30%"
                height="42px"
                font_color="#fff"
                bold="900"
                margin="10px auto"
                type="submit"
              >
                tweet
              </ButtonHeaders>
              <StInput
                type="text"
                placeholder="Tweet your Reply"
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
              />

              {/* //!map 오류시 && 추가할것. */}
              {cList?.map((x) => {
                // if (x.post_id === search) {
                return (
                  <div>
                    <CommentList key={x.id} data={x}></CommentList>
                  </div>
                );
                // }
              })}
            </form>
            {/* <button type="button" onClick={onDelete}>
              삭제하기
            </button> */}
          </header>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;

const StInput = styled.input`
  padding: 3px;
  border: 1px solid gainsboro;
  width: 15rem;
  height: 2rem;
  border-radius: 10px;
`;
