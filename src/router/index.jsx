import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/index.jsx";
import About from "../pages/about/index.jsx";
import Flat from "../pages/flat/index.jsx";
import { routes } from "./routes.js";

export default function Router() {
    return <BrowserRouter>
        <Routes>
            <Route path={routes.home} exact element={<Home />}/>
            <Route path={routes.about} element={<About />}/>
            <Route path={routes.flat} element={<Flat />}/>

        </Routes>
    </BrowserRouter>
}
