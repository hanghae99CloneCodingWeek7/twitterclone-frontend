import Layout from "../Template/layout.js";
import React from "react";
import Footer from "../../UI/Organisems/footer";
import MainLeft from "../../UI/Organisems/mainLeft";
import MainRight from "../../UI/Organisems/mainRight.js";

function Main() {
  return (
    <Layout>
      <MainLeft />
      <MainRight />
      <Footer />
    </Layout>
  );
}

export default Main;
