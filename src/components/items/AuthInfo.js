import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import '../../css/admin.css';

import Title from '../commons/Title';
import { getAuthType, getAuthority, getOneAuthority, updateAuthority } from '../../apis/AuthorityListAPI';
import { UPDATE_AUTHORITY } from '../../modules/authority';

function AuthInfo() {

    const { authNo } = useParams();

    const authority = useSelector(state => state.authorityReducer)
    const authType = useSelector(state => state.typeReducer);

    const [authInfo, setAuthInfo] = useState(authority[0]);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(
        () => {
            dispatch(getOneAuthority(authNo));
            dispatch(getAuthType());
        },
        []
    )

    useEffect(
        () => {
            if (authority[0] !== undefined)
                setAuthInfo(authority[0]);
        },
        [authority]
    )

    const checkState = e => {
        console.log(1);
        setAuthInfo({
            ...authInfo,
            type: authInfo.type.map(type => {
                console.log(2);
                if (type.typeName === e.target.name) {
                    console.log(3);
                    if (e.target.checked) {
                        console.log(4);
                        return {
                            ...type,
                            state: [...type.state, e.target.value]
                        }
                    } else {
                        console.log(5);
                        return {
                            ...type,
                            state: type.state.filter(state => state !== e.target.value)
                        }
                    }
                } else {
                    console.log(6);
                    return type
                }
            })
        });
        console.log(7);
    }

    const modifyAuthority = () => {
        if (authInfo.roleName === null || authInfo.roleName === '') return;
        dispatch(updateAuthority(authInfo));
        navigate("/manage/authorityList");
    }

    const prevPage = () => {
        dispatch({
            type: UPDATE_AUTHORITY, payload:
            {
                data: [{
                    roleNo: '',
                    roleName: '',
                    type: []
                }],
                pageInfo: {}
            }
        }
        );
        navigate("/manage/authorityList");
    }

    console.log(authInfo);

    return (
        authInfo === undefined ?
            <h1>Loading...</h1> :
            <div className="container-fluid">

                <Title title='권한 등록' />

                <div className="admin">
                    <div>
                        <label>역할 이름 : </label>
                        <input
                            type="text"
                            value={authInfo.roleName}
                            onChange={e => setAuthInfo({ ...authInfo, roleName: e.target.value })}
                        />
                    </div>

                    <table className="admin-table" width="40%">
                        <thead>
                            <tr>
                                <th>타입</th>
                                <th colSpan={authType.length}>상태</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                authInfo.type.map((type, index) => (
                                    <tr>
                                        <td>{type.typeName}</td>
                                        <td>
                                            <input
                                                type="checkbox"
                                                name={type.typeName}
                                                value='C'
                                                checked={type.state.filter(state => state === 'C').length > 0}
                                                onChange={checkState}
                                            />
                                            <label >C</label>
                                        </td>
                                        <td>
                                            <input
                                                type="checkbox"
                                                name={type.typeName}
                                                value='R'
                                                checked
                                                readOnly
                                            />
                                            <label>R</label>
                                        </td>
                                        <td>
                                            <input
                                                type="checkbox"
                                                name={type.typeName}
                                                value='U'
                                                checked={type.state.filter(state => state === 'U').length > 0}
                                                onChange={checkState}
                                            />
                                            <label >U</label>
                                        </td>
                                        <td>
                                            <input
                                                type="checkbox"
                                                name={type.typeName}
                                                value='D'
                                                checked={type.state.filter(state => state === 'D').length > 0}
                                                onChange={checkState}
                                            />
                                            <label >D</label>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                    <div className='button'>
                        <button type="button" className='btn btn-primary' onClick={modifyAuthority}>수정</button>
                        <button type="button" className='btn btn-warning' onClick={prevPage}>취소</button>
                    </div>
                </div>
            </div >
    );
}

export default AuthInfo;