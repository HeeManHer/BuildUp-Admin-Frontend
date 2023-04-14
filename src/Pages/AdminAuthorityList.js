import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../css/admin.css';

import { getAuthority, createAuthorityList, saveAuthorityList, deleteAuthorityList, getAuthRole, getAuthType } from '../apis/AuthorityListAPI';
import Title from '../components/commons/Title';


function AdminAuthorityList() {

    const [deleteAuthority, setDeleteAuthority] = useState([]);
    const [roleName, setRoleName] = useState();
    const [state, setState] = useState([]);

    const [page, setPage] = useState(1);
    const [value, setValue] = useState('');
    const [update, setUpdate] = useState(null);

    const authorityList = useSelector(state => state.authorityReducer);
    const authRole = useSelector(state => state.roleReducer);
    const authType = useSelector(state => state.typeReducer);


    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(getAuthority());
            dispatch(getAuthRole());
            dispatch(getAuthType());
        },
        []
    )
    // console.log(authorityList);
    // console.log(authRole);
    // console.log(authType);

    const createAuthority = () => {
        setRoleName("");
    };

    const registAuthority = () => {
        dispatch(createAuthorityList(state));

        // window.location.reload();
    }

    const resetAuthority = () => {
        window.location.reload();
    }

    const updateKeyDown = (event, authority) => {
        if (event.key !== 'Enter') return;

        authority.name = value;

        setUpdate(null);
        setValue('');
        dispatch(saveAuthorityList(authority));
    };

    const handleClick = (index, e) => {
        setValue(e.target.innerHTML);
        setUpdate(index);
    };


    const checkValue = (e, roleName) => {

        if (e.target.checked) {
            setState([...state,
            {
                roleName,
                typeName: e.target.name,
                state: e.target.value
            }
            ]);
        } else {
            setState(state.filter(item => !(item.roleName === roleName && item.state === e.target.value && item.typeName === e.target.name)));
        }
    }

    const onDeleteAuthorityChecked = (authNo, isChecked) => {

        if (isChecked) {
            setDeleteAuthority([...deleteAuthority, authNo]);
        } else {
            setDeleteAuthority(deleteAuthority.filter(auth => auth !== authNo));
        }

    };

    const onClickDeleteBtn = () => {

        deleteAuthorityList(deleteAuthority);

        window.location.reload();

        setDeleteAuthority([]);
    }

    const nextPage = () => {
        // if (authorityList.length / 5 >= page) {
        //     setPage(page + 1);
        // }


    }
    const prevPage = () => {
        // if (page - 1 > 0) {
        //     setPage(page - 1);
        // }
    }

    return (
        <div className="container-fluid">

            <Title title={'권한 관리'} />

            <div className="admin">
                <div className='button'>
                    <button type="button" className='btn btn-primary' onClick={createAuthority}>추가</button>
                    <button type="button" className='btn btn-primary'>저장</button>
                    <button type="button" className='btn btn-primary' onClick={resetAuthority}>취소</button>
                    <button type="button" className='btn btn-primary' onClick={onClickDeleteBtn}>삭제</button>
                </div>

                <table className="admin-table" width="90%">
                    <thead>
                        <tr >
                            <th></th>
                            <th>권한</th>
                            {authType.map((item, index) =>
                                <th key={index}>{item.typeName}</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {authRole.map((role, index) =>
                            <tr>
                                <td>
                                    <input
                                        type="checkbox"
                                        name="delete"
                                        id={role.roleNo}
                                        value={role.roleNo}
                                        onClick={e => onDeleteAuthorityChecked(e.target.value, e.target.checked)}
                                    />
                                </td>
                                <td>{role.roleName}</td>
                                {authorityList.map((item, index) =>
                                    role.roleNo === item.roleNo &&
                                    authType[index % authType.length].typeNo === item.typeNo &&
                                    <td key={index} className='auth'>

                                        <input type="checkbox" name={item.typeName} value="C" defaultChecked={e => item.state === e.target.value} onChange={e => checkValue(e, role.roleName)} />
                                        <label>{item.typeName}</label>
                                        <input type="checkbox" name={item.typeName} value="R" defaultChecked={e => item.state === e.target.value} onChange={e => checkValue(e, role.roleName)} />
                                        <label>{item.state}</label>
                                        <input type="checkbox" name={item.typeName} value="U" defaultChecked={e => item.state === e.target.value} onChange={e => checkValue(e, role.roleName)} />
                                        <label>{item.state}</label>
                                        <input type="checkbox" name={item.typeName} value="D" defaultChecked={e => item.state === e.target.value} onChange={e => checkValue(e, role.roleName)} />
                                        <label>{item.state}</label>
                                    </td>
                                )}
                            </tr>
                        )}
                        {roleName == null ||
                            <tr>
                                <td>
                                    <button type="button" className='btn-sm btn-primary' onClick={registAuthority}>등록</button>
                                </td>
                                <td><input type="text" value={roleName} onChange={e => setRoleName(e.target.value)} /></td>
                                {authType.map((type, index) => (
                                    <td key={index} className='auth'>
                                        <input type="checkbox" name={type.typeName} value="C" onChange={e => checkValue(e, roleName)} />
                                        <label>C</label>
                                        <input type="checkbox" name={type.typeName} value="R" onChange={e => checkValue(e, roleName)} />
                                        <label>R</label>
                                        <input type="checkbox" name={type.typeName} value="U" onChange={e => checkValue(e, roleName)} />
                                        <label>U</label>
                                        <input type="checkbox" name={type.typeName} value="D" onChange={e => checkValue(e, roleName)} />
                                        <label>D</label>
                                    </td>
                                ))}
                            </tr>
                        }
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

export default AdminAuthorityList;
