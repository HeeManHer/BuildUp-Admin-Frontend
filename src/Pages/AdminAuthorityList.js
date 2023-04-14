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

    // const updateKeyDown = (event, authority) => {
    //     if (event.key !== 'Enter') return;

    //     authority.name = value;

    //     setUpdate(null);
    //     setValue('');
    //     dispatch(saveAuthorityList(authority));
    // };

    // const handleClick = (index, e) => {
    //     setValue(e.target.innerHTML);
    //     setUpdate(index);
    // };


    // const checkValue = (e, roleName) => {

    //     if (e.target.checked) {
    //         setState([...state,
    //         {
    //             roleName,
    //             typeName: e.target.name,
    //             state: e.target.value
    //         }
    //         ]);
    //     } else {
    //         setState(state.filter(item => !(item.roleName === roleName && item.state === e.target.value && item.typeName === e.target.name)));
    //     }
    // }

    const onDeleteAuthorityChecked = (authNo, isChecked) => {

        if (isChecked) {
            setDeleteAuthority([...deleteAuthority, authNo]);
        } else {
            setDeleteAuthority(deleteAuthority.filter(auth => auth !== authNo));
        }

    };

    const onClickDeleteBtn = () => {

        deleteAuthority.forEach(authNo=>{
            deleteAuthorityList(authNo);
        })

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

                <table className="admin-table" width="90%" >
                    <thead>
                        <tr >
                            <th></th>
                            <th>권한</th>
                            <th>타입</th>
                            <th>상태</th>
                        </tr>
                    </thead>
                    <tbody>
                        {authRole.map(role => (
                            <tr key={role.roleNo}>
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
                                <td>
                                    {authType.map(type => (
                                        <tr key={authRole.length + type.typeNo}>
                                            <td>
                                                {type.typeName}
                                            </td>
                                        </tr>
                                    ))}
                                </td>
                                <td>
                                    {authorityList.map((auth, index, arr) => {
                                        if (role.roleName === auth.roleName) {
                                            if (index === 0 || arr[index - 1].typeName !== arr[index].typeName) {
                                                return (
                                                    <>
                                                        <tr key={authRole.length + authType.length + index} />
                                                        <td>{auth.state}</td>
                                                    </>
                                                )
                                            } else {
                                                return (<td key={authRole.length + authType.length + index}>{auth.state}</td>);
                                            }
                                        }
                                    })}
                                </td>
                            </tr>
                        ))}
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

export default AdminAuthorityList;
