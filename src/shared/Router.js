import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Component/Pages/homePage";
import Main from "../Component/Pages/mainPage";
import React from "react";
import GlobalStyles from "./GlobalStyles";
import Comment from "../Component/Pages/commentPage";
import TestPage from "../Component/Pages/testPage";

function Router() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/comment" element={<Comment></Comment>}></Route>
        <Route path="/test" element={<TestPage></TestPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
