import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import '../../css/admin.css';

import { registUser } from '../../apis/UserListAPI';
import Title from '../commons/Title';

function UserCreate() {

    const [userInfo, setUserInfo] = useState({
        name: '',
        no: '',
        email: '',
        authority: ''
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const createUser = () => {
        dispatch(registUser(userInfo));
        navigate("/manage/userList");
        window.location.reload();
    }

    const goPrevPage = () => {
        navigate("/manage/userList");
        window.location.reload();
    }

    return (
        <div className="container-fluid">

            <Title title='사원 등록' />

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

                    {/* <label>비밀번호 : </label>
                    <input
                        type="text"
                        value={userInfo.password}
                        onChange={e => setUserInfo({ ...userInfo, password: e.target.value })}
                    />
                    <br /> */}

                    <label>이메일 : </label>
                    <input
                        type="text"
                        value={userInfo.email}
                        onChange={e => setUserInfo({ ...userInfo, email: e.target.value })}
                    />
                    <br />
                    <label>프로젝트 생성 권한 : </label>
                    <input type="checkbox" onChange={e => setUserInfo({ ...userInfo, authority: e.target.checked })} />
                </form>


                <div className='button'>
                    <button type="button" className='btn btn-primary' onClick={createUser}>등록</button>
                    <button type="button" className='btn btn-warning' onClick={goPrevPage}>취소</button>
                </div>

            </div>
        </div >
    );
}

export default UserCreate;