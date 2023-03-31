import { NavLink } from 'react-router-dom';

function SideBar() {

    return (
        // Sidebar
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* Sidebar - Brand */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink" />
                </div>
                <div className="sidebar-brand-text mx-3">Build Up</div>
            </a>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider" />


            {/* 대시보드*/}
            <li className="nav-item">
                <NavLink to="/">
                    <a className="nav-link">
                        <i className="fas fa-fw fa-cog"></i>
                        <span>대시보드</span>
                    </a>
                </NavLink>
            </li>

            {/* 프로젝트 관리*/}
            <li className="nav-item">
                <NavLink to="/projectlist">
                    <a className="nav-link">
                        <i className="fas fa-fw fa-wrench"></i>
                        <span>프로젝트 관리</span>
                    </a>
                </NavLink>
            </li>

            {/* 사원 관리 */}
            <li className="nav-item">
                <NavLink to="/userlist">
                    <a className="nav-link">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>사원 관리</span>
                    </a>
                </NavLink>
            </li>

            {/* 권한 관리 */}
            <li className="nav-item">

                <NavLink to="/authority">
                    <a className="nav-link">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>권한 관리</span>
                    </a>
                </NavLink>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider d-none d-md-block" />
        </ul>
        //    End of Sidebar
    );

}

export default SideBar;