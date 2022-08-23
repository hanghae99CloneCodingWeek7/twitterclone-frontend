import React from "react";
import Header from "../Templates/header";
import Layout from "../Templates/layout";
import Footer from "../../UI/Organisems/footer";
import CommentFront from "../../UI/Organisems/commentFront";

const CommentPage = () => {
  return (
    <Layout>
      <Header />
      <CommentFront />
      <Footer />
    </Layout>
  );
};
export default CommentPage;
