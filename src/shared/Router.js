import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Component/Pages/homePage";
import Main from "../Component/Pages/mainPage";
import React from "react";
import GlobalStyles from "./GlobalStyles";


function Router() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/" element={<Main></Main>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
