import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "../Component/Pages/mainPage";

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main></Main>} ></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;