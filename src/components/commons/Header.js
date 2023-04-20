import { decodeJwt } from '../../utils/tokenUtils';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import img from '../../img/undraw_profile.svg';
import { callLogoutAPI } from '../../apis/AdminLoginAPI';

function Header() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const token = decodeJwt(window.localStorage.getItem("accessToken"));

    const onClickLogoutHandler = () => {
        window.localStorage.removeItem('accessToken');
        //로그아웃
        dispatch(callLogoutAPI());

        alert('로그아웃이 되어 메인화면으로 이동합니다.');
        navigate("/", { replace: true })
        window.location.reload();
    }

    return (
        // <!-- Topbar -->
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            {/* 상단 바 - 헤더 */}
            <ul className="navbar-nav ml-auto">
                {/* 유저 정보 */}
                <li className="nav-item dropdown no-arrow">
                    <a className="nav-link dropdown-toggle" >
                        <span className="mr-2 d-none d-lg-inline text-gray-600">{token === null ? '로그인' : token.sub}</span>
                        <img className="img-profile rounded-circle" src={img}></img>
                    </a>
                    {/* <!-- Dropdown - User Information --> */}
                </li>

                {token !== null ?
                    <>
                        <div className="topbar-divider d-none d-sm-block"></div>

                        <li className="nav-item dropdown no-arrow">
                            <a className="nav-link" role='button' onClick={onClickLogoutHandler}>
                                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                <span className="mr-2 d-none d-lg-inline text-gray-600">로그아웃</span>
                            </a>
                        </li>
                    </>
                    :
                    <></>
                }
            </ul>
        </nav>
        // <!-- End of Topbar-- > 
    );
}

export default Header;