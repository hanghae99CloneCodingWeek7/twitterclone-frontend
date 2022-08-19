import styled from "styled-components";
import Button from "../Atoms/Button";
function MainTitle (){
   return(
        <Title>
            
               {/* <Logo src ="img/twitter_logo_small.svg"></Logo> */}
         <Top>
            <span>지금 일어나고 있는 일</span>
         </Top>

         <Middle>
            <span>오늘 트위터에 가입하세요</span>
         </Middle>
         
         <Button
            width={'274px'} 
            height={'38px'}
            margin = {'20px '}
            text= {'Google 계정으로 가입하기'}
            backgroundColor = {'#fff'}
            fontColor ={'black'}
            borderColor={'#eee'}
            / >
                    <Button
            width={'274px'} 
            height={'38px'}
            text= {'Apple 에서 가입하기'}
            margin = {' 20px  '}
            backgroundColor = {'#fff'}
            fontColor ={'black'}
            borderColor={'white'}
            / >

            <p style={{marginLeft:"120px"}}>또는</p>
            
            <Button
            width={'274px'} 
            height={'38px'}
            text= {'휴대폰 번호나 이메일 주소로 가입하기'}
            margin = {'  15px '}
            backgroundColor = {'#0095ED'}
            fontColor ={'white'}
            borderColor ={'#000'}
            / >
               <Agree>가입하시려면 쿠키 사용을 포함해 이용약관과 개인정보 처리방침에 동의해야 합니다.</Agree>

               <IsJoin>이미 트위터에 가입하셨나요?</IsJoin>
               <Button
            width={'274px'} 
            height={'38px'}
            text= {'로그인'}
            margin = {'  14px '}
            backgroundColor = {'#fff'}
            fontColor ={'#0095ED'}
            
            / >
        </Title>
   )
}
export default MainTitle;

const Title = styled.div`
        text-align: left;
        margin: 150px 20px ;
 `
 const Logo = styled.img`
 background-size:cover;
 height:100%;
 width:20px; //창사이즈가 늘어나도 위치 고정하려면 % 가아닌 px 을 지정해야됩니다.
 `

 const Top = styled.div`
  font-size: 3.2rem;
  font-weight:bold;`

  const Middle = styled.div`
    margin:30px 0;
    font-weight:bold ;
    font-size: 2rem ;
  `
  const Agree = styled.p`
  width:240px ;
  height:10px ;
  margin-left:10px ;
  font-size:3px`

  const IsJoin = styled.p`
  margin-top: 40px`;