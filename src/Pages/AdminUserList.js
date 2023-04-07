import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import '../css/admin.css';

import { getUserList, setUserList, changeUserList, deleteUserList } from '../apis/UserListAPI';
import { setAuthorityList, getAuthorityList } from '../apis/AuthorityListAPI';
import Search from '../components/commons/Search';
import Title from '../components/commons/Title';

function AdminUserList() {

    const [deleteUser, setDeleteUser] = useState([]);
    const [page, setPage] = useState(1);

    const userList = useSelector(state => state.userReducer);
    const authorityList = useSelector(state => state.authorityReducer);

    const dispatch = useDispatch();

    useEffect(
        () => {
            if (userList.length == 0) {
                dispatch(setUserList());
            } else {
                dispatch(getUserList());
            }

            if (authorityList.length === 0) {
                dispatch(setAuthorityList());
            } else {
                dispatch(getAuthorityList());
            }
        },
        []
    );

    const nextPage = () => {
        if (userList.length / 10 >= page) {
            setPage(page + 1);
        }
    }
    const prevPage = () => {
        if (page - 1 > 0) {
            setPage(page - 1);
        }
    }

    const onChangeAuthority = (user, value) => {

        user = {
            ...user,
            authority: value
        };

        dispatch(changeUserList(user));
    }

    const onSaveUser = () => {
        dispatch(getUserList());
    };
    const onUndoUser = () => {
        dispatch(setUserList());
    };

    const onDeleteUserChecked = (userNo, isChecked) => {
        if (isChecked) {
            setDeleteUser([...deleteUser, userNo]);
        } else {
            setDeleteUser(deleteUser.filter(user => user !== userNo));
        }
    };

    const onClickDeleteBtn = () => {

        dispatch(deleteUserList(deleteUser));
    }


    return (
        <div className="container-fluid">


            <Title title={'사원 관리'} />

            <div className="admin">
                <Search category="user" />

                <div className='button'>
                    <NavLink to="./create">
                        <button type="button" className='btn btn-primary' >등록</button>
                    </NavLink>
                    <button type="button" className='btn btn-primary' onClick={onSaveUser}>저장</button>
                    <button type="button" className='btn btn-primary' onClick={onUndoUser} >취소</button>
                    <button type="button" className='btn btn-primary' onClick={onClickDeleteBtn}>삭제</button>
                </div>

                <table className="admin-table" width="90%">
                    <thead>
                        <tr>
                            <th></th>
                            <th>이름</th>
                            <th>사번</th>
                            <th>이메일</th>
                            <th>권한</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userList.map(user =>
                            (userList.indexOf(user) >= 10 * (page - 1) && userList.indexOf(user) < 10 * page) &&
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

export default AdminUserList;