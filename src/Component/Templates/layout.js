import styled from "styled-components"

function Layout({children}){
    return(
        <StLayout>{children}</StLayout>
    ) 
}

export default Layout;

const StLayout = styled.div`
    margin:0 ;
    width:100%;
    min-width:1016px ;
    height:716px ;
    /* border : 1px solid black; //사이즈 확인용  */
    position:relative ;
`