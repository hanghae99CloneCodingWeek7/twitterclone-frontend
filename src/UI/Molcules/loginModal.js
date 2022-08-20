import React from 'react';
import '../Molcules/modal.css'
import Button from "../Atoms/Button"
import {FcGoogle} from "react-icons/fc"
import styled from "styled-components";
import Input from "../Atoms/input"
import {FaTwitter} from "react-icons/fa"

const LoginModal = (props) => {
  const {loginOpen , loginClose} =props;

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
            margin = {'-5px '}
            text= {`Google 계정으로 계속하기`}
            backgroundColor = {'#fff'}
            fontColor ={'black'}
            borderColor={'#eee'}
             ></Button>
             <Ic>
                <FcGoogle size="24"></FcGoogle>
             </Ic>

             <Button
            width={'274px'} 
            height={'30px'}
            margin = {'0px '}
            text= {`Apple 계정으로 계속하기(미구현)`}
            backgroundColor = {'#fff'}
            fontColor ={'black'}
            borderColor={'#eee'}
             ></Button>
             </Btn>
          
            
            <p className="or">
              또는
            </p>
            <div className='loginInput'>
              <Input placeholder='아이디를 입력해주세요' />
            </div>
            <div className='pwInput'>
               <Input placeholder='비밀번호를 입력해주세요' />
            </div>
           <LoginBtn>
           <Button
            width={'274px'} 
            height={'30px'}
            margin = {'10px '}
            text= {`로그인`}
            backgroundColor = {'#000'}
            fontColor ={'white'}
            borderColor={'#eee'}
             ></Button>
           </LoginBtn>
          </section>
        ) : null}
      </div>   
    )
}

export default LoginModal;

const Ic = styled.div`
display:inline-block ;
position:relative;
bottom:20px;
right:300px;`

const Btn = styled.div`
margin-left:73px;
margin-top:10px`

const LoginBtn = styled.div`
margin-left:60px ;
`

//트위터 로고
const Logo = styled.img`
background-size:cover;
height:40%;
width:500px; //창사이즈가 늘어나도 위치 고정하려면 % 가아닌 px 을 지정해야됩니다.
position: absolute; 
left:15px;
top:150px
`

const HeadIcon =styled.div`
  margin-left: 200px;
 
`