import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Flat from "../pages/flat";
import Error from "../pages/404";
import { routes } from "./routes.js";

export default function Router() {
    return <BrowserRouter>
        <Routes>
            <Route path={ routes.home } exact element={ <Home /> }/>
            <Route path={ routes.about } element={ <About /> }/>            
            <Route path={ routes.flat()} element={ <Flat /> }/>
            <Route path={ routes.error } element={ <Error /> } />    
        </Routes>
    </BrowserRouter>
}
