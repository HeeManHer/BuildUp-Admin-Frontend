import Title from '../components/commons/Title';
import DashboardCard from '../components/items/DashboardCard';
import DashboardProject from '../components/items/DashboardProject';
import DashboardChart from '../components/items/DashboardChart';
import { useNavigate } from 'react-router-dom';
import { decodeJwt } from '../utils/tokenUtils';

function AdminDashBoard() {
    const navigate = useNavigate();
    const token = decodeJwt(window.localStorage.getItem("accessToken"));

    if (token === null) {
        alert("로그인을 해주세요");
        navigate("/", { replace: true })
    }

    return (
        <div className="container-fluid">
            <Title title={'Dashboard'} />

            <div className="row">
                <DashboardCard />
            </div>
            <div className="row">
                <DashboardProject />
                <DashboardChart />
            </div>
        </div>
    )

}

export default AdminDashBoard;