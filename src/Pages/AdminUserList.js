import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import '../css/admin.css';

import { getUserList, deleteUserList, searchUserList } from '../apis/UserListAPI';
import Title from '../components/commons/Title';

function AdminUserList() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [deleteUser, setDeleteUser] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const userReducer = useSelector(state => state.userReducer);

    const userList = userReducer.data;
    const pageInfo = userReducer.pageInfo;

    const pageAmount = [];
    if (pageInfo) {
        for (let i = pageInfo.startPage; i <= pageInfo.endPage; i++) {
            pageAmount.push(i);
        }
    }

    useEffect(
        () => {
            dispatch(getUserList(currentPage, searchValue));
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

    const onDeleteUserChecked = (userNo, isChecked) => {
        if (isChecked) {
            setDeleteUser([...deleteUser, userNo]);
        } else {
            setDeleteUser(deleteUser.filter(user => user !== userNo));
        }
    };

    const onClickDeleteBtn = () => {
        deleteUserList(deleteUser);
    }

    const onSearchUsers = () => {
        dispatch(searchUserList(searchValue));
    }


    return (
        <div className="container-fluid">
            <Title title={'사원 관리'} />

            <div className="admin">
                <form className="shadow-sm d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                    <div className="input-group">
                        <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                            value={searchValue} onChange={e => setSearchValue(e.target.value)} />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button" onClick={onSearchUsers} onKeyDown={onSearchUsers}>
                                <i className="fas fa-search fa-sm"></i>
                            </button>
                        </div>
                    </div>
                </form>

                <div className='button'>
                    <button type="button" className='btn btn-primary' onClick={() => navigate("./create")} >등록</button>
                    <button type="button" className='btn btn-primary' onClick={onClickDeleteBtn}>삭제</button>
                </div>

                <table className="admin-table" width="90%">
                    <thead>
                        <tr>
                            <th>선택</th>
                            <th>이름</th>
                            <th>사번</th>
                            <th>이메일</th>
                            <th>프로젝트 생성 권한</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userList.map(user =>
                            <tr key={user.no}>
                                <td>
                                    <input
                                        type="checkbox"
                                        name="delete"
                                        id={user.no}
                                        value={user.no}
                                        onClick={e => onDeleteUserChecked(e.target.value, e.target.checked)}
                                    />
                                </td>
                                <td onClick={() => navigate("./" + user.no)}>{user.name}</td>
                                <td onClick={() => navigate("./" + user.no)}>{user.no}</td>
                                <td onClick={() => navigate("./" + user.no)}>{user.email}</td>
                                <td onClick={() => navigate("./" + user.no)}>
                                    <input type="checkbox" defaultChecked={user.authority == null ? false : true} />
                                </td>
                            </tr>
                        )}
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
        </div >
    );
}

export default AdminUserList;