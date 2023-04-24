import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../css/admin.css';

import { getAuthority, deleteAuthorityList, getAuthType, getOneAuthority, addNewAuthType, deleteAuthType } from '../apis/AuthorityListAPI';
import Title from '../components/commons/Title';
import { useNavigate } from 'react-router-dom';


function AdminAuthorityList() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [deleteAuthority, setDeleteAuthority] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const authType = useSelector(state => state.typeReducer);
    const authorityReducer = useSelector(state => state.authorityReducer);

    const authority = authorityReducer.data;
    const pageInfo = authorityReducer.pageInfo;

    const pageAmount = [];
    if (pageInfo) {
        for (let i = pageInfo.startPage; i <= pageInfo.endPage; i++) {
            pageAmount.push(i);
        }
    }

    useEffect(
        () => {
            dispatch(getAuthType());
        },
        []
    )

    useEffect(
        () => {
            dispatch(getAuthority(currentPage));
        },
        [currentPage]
    )

    const nextPage = () => {
        if (currentPage + 1 <= pageInfo.maxPage) {
            setCurrentPage(currentPage + 1);
        }
    }

    const prevPage = () => {
        if (currentPage - 1 >= 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const goDetailPage = (authNo) => {
        dispatch(getOneAuthority(authNo));
        navigate("./" + authNo);
    }


    const onDeleteAuthorityChecked = (authNo, isChecked) => {

        if (isChecked) {
            setDeleteAuthority([...deleteAuthority, authNo]);
        } else {
            setDeleteAuthority(deleteAuthority.filter(auth => auth !== authNo));
        }

    };

    const onClickDeleteBtn = () => {

        deleteAuthority.forEach(authNo => {
            deleteAuthorityList(authNo);
        })

        window.location.reload();

        setDeleteAuthority([]);
    }

    return (
        authority === undefined ?
            <h1>Loading...</h1> :
            <div className="container-fluid height-1000">

                <Title title={'권한 관리'} />

                <div className="admin">
                    <div className='buttonList'>
                        <div className='button'>
                            <button type="button" className='btn btn-primary' onClick={() => navigate('./create')}>새 권한 등록</button>
                            <button type="button" className='btn btn-danger' onClick={onClickDeleteBtn}>권한 삭제</button>
                        </div>
                    </div>

                    <table className="admin-table" width="90%">
                        <thead>
                            <tr >
                                <th></th>
                                <th>권한 명</th>
                                <th>권한 타입</th>
                                <th colSpan={authType.length}>상태</th>
                            </tr>
                        </thead>
                        <tbody>
                            {authority.map((auth) => (
                                <>
                                    <tr key={auth.roleNo}>
                                        <td rowSpan={authType.length + 1}>
                                            {auth.roleNo > 2 && <input
                                                type="checkbox"
                                                name="delete"
                                                id={auth.roleNo}
                                                value={auth.roleNo}
                                                onClick={e => onDeleteAuthorityChecked(e.target.value, e.target.checked)}
                                            />}
                                        </td>
                                        <td rowSpan={authType.length + 1} onClick={() => goDetailPage(auth.roleNo)}>{auth.roleName}</td>
                                    </tr>
                                    {authType.map(type => (
                                        <tr key={authority.length + 1 + type.typeNo}>
                                            <td className='auth-type'>
                                                {type.typeName}
                                            </td>
                                            {auth.type.map(state =>
                                                state.typeName === type.typeName &&
                                                <>
                                                    {state.state.indexOf('C') >= 0 ? <td key={authority.length + 1 + authType.length + 1 + state.state.indexOf('C')} >{state.state[state.state.indexOf('C')]}</td> : <td></td>}
                                                    {state.state.indexOf('R') >= 0 ? <td key={authority.length + 1 + authType.length + 1 + state.state.indexOf('R')} >{state.state[state.state.indexOf('R')]}</td> : <td></td>}
                                                    {state.state.indexOf('U') >= 0 ? <td key={authority.length + 1 + authType.length + 1 + state.state.indexOf('U')} >{state.state[state.state.indexOf('U')]}</td> : <td></td>}
                                                    {state.state.indexOf('D') >= 0 ? <td key={authority.length + 1 + authType.length + 1 + state.state.indexOf('D')} >{state.state[state.state.indexOf('D')]}</td> : <td></td>}
                                                </>
                                            )}
                                        </tr>
                                    ))}
                                    <br />
                                </>
                            ))}

                        </tbody>
                    </table>
                    <div className='button'>
                        <button className='btn btn-primary' onClick={prevPage}>이전</button>
                        {pageAmount.map(page => (
                            <button
                                key={page} onClick={() => setCurrentPage(page)}
                                style={currentPage === page ? {
                                    color: '#fff',
                                    backgroundColor: '#f4b619',
                                    borderColor: '#f4b30d'
                                }
                                    : null}
                                className='paging'
                            >
                                {page}
                            </button>
                        ))}
                        <button className='btn btn-primary' onClick={nextPage}>다음</button>
                    </div>
                </div>
            </div >
    );
}

export default AdminAuthorityList;
