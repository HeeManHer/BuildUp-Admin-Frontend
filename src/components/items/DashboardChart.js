import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Chart from 'chart.js/auto';
import { Pie } from 'react-chartjs-2';

import { setUserList, getUserList } from '../../apis/UserListAPI';
import { setAuthorityList } from '../../apis/AuthorityListAPI';

function DashboardChart() {

    const authorityList = useSelector(state => state.authorityReducer);
    const userList = useSelector(state => state.userReducer);

    const dispatch = useDispatch();

    useEffect(
        () => {
            if (userList.length === 0) {
                dispatch(setUserList());
            } else {
                dispatch(getUserList());
            }
            dispatch(setAuthorityList());
        },
        []
    );

    const userAuthority = authorityList.map(authority => authority.name);

    const authorityCnt = [];

    for (let i = 0; i < userAuthority.length; i++) {
        let cnt = 0;
        for (let k = 0; k < userList.length; k++) {
            if (userList[k].authority === userAuthority[i]) {
                cnt++;
            }
        }

        authorityCnt.push(cnt);
    }

    const data = {
        labels: userAuthority,
        datasets: [
            {
                type: 'pie',
                label: '사원 현황',
                data: authorityCnt,
                backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc', '#E7DD00'],
                hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf', '#f6c23e'],
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
        legend: {
            display: false
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
                        <Pie type="line" data={data} options={option} />
                    </div>
                </div>
            </div>
        </div>
    );

}

export default DashboardChart;