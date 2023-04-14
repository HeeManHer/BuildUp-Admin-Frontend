import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDashDoardProject } from '../../apis/DashboardAPI';

import '../../css/admin.css';

function DashboardProject() {

    const projectList = useSelector(state => state.projectReducer);

    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(getDashDoardProject());
        },
        []
    );

    return (
        < div className="col-xl-8 col-lg-7" >
            <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">최근 추가된 프로젝트</h6>
                </div>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="copyright font-weight-bold text-uppercase mb-1">
                                <table width="70%">
                                    <thead>
                                        <tr>
                                            <th>프로젝트 명</th>
                                            <th>시작일</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {projectList.map(project =>
                                            <tr key={projectList.indexOf(project)}>
                                                <td>{project.name}</td>
                                                <td>{project.startDate}</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default DashboardProject;