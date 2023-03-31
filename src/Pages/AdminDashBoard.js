import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Chart from 'chart.js/auto';
import { Pie } from 'react-chartjs-2';

import '../css/DashBoard.css';
import projectList from './ProjectList.json';

import { setUserList } from '../apis/UserListAPI';


function AdminDashBoard() {

    const user = useSelector(state => state.userReducer);

    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(setUserList());
        },
        []
    );

    let userAuthority = [];
    const authorityCnt = [];

    user.map(user => userAuthority.push(user.authority));
    const set = new Set(userAuthority);
    userAuthority = [...set];


    for (let i = 0; i < userAuthority.length; i++) {
        let cnt = 0;
        for (let k = 0; k < user.length; k++) {
            if (user[k].authority == userAuthority[i]) {
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
        <div className="container-fluid">

            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            </div>

            <div className="row">

                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-lg font-weight-bold text-primary text-uppercase mb-1">
                                        <table width="100%">
                                            <tr className="text-center">
                                                <th colSpan="2">백로그 현황</th>
                                            </tr>
                                            <tr>
                                                <td>진행중인 백로그</td>
                                                <td>20</td>
                                            </tr>
                                            <tr>
                                                <td>완료된 백로그</td>
                                                <td>20</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-lg font-weight-bold text-success text-uppercase mb-1">
                                        <table width="100%">
                                            <tr className="text-center">
                                                <th colSpan="2">이슈 현황</th>
                                            </tr>
                                            <tr>
                                                <td>진행중인 이슈</td>
                                                <td>20</td>
                                            </tr>
                                            <tr>
                                                <td>완료된 이슈</td>
                                                <td>20</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-info shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-lg font-weight-bold text-info text-uppercase mb-1">
                                        <table width="100%">
                                            <tr className="text-center">
                                                <th colSpan="2">스프린트 현황</th>
                                            </tr>
                                            <tr>
                                                <td>진행중인 스프린트</td>
                                                <td>20</td>
                                            </tr>
                                            <tr>
                                                <td>완료된 스프린트</td>
                                                <td>20</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row">
                <div className="col-xl-8 col-lg-7">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-primary">최근 추가된 프로젝트</h6>
                        </div>
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="copyright font-weight-bold text-uppercase mb-1">
                                        <table width="70%">
                                            <tr>
                                                <th>프로젝트 명</th>
                                                <th>시작일</th>
                                            </tr>
                                            {projectList.map(project => (project.no <= 5) && (
                                                <>
                                                    <br />
                                                    <tr>
                                                        <td>{project.projectName}</td>
                                                        <td>{project.startDate}</td>
                                                    </tr>
                                                </>
                                            )
                                            )}
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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

            </div>
        </div>
    )

}

export default AdminDashBoard;