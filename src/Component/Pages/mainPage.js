import Layout from "../Templates/layout.js"; 
import styled from "styled-components";
import MainLeft from "../../UI/Organisems/mainLeft"
import MainRight from "../../UI/Organisems/mainRight.js";



function Main (){
    return(
       <Layout>
            <MainLeft/>
            <MainRight/>
      
       </Layout>
    )
}
export default Main;




