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
  const {joinOpen , joinClose, header} = props;

  //dispatch를 통해 리듀서에 보낼 것
  let navigate = useNavigate()

  let dispatch = useDispatch()
  //이메일 input에 포커스를 맞추기위한 useRef 선언
  let emailref = useRef();

// 초기값 설정
  const initialState ={
    EMAIL: "",
    PASSWORD: "",
    CONFIRM: "",
    FIRST_NAME: "",
    LAST_NAME:"",
  };

  //초기설정한 값을 state에  저장
  const [form, setForm] = useState(initialState);

  // 유효성검사시 알림창 뜨도록하는 state
  const [alertBox, setAlertBox] = useState("");

  //유효성검사를 거치면 활성화되는 버튼을 만드는 state
  const [joinToggle, setJoinToggle] = useState(true);

  const { EMAIL,PASSWORD,CONFIRM,FIRST_NAME,LAST_NAME} = form;


  //조건을 순서대로 통과하면 버튼활성화
  const onChange = (e) =>{
    // const REGEMAIL = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    //이메일 정규식
    const REGPW = /^[A-Za-z0-9]{6,12}$/;
    //숫자문자 포함형태의 6~12 자리의 정규식

    const {name, value} = e.target
    //구조분해 할당으로 input 입력값을 가져옴
    setForm((form)=>({...form,[name]:value}));
    //구조분해 할당으로 받은 입력값을  기존form(초기값을 전개함)객체에 덮어씌움

     if(PASSWORD === "" || !REGPW.test(PASSWORD)){
      setAlertBox("비밀번호는 숫자와 문자 포함 6-12자 입니다.")
    }else if(CONFIRM === "" ||CONFIRM !== PASSWORD){
      setAlertBox("비밀번호가 일치하지 않습니다.")
    }else if(FIRST_NAME === "" ||FIRST_NAME.length > 20){
      setAlertBox("이름은 20자 이내로 입력해주세요")
    }else if(LAST_NAME === "" ||LAST_NAME.length > 20){
      setAlertBox("성은 20자 이내로 입력해주세요")
    }else{
      setAlertBox("");
      //버튼활성화 토글
      setJoinToggle(false);
    }

  };

// 리듀서에 보낼 데이터 작성후 변수에 저장
const joinData = {EMAIL, PASSWORD,CONFIRM, FIRST_NAME:FIRST_NAME, LAST_NAME:LAST_NAME};
//회원가입 버튼



const onClick = ()=>{
  if(
    EMAIL ===""||
    PASSWORD ==="" ||
    CONFIRM ===""||
    FIRST_NAME ===""||
    LAST_NAME === "" 
  ){
    alert("빠진 내용이 없나 확인해보세요!");
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
              <AlertBox>{alertBox}</AlertBox>
             
            </header>
            <main>{props.children}</main>
           <EmailInput>
              <Input 
              autoFocus
              placeholder='이메일을 입력해주세요' 
              maxlength = ""
              type="email"
              name="EMAIL" 
              onChange={onChange} 
              value={EMAIL}
              ref = {emailref} />
           </EmailInput>
            <PwInput>
              <Input 
              placeholder='비밀번호를 입력해주세요' 
              maxlength="12" 
              name="PASSWORD"
              type="password" 
              onChange={onChange} 
              value={PASSWORD}
              />
            </PwInput>
            <PwInput2>
              <Input 
              placeholder='비밀번호를 한번더 입력해주세요'
              maxlength="12" 
              name="CONFIRM"
              type="password" 
              onChange={onChange} 
              value={CONFIRM}
               />
            </PwInput2> 
            <FirstName>
              <Input 
              placeholder='이름을 입력해주세요' 
              maxlength="12"
              name="FIRST_NAME"
              type="text"
              maxLength="20"
              onChange={onChange} 
              value={FIRST_NAME}
              />
            </FirstName> 
            <LastName>
              <Input 
              placeholder='성을 입력해주세요'
              maxlength="12"
              name="LAST_NAME"
              type="text"
              maxLength="20"
              onChange={onChange} 
              value={LAST_NAME} />
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
            _onClick={onClick}
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
  const AlertBox = styled.div`
  margin:5px;
  padding:3px;
  width:30rem;
  height:3rem;
  border-radius:10px;
  margin: 5px 0px 5px 0px;
  color:red;`