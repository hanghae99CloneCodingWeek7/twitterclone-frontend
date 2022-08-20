import React from 'react';
import '../Molcules/modal.css'
import Button from "../Atoms/Button"
import styled from "styled-components";
import Input from "../Atoms/input"
import {FaTwitter} from "react-icons/fa"

const SignupModal = (props) => {
  // 모달 팔업 용 state
  const {joinOpen , joinClose, header} = props;

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


  //조건을 순서대로 통과하면 버튼활성화
  // const onChange = (e) =>{
  //   const REGEMAIL = 
  // }






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
              <Input placeholder='이메일을 입력해주세요' maxlength="12" type="email" onChange="" value="" />
           </EmailInput>
            <PwInput>
              <Input placeholder='비밀번호를 입력해주세요' />
            </PwInput>
            <PwInput2>
              <Input placeholder='비밀번호를 한번더 입력해주세요' />
            </PwInput2> 
            <FirstName>
              <Input placeholder='이름을 입력해주세요' />
            </FirstName> 
            <LastName>
              <Input placeholder='성을 입력해주세요' />
            </LastName> 

           <JoinBtn>
           <Button
            width={'274px'} 
            height={'30px'}
            margin = {'0px'}
            text= {`회원가입`}
            backgroundColor = {'#000'}
            fontColor ={'white'}
            borderColor={'#eee'}
             ></Button>
           </JoinBtn>
          </section>
        ) : null}
      </div>   
    )
}

export default SignupModal;


const LoginBtn = styled.div`
margin-left:90px;
margin-top:200px ;
`
 


const HeadIcon =styled.div`
  margin-left: 200px;
`

const EmailInput = styled.div`
   height:50px;
   position: relative;
   bottom: 10px;
   width: 200px;
   margin-left: 120px;
   height:20px;
   margin-top:20px;`

const PwInput = styled.div`
   height:50px;
   position: relative;
   bottom: 10px;
   width: 200px;
   margin-left: 120px;
   margin-top:30px; `


const PwInput2 = styled.div`
height:50px;
position: relative;
bottom: 10px;
width: 200px;
margin-left: 120px;
margin-top:0px; `


const JoinBtn = styled.div`
   margin-left: 90px;
`

const FirstName = styled.div`
 height:50px;
position: relative;
bottom: 10px;
width: 200px;
margin-left: 120px;
margin-top:0px; `

const LastName = styled.div`
 height:50px;
position: relative;
bottom: 10px;
width: 200px;
margin-left: 120px;
margin-top:0px; `