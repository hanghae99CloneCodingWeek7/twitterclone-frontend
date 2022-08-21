import React from "react"
import styled from "styled-components";


const Button = (props) => {
    //  const {_onClick,margin,width,padding} =props;

    return (
      <Container
        onClick={props._onClick}
        backgroundColor ={props.backgroundColor}
        outlined = {props.outlined}
        borderColor = {props.borderColor}
        fontColor = {props.fontColor}
        width = {props.width}
        height = {props.height}
        margin = {props.margin}
        disabled = {props.disabled}
        >
          <Text>
            {props.text}
          </Text>
        </Container>
    )
  }

  Button.defaultProps ={
     text : 'Google로 로그인하기',
     borderColor :  '#eee',
     outlined : false,
     backgroundColor : '#fff',
     fontColor : 'white',
     width : '8red',
     textAlign:'center',
     _onClick: () => {},
     disabled : 'disabled'
  }
  
  export default Button;

  const Container = styled.div`
   height: ${(props)=>props.height};
   width: ${(props)=>props.width};
   display:flex;
   justify-content:center;
   align-items: center;
   margin: ${(props)=> props.margin} ;
   color : ${(props)=> props.fontColor};
   outline : ${(props)=>props ? '1px solid black' : false};
   background : ${(props)=>props.backgroundColor};
   font-weight: bold ;
   /* border : ${(props)=>props ['borderColor'].length>0 ? props.borderColor : 'none' }; */
   word-break:break-all;
   box-shadow : 2px 2px 2px #c3c3c366;
   user-select : none;
   border-radius : 75px 75px 75px 75px / 67px 67px 67px 67px; cursor : pointer;
   transition : 0.3s cubic-bezier(0.19, 1, 0.22, 1);
   border-color: ${(props)=> props.borderColor} ;
   
   &:hover{
    filter: brightness(90%) ;
   }
   
   &:active{
    background-color: #FFEE53 ;
    box-shadow : inset 1px 1px 3px 0px #9d98983d;
    filter : brightness(100%);
   }
   `

   const Text = styled.span`
   `;


   

