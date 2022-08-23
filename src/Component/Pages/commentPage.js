import React from "react";
import Layout from "../Template/layout";
import CommentFront from "../../UI/Organisems/commentFront";
import Header from "../Templates/header";

const CommentPage = () => {
  return (
    <Layout>
      <Header /> //!호진관리
      <CommentFront />
    </Layout>
  );
};
export default CommentPage;
