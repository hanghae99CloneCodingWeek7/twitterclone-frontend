import React from 'react';
import styled from "styled-components";
import MainTitle from "../Molcules/mainTitle"


// 메인페이지 오른쪽 메뉴 박스
function MainRight (){
    return(
        <Wrap>    
            <MainTitle/>
        </Wrap>
    )
}

export default MainRight; 

const Wrap =styled.div`
   width:50%;
   height:92.7%;
    display:inline-block ;
    position:absolute ;
    
    
`