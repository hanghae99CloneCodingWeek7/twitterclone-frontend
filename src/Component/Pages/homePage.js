import React from "react";
import Layout from "../Templates/layout";
import Header from "../Templates/header";
import styled from "styled-components";
import HomeLeft from "../../UI/Organisems/homeLeft";

const Home = (props) => {
  return (
    <Layout>
      <Header />
      <HomeLeft />
    </Layout>
  );
};
export default Home;
