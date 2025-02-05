import {BrowserRouter, Route, Routes} from "react-router-dom";
import Workers from "./pages/Workers";
import Home from "./pages/Home";
import History from "./pages/History";
import NotFound from "./pages/NotFound";
import Notification from "./pages/Notification";
import Organization from "./pages/Organization";
import Profile from "./pages/Profile";
import SideBar from "./components/SideBar";

/**
 * @constructor
 * @author Jean Paul <jeanpaulwebb@gmail.com>
 * @date 05/07/2024
 * AppRoutes
 */
function AppRoutes() {
    return (
        <BrowserRouter>
            <SideBar/>
            <Routes>
                <Route
                    path="/"
                    element={<Workers/>}
                />
                <Route
                    path="/home"
                    element={<Home/>}
                />
                <Route
                    path="/history"
                    element={<History/>}
                />
                <Route
                    path="/notification"
                    element={<Notification/>}
                />
                <Route
                    path="/organization"
                    element={<Organization/>}
                />
                <Route
                    path="/profile"
                    element={<Profile/>}
                />
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;