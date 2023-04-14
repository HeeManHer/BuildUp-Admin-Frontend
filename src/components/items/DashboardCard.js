import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDashBacklog, getDashIssue, getDashSprint } from "../../apis/DashboardAPI";

import '../../css/admin.css';

function DashboardCard() {

    const backlogList = useSelector(state => state.backlogReducer);
    const issueList = useSelector(state => state.issueReducer);
    const sprintList = useSelector(state => state.sprintReducer);

    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(getDashBacklog());
            dispatch(getDashIssue());
            dispatch(getDashSprint());
        },
        []
    )

    return (
        <>
            <div className="col-xl-3 col-md-6 mb-4">
                <div className='card shadow h-100 py-2 border-left-primary'>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className='text-lg font-weight-bold text-uppercase mb-1 text-primary'>
                                    <table width="100%">
                                        <thead>
                                            <tr className="text-center">
                                                <th colSpan="2">백로그 현황</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {backlogList.map(backlog =>
                                                <tr key={backlogList.indexOf(backlog)}>
                                                    <td>{backlog.state}</td>
                                                    <td>{backlog.count}</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
                <div className='card shadow h-100 py-2 border-left-success'>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className='text-lg font-weight-bold text-uppercase mb-1 text-success'>
                                    <table width="100%">
                                        <thead>
                                            <tr className="text-center">
                                                <th colSpan="2">이슈 현황</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {issueList.map(issue =>
                                                <tr key={issueList.indexOf(issue)}>
                                                    <td>{issue.state}</td>
                                                    <td>{issue.count}</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
                <div className='card shadow h-100 py-2 border-left-info'>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className='text-lg font-weight-bold text-uppercase mb-1 text-info'>
                                    <table width="100%">
                                        <thead>
                                            <tr className="text-center">
                                                <th colSpan="2">스프린트 현황</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {sprintList.map(sprint =>
                                                <tr key={sprintList.indexOf(sprint)}>
                                                    <td>{sprint.state}</td>
                                                    <td>{sprint.count}</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashboardCard;