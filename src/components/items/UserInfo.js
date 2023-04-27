import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import '../../css/admin.css';

import { getUserInfo, modifyUserInfo } from '../../apis/UserListAPI';
import Title from '../commons/Title';

function UserInfo() {

    const { userNo } = useParams();

    const userReducer = useSelector(state => state.userReducer);
    const userInfo = userReducer.data

    const [user, setUser] = useState({
        name: '',
        no: '',
        email: '',
        authority: ''
    });

    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(
        () => {
            dispatch(getUserInfo(userNo));
        },
        []
    )
    useEffect(
        () => {
            if (userInfo[0] !== undefined)
                setUser(userInfo[0]);
        },
        [userInfo]
    )

    const onSaveAuthority = () => {
        dispatch(modifyUserInfo(user, userNo));
        navigate("../");
    }
    return (
        <div className="container-fluid">

            <Title title="사원 정보" />

            <div className="admin">
                <form >
                    <label>이름 : </label>
                    <input
                        type="text"
                        value={user.name}
                        onChange={e => setUser({ ...user, name: e.target.value })}
                    />
                    <br />

                    <label>사번 : </label>
                    <input
                        type="text"
                        value={user.no}
                        onChange={e => setUser({ ...user, no: e.target.value })}
                    />
                    <br />

                    <label>이메일 : </label>
                    <input
                        type="text"
                        value={user.email}
                        onChange={e => setUser({ ...user, email: e.target.value })}
                    />
                    <br />
                    <label>프로젝트 생성 권한 : </label>
                    <input type="checkbox"
                        checked={user.authority === 'ROLE_PM'}
                        onChange={e => setUser({ ...user, authority: e.target.checked ? 'ROLE_PM' : 'ROLE_USER' })}
                    />
                </form>


                <div className='button'>
                    <button type="button" className='btn btn-primary' onClick={onSaveAuthority}>저장</button>
                    <button type="button" className='btn btn-warning' onClick={() => navigate("../")}>취소</button>
                </div>
            </div>
        </div >
    );
}

export default UserInfo;