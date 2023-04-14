import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import '../../css/admin.css';

import { createUserList } from '../../apis/UserListAPI';

function UserCreate() {

    const [userInfo, setUserInfo] = useState({
        name: '허희만',
        no: 20230401,
        email: 'TEAM1@WARMINGUP.COM',
        authority: true
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSaveAuthority = () => {
        dispatch(createUserList(userInfo));
        goPrevPage();
    }

    const goPrevPage = () => {
        navigate("..");
    }

    return (
        <div className="container-fluid">

            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">사원 등록</h1>
            </div>

            <div className="admin">
                <form >
                    <label>이름 : </label>
                    <input
                        type="text"
                        value={userInfo.name}
                        onChange={e => setUserInfo({ ...userInfo, name: e.target.value })}
                    />
                    <br />

                    <label>사번 : </label>
                    <input
                        type="text"
                        value={userInfo.no}
                        onChange={e => setUserInfo({ ...userInfo, no: e.target.value })}
                    />
                    <br />

                    <label>이메일 : </label>
                    <input
                        type="text"
                        value={userInfo.email}
                        onChange={e => setUserInfo({ ...userInfo, email: e.target.value })}
                    />
                    <br />
                    <label>프로젝트 생성 권한 : </label>
                    <input type="checkbox" value={userInfo.authority} onChange={e => setUserInfo({ ...userInfo, authority: e.target.checked })} />
                </form>


                <div className='button'>
                    <button type="button" className='btn btn-primary' onClick={onSaveAuthority}>등록</button>
                    <button type="button" className='btn btn-warning' onClick={goPrevPage}>취소</button>
                </div>
            </div>
        </div >
    );
}

export default UserCreate;