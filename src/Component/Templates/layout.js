import styled from "styled-components"

function Layout({children}){
    return(
        <StLayout>{children}</StLayout>
    ) 
}

export default Layout;

const StLayout = styled.div`
    max-width:1001px;
    max-height:820px ;
`