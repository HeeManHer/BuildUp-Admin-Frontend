import { useNavigate } from 'react-router-dom';
import { decodeJwt } from '../../utils/tokenUtils';

function SideBar() {

    const navigate = useNavigate();

    const token = decodeJwt(window.localStorage.getItem("accessToken"));

    if (token === null) {
        alert("로그인을 해주세요");
        navigate("/", { replace: true })
    }


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

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider" />


            {/* 대시보드*/}
            <li className="nav-item">
                <a className="nav-link" onClick={() => navigate("/manage")}>
                    <i className="fas fa-fw fa-cog"></i>
                    <span>대시보드</span>
                </a>
            </li>

            {/* 프로젝트 관리*/}
            <li className="nav-item">
                <a className="nav-link" onClick={() => navigate("/manage/projectList")}>
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>프로젝트 관리</span>
                </a>
            </li>

            {/* 사원 관리 */}
            <li className="nav-item">
                <a className="nav-link" onClick={() => navigate("/manage/userList")}>
                    <i className="fas fa-fw fa-folder"></i>
                    <span>사원 관리</span>
                </a>
            </li>

            {/* 권한 관리 */}
            <li className="nav-item">
                <a className="nav-link" onClick={() => navigate("/manage/authorityList")}>
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>권한 관리</span>
                </a>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider d-none d-md-block" />
        </ul>
        //    End of Sidebar
    );

}

export default SideBar;