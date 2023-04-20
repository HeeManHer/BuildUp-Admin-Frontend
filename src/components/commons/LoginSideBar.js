import { useNavigate } from 'react-router-dom';

function LoginSideBar() {
    const navigate = useNavigate();
    return (
        // Sidebar
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* Sidebar - Brand */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" onClick={() => navigate("/")}>
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink" />
                </div>
                <div className="sidebar-brand-text mx-3">Build Up</div>
            </a>
        </ul>
        //    End of Sidebar
    );

}

export default LoginSideBar;