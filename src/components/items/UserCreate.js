import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import '../../css/admin.css';

import { saveUserList } from '../../apis/UserListAPI';
import { getAuthorityList } from '../../apis/AuthorityListAPI';

function UserCreate() {

    const authorityList = useSelector(state => state.authorityReducer);

    const [userInfo, setUserInfo] = useState({
        name: '',
        no: 0,
        email: '',
        authority: ''
    });


    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(getAuthorityList());
            setUserInfo({
                name: '',
                no: 0,
                email: '',
                authority: authorityList[0].name
            });
        },
        []
    );

    const onSaveAuthority = () => {
        dispatch(saveUserList(userInfo));
    }

    return (
        <div className="container-fluid">

            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">사원 등록</h1>
            </div>

            <div className="admin">

                <form>

                    <label for="">이름 : </label>
                    <input
                        type="text"
                        value={userInfo.name}
                        onChange={e => setUserInfo({ ...userInfo, name: e.target.value })}
                    />
                    <br />

                    <label for="">사번 : </label>
                    <input
                        type="text"
                        value={userInfo.no}
                        onChange={e => setUserInfo({ ...userInfo, no: e.target.value })}
                    />
                    <br />

                    <label for="">이메일 : </label>
                    <input
                        type="text"
                        value={userInfo.email}
                        onChange={e => setUserInfo({ ...userInfo, email: e.target.value })}
                    />
                    <br />
                    <label for="">권한 : </label>
                    <select name="authority" value={userInfo.authority} onChange={e => setUserInfo({ ...userInfo, authority: e.target.value })}>
                        {authorityList.map(authority => (
                            <option key={authority.no} value={authority.name}>{authority.name}</option>
                        ))}
                    </select>

                </form>


                <div className='button'>
                    <NavLink to="..">
                        <button type="button" className='btn btn-primary' onClick={onSaveAuthority}>등록</button>
                    </NavLink>
                    <NavLink to="..">
                        <button type="button" className='btn btn-warning' >취소</button>
                    </NavLink>
                </div>
            </div>
        </div >
    );
}

export default UserCreate;