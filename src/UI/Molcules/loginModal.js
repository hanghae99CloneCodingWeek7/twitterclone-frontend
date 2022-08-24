import React, { useState } from "react";
import "../Molcules/modal.css";
import Button from "../Atoms/Button";
import { FcGoogle } from "react-icons/fc";
import styled from "styled-components";
import Input from "../Atoms/input";
import { FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { loginDb } from "../../Redux/Modules/loginSlice";
import {FaGoogle} from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import {loginDB} from "../../Redux/Modules/loginSlice";


const LoginModal = (props) => {
  const google = useSelector((state)=>state.loginSlice);
  console.log(google)

  //모달창을 위한 props 전달받은 변수
  const { loginOpen, loginClose } = props;

  //이메일 저장을 위한 state
  const [EMAIL, setEmail] = useState("");

  console.log(EMAIL);

  // 비밀번호를 저장을 위한 state
  const [PASSWORD, setPassword] = useState("");

  const navigate = useNavigate();
  //로그인 성공시 의 다음 경로 를  리다이렉트 하기위해서 사용

  const dispatch = useDispatch();
  
  const onClick = () =>{
    if (!EMAIL  || !PASSWORD ){
      alert("이메일과 비밀번호를 모두 입력해주세요");
      return;
    } else {
      const login =  { EMAIL, PASSWORD};
      dispatch(loginDb({navigate,login}));
       }
  };


  const googleClick = () =>{
    fetch('https://www.myspaceti.me/api/google').then(

    )
    navigate('/home')
    //
  }



    return (
        <div className={loginOpen ? 'openloginModal modal' : 'modal'}>
        {loginOpen ? (
          <section>
            <header>
              <button className="close btn" onClick={loginClose}>
                &times;
              </button>
              <HeadIcon>
               <FaTwitter size="24" color="#0095ED"/>
              </HeadIcon>
            
            </header>
            <main>{props.children}</main>
            
            <Btn>
           
            <Button
            width={'274px'} 
            height={'30px'}
            margin = {'0px '}
            text= {`Google 계정으로 계속하기`}
            _onClick={googleClick}
            backgroundColor = {'#fff'}
            fontColor ={'black'}
            borderColor={'#eee'}
             ></Button>
          
             <Ic>
                <FcGoogle size="24"></FcGoogle>
             </Ic>

            <Button
              width={"274px"}
              height={"30px"}
              margin={"0px "}
              text={`Apple 계정으로 계속하기(미구현)`}
              backgroundColor={"#fff"}
              fontColor={"black"}
              borderColor={"#eee"}
            ></Button>
          </Btn>

          <p className="or">또는</p>
          <div className="emailInput">
            <input
              placeholder="이메일을 입력해주세요"
              value={EMAIL}
              name="EMAIL"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="pwInput">
            <input
              placeholder="비밀번호를 입력해주세요"
              value={PASSWORD}
              name="PASSWORD"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <LoginBtn>
            <Button
              width={"274px"}
              height={"30px"}
              margin={"10px "}
              text={`로그인`}
              backgroundColor={"#000"}
              fontColor={"white"}
              borderColor={"#eee"}
              _onClick={onClick}
            ></Button>
          </LoginBtn>
        </section>
      ) : null}
    </div>
  );
};

export default LoginModal;

const Ic = styled.div`
  display: inline-block;
  position: relative;
  bottom: 20px;
  right: 300px;
`;

const Btn = styled.div`
  margin-left: 73px;
  margin-top: 10px;
`;

const LoginBtn = styled.div`
  margin-left: 60px;
`;

const HeadIcon = styled.div`
  margin-left: 200px;
`;
