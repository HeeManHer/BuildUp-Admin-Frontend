import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../css/admin.css';

import { searchProject, setProjectList } from '../apis/ProjectListAPI';
import Title from '../components/commons/Title';


function AdminProjectList() {

    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState('');

    const projectReducer = useSelector(state => state.projectReducer);
    const projectList = projectReducer.data;
    const pageInfo = projectReducer.pageInfo

    const pageAmount = [];
    if (pageInfo) {
        for (let i = pageInfo.startPage; i <= pageInfo.endPage; i++) {
            pageAmount.push(i);
        }
    }

    useEffect(
        () => {
            dispatch(setProjectList(currentPage, searchValue));
        },
        [currentPage]
    );

    const nextPage = () => {
        if (currentPage + 1 <= pageInfo.maxPage) {
            setCurrentPage(currentPage + 1);
        }
    }

    const prevPage = () => {
        if (currentPage - 1 >= 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const onSearchProject = () => {
        dispatch(searchProject(searchValue));
    }

    return (
        <div className="container-fluid">

            <Title title={'프로젝트 관리'} />

            <div className="admin">

                <form className="shadow-sm d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                    <div className="input-group">
                        <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                            value={searchValue} onChange={e => setSearchValue(e.target.value)} />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button" onClick={onSearchProject} onKeyDown={onSearchProject}>
                                <i className="fas fa-search fa-sm"></i>
                            </button>
                        </div>
                    </div>
                </form>

                <table className="admin-table" width="90%">
                    <thead>
                        <tr>
                            <th>순번</th>
                            <th>프로젝트 명</th>
                            <th>담당자</th>
                            <th>프로젝트 시작일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            projectList.map(project =>
                                (projectList.indexOf(project) >= 10 * (currentPage - 1) && projectList.indexOf(project) < 10 * currentPage) && (
                                    <tr key={project.no}>
                                        <td>{project.no}</td>
                                        <td>{project.title}</td>
                                        <td>{project.manager || '미정'}</td>
                                        <td>{project.startDate}</td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
                <div className='button'>
                    <button className='btn btn-primary' onClick={prevPage}>이전</button>
                    {pageAmount.map(page => (
                        <button
                            key={page} onClick={() => setCurrentPage(page)}
                            style={currentPage === page ? {
                                color: '#fff',
                                backgroundColor: '#f4b619',
                                borderColor: '#f4b30d'
                            }
                                : null}
                            className='paging'
                        >
                            {page}
                        </button>
                    ))}
                    <button className='btn btn-primary' onClick={nextPage}>다음</button>
                </div>
            </div>
        </div>
    );
}

export default AdminProjectList;

