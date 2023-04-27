import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Chart from 'chart.js/auto';
import { Bar, Pie } from 'react-chartjs-2';

import { setUserList, getUserList } from '../../apis/UserListAPI';
import { getDashAuth } from '../../apis/DashboardAPI';

function DashboardChart() {

    const dispatch = useDispatch();

    const authRole = useSelector(state => state.roleReducer);

    const userAuthority = authRole.map(authority => authority.name);
    const authorityCnt = authRole.map(authority => authority.count);


    useEffect(
        () => {
            dispatch(getDashAuth());
        },
        []
    );


    const data = {
        labels: userAuthority,
        datasets: [
            {
                type: 'bar',
                label: '사원 현황',
                data: authorityCnt,
                backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc', '#f6c23e', '#e74a3b'],
                hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf', '#f4b619', '#e02d1b'],
                hoverBorderColor: "rgba(234, 236, 244, 1)",
            }
        ],
    };

    const option = {
        maintainAspectRatio: false,
        tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
        },
        plugins: {
            legend: {
                display: false
            }
        },
    };

    return (
        <div className="col-xl-4 col-lg-5">
            <div className="card shadow mb-4">
                <div
                    className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">사원 현황</h6>
                </div>

                <div className="card-body">
                    <div className="chart-pie pt-4 pb-2">
                        <Bar type="line" data={data} options={option} />
                    </div>
                </div>
            </div>
        </div>
    );

}

export default DashboardChart;