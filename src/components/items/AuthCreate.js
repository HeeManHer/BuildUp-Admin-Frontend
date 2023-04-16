import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import '../../css/admin.css';

import Title from '../commons/Title';
import { getAuthType, registAuthority } from '../../apis/AuthorityListAPI';

function AuthCreate() {

    const [authInfo, setAuthInfo] = useState({
        roleName: '',
        type: [
            {
                typeName: '',
                state: []
            }
        ]
    });

    const authType = useSelector(state => state.typeReducer);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(
        () => {
            dispatch(getAuthType());
        },
        []
    )
    useEffect(
        () => {
            setAuthInfo({
                ...authInfo,
                type: authType.map(type => {
                    return {
                        typeName: type.typeName,
                        state: []
                    }
                })
            });
        },
        [authType]
    )

    const checkState = e => {
        setAuthInfo({
            ...authInfo,
            type: authInfo.type.map(type => {
                if (type.typeName === e.target.name) {
                    if (e.target.checked) {
                        return {
                            ...type,
                            state: [...type.state, e.target.value]
                        }
                    } else {
                        return {
                            ...type,
                            state: type.state.filter(state => state !== e.target.value)
                        }
                    }
                } else {
                    return type
                }
            })
        });
    }
    console.log(authInfo);

    const createAuthority = () => {
        if (authInfo.roleName === null || authInfo.roleName === '') {
            alert('역할 이름을 입력하세요');
            return;
        }
        dispatch(registAuthority(authInfo));
        goPrevPage();
    }

    const goPrevPage = () => {
        navigate("../");
        window.location.reload();
    }

    return (
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
                        {authType.map(type => (
                            <tr>
                                <td>{type.typeName}</td>
                                <td>
                                    <input
                                        type="checkbox"
                                        name={type.typeName}
                                        value='C'
                                        onClick={checkState}
                                    />
                                    <label >C</label>
                                </td>
                                <td>
                                    <input
                                        type="checkbox"
                                        name={type.typeName}
                                        value='R'
                                        onClick={checkState}
                                    />
                                    <label >R</label>
                                </td>
                                <td>
                                    <input
                                        type="checkbox"
                                        name={type.typeName}
                                        value='U'
                                        onClick={checkState}
                                    />
                                    <label >U</label>
                                </td>
                                <td>
                                    <input
                                        type="checkbox"
                                        name={type.typeName}
                                        value='D'
                                        onClick={checkState}
                                    />
                                    <label >D</label>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>

                <div className='button'>
                    <button type="button" className='btn btn-primary' onClick={createAuthority}>등록</button>
                    <button type="button" className='btn btn-warning' onClick={goPrevPage}>취소</button>
                </div>
            </div>
        </div >
    );
}

export default AuthCreate;