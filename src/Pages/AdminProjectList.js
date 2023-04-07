import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../css/admin.css';

import { setProjectList } from '../apis/ProjectListAPI';
import Search from '../components/commons/Search';
import Title from '../components/commons/Title';


function AdminProjectList() {

    const [page, setPage] = useState(1);

    const projectList = useSelector(state => state.projectReducer);
    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(setProjectList());
        },
        []
    );

    const nextPage = () => {
        if (projectList.length / 10 >= page) {
            setPage(page + 1);
        }
    }
    const prevPage = () => {
        if (page - 1 > 0) {
            setPage(page - 1);
        }
    }

    return (
        <div className="container-fluid">

            <Title title={'프로젝트 관리'} />

            <div className="admin">

                <Search category="project" />

                <table className="admin-table" width="90%">
                    <thead>
                        <tr>
                            <th>순번</th>
                            <th>팀명</th>
                            <th>프로젝트 명</th>
                            <th>담당자</th>
                            <th>프로젝트 시작일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            projectList.map(project =>
                                (projectList.indexOf(project) >= 10 * (page - 1) && projectList.indexOf(project) < 10 * page) && (
                                    <tr key={project.no}>
                                        <td>{project.no}</td>
                                        <td>{project.teamName}</td>
                                        <td>{project.projectName}</td>
                                        <td>{project.manager}</td>
                                        <td>{project.startDate}</td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
                <div className='button'>
                    <button className='btn btn-primary' onClick={prevPage}>이전</button>
                    <button className='btn btn-primary' onClick={nextPage}>다음</button>
                </div>
            </div>
        </div>
    );
}

export default AdminProjectList;

