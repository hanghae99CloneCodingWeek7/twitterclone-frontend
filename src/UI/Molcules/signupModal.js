import React, { useRef, useState } from 'react';
import '../Molcules/modal.css'
import Button from "../Atoms/Button"
import styled from "styled-components";
// import Input from "../Atoms/input"
import {FaTwitter} from "react-icons/fa"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addJoin } from '../../Redux/Modules/JoinSlice';

const SignupModal = (props) => {
  // 모달 팔업 용 state
  const {joinOpen , joinClose, header} = props;

  //dispatch를 통해 리듀서에 보낼 것
  let navigate = useNavigate()

  let dispatch = useDispatch()
  //이메일 input에 포커스를 맞추기위한 useRef 선언
  let emailref = useRef();

// 초기값 설정
  const initialState ={
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName:"",
  };

  //초기설정한 값을 state에  저장
  const [form, setForm] = useState(initialState);

  // 유효성검사시 알림창 뜨도록하는 state
  const [alertBox, setAlertBox] = useState("");

  //유효성검사를 거치면 활성화되는 버튼을 만드는 state
  const [joinToggle, setJoinToggle] = useState(true);

  const { email,password,confirmPassword,firstName,lastName} = form;


  //조건을 순서대로 통과하면 버튼활성화
  const onChange = (e) =>{
    const REGEMAIL = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    //이메일 정규식
    const REGPW = /^[A-Za-z0-9]{6,12}$/;
    //숫자문자 포함형태의 6~12 자리의 정규식

    const {name, value} = e.target
    //구조분해 할당으로 input 입력값을 가져옴
    setForm((form)=>({...form,[name]:value}));
    //구조분해 할당으로 받은 입력값을  기존form(초기값을 전개함)객체에 덮어씌움
    if(form.email === "" || REGEMAIL.test(email)){
      setAlertBox("이메일을 정확히 입력해주세요")
    }else if(password === "" || REGPW.test(password)){
      setAlertBox("비밀번호는 숫자와 문자 포함 6-12자 입니다.")
    }else if(confirmPassword === "" ||confirmPassword !== password){
      setAlertBox("비밀번호가 일치하지 않습니다.")
    }else if(firstName === "" ||firstName.length > 20){
      setAlertBox("이름은 20자 이내로 입력해주세요")
    }else if(lastName === "" ||lastName.length > 20){
      setAlertBox("성은 20자 이내로 입력해주세요")
    }else{
      setAlertBox("");
      //버튼활성화 토글
      setJoinToggle(false);
    }

  };

// 리듀서에 보낼 데이터 작성후 변수에 저장
const joinData = {email, password,confirmPassword, firstName:firstName, lastName:lastName};
//회원가입 버튼

const onClick = ()=>{
  if(
    email ===""||
    password ==="" ||
    confirmPassword ===""||
    firstName ===""||
    lastName === "" 
  ){
    alertBox("빠진 내용이 없나 확인해보세요!");
  }else{
    dispatch(addJoin({navigate, joinData}));
  }
}
    return (
        <div className={joinOpen ? 'openJoinModal modal' : 'modal'}>

          
        {joinOpen ? (
          <section>
            <header>

              <button className="close btn" onClick={joinClose}>
                &times;
              </button>
              <HeadIcon>
               <FaTwitter size="24" color="#0095ED"/>
              </HeadIcon>
                {header}
            </header>
            <main>{props.children}</main>
           <EmailInput>
              <Input 
              autoFocus
              placeholder='이메일을 입력해주세요' 
              maxlength = ""
              type="email"
              name="email" 
              onChange={onChange} 
              value={email}
              ref = {emailref} />
           </EmailInput>
            <PwInput>
              <Input 
              placeholder='비밀번호를 입력해주세요' 
              maxlength="12" 
              name="password"
              type="password" 
              onChange={onChange} 
              value={password}
              />
            </PwInput>
            <PwInput2>
              <Input 
              placeholder='비밀번호를 한번더 입력해주세요'
              maxlength="12" 
              name="confirmPassword"
              type="password" 
              onChange={onChange} 
              value={confirmPassword}
               />
            </PwInput2> 
            <FirstName>
              <Input 
              placeholder='이름을 입력해주세요' 
              maxlength="12"
              name="firstName"
              type="text"
              maxLength="20"
              onChange={onChange} 
              value={firstName}
              />
            </FirstName> 
            <LastName>
              <Input 
              placeholder='성을 입력해주세요'
              maxlength="12"
              name="lastName"
              type="text"
              maxLength="20"
              onChange={onChange} 
              value={lastName} />
            </LastName> 

           <JoinBtn>
           <Button
            disabled={joinToggle}
            width={'274px'} 
            height={'30px'}
            margin = {'0px'}
            text= {`회원가입`}
            backgroundColor = {'#000'}
            fontColor ={'white'}
            borderColor={'#eee'}
            onClick={onClick}
             ></Button>
           </JoinBtn>
          </section>
        ) : null}
      </div>   
    )
}

export default SignupModal;

const HeadIcon =styled.div`
  margin-left: 200px;
`

const EmailInput = styled.div`
   height:50px;
   position: relative;
   bottom: 10px;
   width: 200px;
   margin-left: 110px;
   height:20px;
   margin-top:20px;`

const PwInput = styled.div`
   height:50px;
   position: relative;
   bottom: 10px;
   width: 200px;
   margin-left: 110px;
   margin-top:30px; `


const PwInput2 = styled.div`
height:50px;
position: relative;
bottom: 10px;
width: 200px;
margin-left: 110px;
margin-top:0px; `


const JoinBtn = styled.div`
   margin-left: 90px;
`

const FirstName = styled.div`
 height:50px;
position: relative;
bottom: 10px;
width: 200px;
margin-left: 110px;
margin-top:0px; `

const LastName = styled.div`
 height:50px;
position: relative;
bottom: 10px;
width: 200px;
margin-left: 110px;
margin-top:0px; `

const Input = styled.input`
  padding: 3px ;
  border: 1px solid gainsboro;
  width:15rem ;
  height:2rem ;
  border-radius: 10px ;
  `