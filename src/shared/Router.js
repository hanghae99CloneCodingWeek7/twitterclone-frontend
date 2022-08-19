import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../Component/Pages/homePage";
import Main from "../Component/Pages/mainPage";
import React from "react";

function Router(){
    return(
        <BrowserRouter>
            <Routes>
           
            <Route path="/" element={<Home></Home>} ></Route>
            <Route path="/1" element={<Main></Main>} ></Route>
           
            
            </Routes>
        </BrowserRouter>
    );
}

export default Router;