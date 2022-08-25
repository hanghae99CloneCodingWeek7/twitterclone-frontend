import React from "react"
import styled from "styled-components";


const MainLogo = (props) => {
    return(
        <Logo url={(props)=>props.url}
        />
    )
} 

 // 나중에 수정

export default MainLogo;

const Logo = styled.img`
background: url(${(props) => props.background}) ;
background-size:cover;
height:100%;
width:500px; //창사이즈가 늘어나도 위치 고정하려면 % 가아닌 px 을 지정해야됩니다.
position: absolute; 
left:15px ;
`