import Header from "../components/commons/Header";
import LoginSideBar from "../components/commons/LoginSideBar";
import { Outlet } from "react-router-dom";
import '../css/sb-admin-2.min.css';
import '../vendor/fontawesome-free/css/all.min.css';



function LoginLayout() {

    return (
        <>
            <div id="wrapper">
                <LoginSideBar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Header />
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginLayout;