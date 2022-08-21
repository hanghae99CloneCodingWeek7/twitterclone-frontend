import React from "react";
import Header from "../Templates/header";
import Layout from "../Templates/layout";
import Footer from "../../UI/Organisems/footer";
import CommentPost from "../../UI/Organisems/commentPost";
const CommentPage = () => {
  return (
    <Layout>
      <Header />
      <CommentPost />
      <Footer />
    </Layout>
  );
};
export default CommentPage;
