import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import '../css/UserList.css';

import { setUserList, changeUserList } from '../apis/UserListAPI';
import { setAuthorityList } from '../apis/AuthorityListAPI';

function AdminUserList() {

    const authorityList = useSelector(state => state.authorityReducer);
    const userList = useSelector(state => state.userReducer);

    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(setUserList());
            if (userList == null) {
            }
            dispatch(setAuthorityList());
        },
        []
    );

    const onChangeAuthority = (user, value) => {

        user = {
            ...user,
            authority: value
        };

        dispatch(changeUserList(user));
    }

    return (
        <div className="container-fluid">

            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">사원 관리</h1>
            </div>

            <div className="admin-user">
                <form className="shadow-sm d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                    <div className="input-group">
                        <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                            aria-label="Search" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                                <i className="fas fa-search fa-sm"></i>
                            </button>
                        </div>
                    </div>
                </form>

                <div className='button'>
                    <NavLink to="./create">
                        <button type="button" className='btn btn-primary' >등록</button>
                    </NavLink>
                    <button type="button" className='btn btn-success' >저장</button>
                    <button type="button" className='btn btn-warning' >취소</button>
                    <button type="button" className='btn btn-danger' >삭제</button>
                </div>

                <table className="user-table" width="90%">
                    <tr>
                        <th>이름</th>
                        <th>사번</th>
                        <th>이메일</th>
                        <th>권한</th>
                    </tr>
                    {userList.map(user =>
                        <tr key={user.no}>
                            <td>{user.name}</td>
                            <td>{user.no}</td>
                            <td>{user.email}</td>
                            <td>
                                <select name="authority" value={user.authority} onChange={(e) => onChangeAuthority(user, e.target.value)}>
                                    {authorityList.map(authority => (
                                        <option key={authority.no} value={authority.name}>{authority.name}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                    )}
                </table>
            </div>
        </div>
    );
}

export default AdminUserList;