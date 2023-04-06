import Title from '../components/commons/Title';
import DashboardCard from '../components/items/DashboardCard';
import DashboardProject from '../components/items/DashboardProject';
import DashboardChart from '../components/items/DashboardChart';

function AdminDashBoard() {

    return (
        <div className="container-fluid">
            <Title title={'Dashboard'} />

            <div className="row">
                <DashboardCard category='백로그' />
                <DashboardCard category='이슈' />
                <DashboardCard category='스프린트' />
            </div>
            <div className="row">
                <DashboardProject />
                <DashboardChart />
            </div>
        </div>
    )

}

export default AdminDashBoard;