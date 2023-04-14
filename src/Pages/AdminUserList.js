import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

import '../css/admin.css';

import { getUserList, deleteUserList, updateUserAuthority } from '../apis/UserListAPI';
import Search from '../components/commons/Search';
import Title from '../components/commons/Title';

function AdminUserList() {

    const [deleteUser, setDeleteUser] = useState([]);
    const [changeAuthority, setChangeAuthority] = useState([]);
    const [page, setPage] = useState(1);

    const userList = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(
        () => {
            dispatch(getUserList());
        },
        []
    );

    useEffect(
        () => {
            setChangeAuthority(userList.map(user => user.authority ? 'PM' : '팀원'));
        },
        []
    )
    // console.log(changeAuthority);

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

    const onChangeAuthorityChecked = (userNo, isChecked) => {
        if (isChecked) {
            setChangeAuthority([...changeAuthority, userNo]);
        } else {
            setChangeAuthority(changeAuthority.filter(user => user !== userNo));
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
        window.location.reload();
    }

    // console.log(userList);
    // console.log(changeAuthority);


    return (
        <div className="container-fluid">
            <Title title={'사원 관리'} />

            <div className="admin">
                <Search category="user" />

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
                {/* <div className='button'>
                    <button className='btn btn-primary' onClick={prevPage}>이전</button>
                    <button className='btn btn-primary' onClick={nextPage}>다음</button>
                </div> */}
            </div>
        </div >
    );
}

export default AdminUserList;