import styled from "styled-components";
import MainTitle from "../Molcules/mainTitle"
import MainBtnArea from "../Molcules/mainBtnArea"


// 메인페이지 오른쪽 메뉴 박스
function MainRight (){
    return(
        <Wrap>
                
            <MainTitle/>
            <MainBtnArea></MainBtnArea>
       
        </Wrap>
    )
}

export default MainRight; 

const Wrap =styled.div`
   width:50%;
   height:92.7%;
   border:1px solid black;
    display:inline-block ;
    position:absolute ;
    padding:0 ;
    
`