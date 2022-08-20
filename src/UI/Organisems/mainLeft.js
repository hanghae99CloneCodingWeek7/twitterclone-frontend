import styled from "styled-components";
import MainLogo from "../Atoms/Logo"
import React from "react";

function MainLeft (){
    return(
    <LeftBox>
        <IMG src="img/lohp_1302x955.png"/>
        <Logo src ={'img/twitericons.svg'}></Logo>
      </LeftBox>
    )
}   

export default MainLeft;

//왼쪽박스
const LeftBox = styled.div`
 height:93%;
 width:55%;
 float:left ;
 `

//왼쪽이미지
 const IMG = styled.img`
 background-size:cover;
 height:100%;
 width:100%;
 position:relative ;
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