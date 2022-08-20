import React from 'react';
import '../Molcules/modal.css'
import Button from "../Atoms/Button"
import styled from "styled-components";
import Input from "../Atoms/input"
import {FaTwitter} from "react-icons/fa"

const SignupModal = (props) => {
  const {joinOpen , joinClose, header} = props;

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
           <LoginInput>
              <Input placeholder='이메일을 입력해주세요' maxlength="12" type="email" onChange="" value="" />
           </LoginInput>
            <PwInput>
              <Input placeholder='비밀번호를 입력해주세요' />
            </PwInput>
            <PwInput2>
              <Input placeholder='비밀번호를 한번더 입력해주세요' />
            </PwInput2> 
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

//트위터 로고


const HeadIcon =styled.div`
  margin-left: 200px;
`

const LoginInput = styled.div`
   height:50px;
   position: relative;
   bottom: 0px;
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