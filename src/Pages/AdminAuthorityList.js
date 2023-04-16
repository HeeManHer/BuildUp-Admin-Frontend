import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../css/admin.css';

import { getAuthority, createAuthorityList, saveAuthorityList, deleteAuthorityList, getAuthRole, getAuthType } from '../apis/AuthorityListAPI';
import Title from '../components/commons/Title';
import { useNavigate } from 'react-router-dom';


function AdminAuthorityList() {

    const [deleteAuthority, setDeleteAuthority] = useState([]);

    const [page, setPage] = useState(1);

    const authority = useSelector(state => state.authorityReducer);
    const authRole = useSelector(state => state.roleReducer);
    const authType = useSelector(state => state.typeReducer);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(getAuthority());
            dispatch(getAuthRole());
            dispatch(getAuthType());
        },
        []
    )


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

    const nextPage = () => {
        if (authority.length / 5 >= page) {
            setPage(page + 1);
        }


    }
    const prevPage = () => {
        if (page - 1 > 0) {
            setPage(page - 1);
        }
    }

    return (
        <div className="container-fluid">

            <Title title={'권한 관리'} />

            <div className="admin">
                <div className='button'>
                    <button type="button" className='btn btn-primary' onClick={() => navigate('./create')}>등록</button>
                    <button type="button" className='btn btn-primary' onClick={onClickDeleteBtn}>삭제</button>
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
                        {authority.map(auth => (
                            <>
                                <tr key={auth.roleNo}>
                                    <td rowSpan={authType.length + 1}>
                                        <input
                                            type="checkbox"
                                            name="delete"
                                            id={auth.roleNo}
                                            value={auth.roleNo}
                                            onClick={e => onDeleteAuthorityChecked(e.target.value, e.target.checked)}
                                        />
                                    </td>
                                    <td rowSpan={authType.length + 1} onClick={() => navigate("./" + auth.roleNo)}>{auth.roleName}</td>
                                </tr>
                                {authType.map(type => (
                                    <tr key={authRole.length + 1 + type.typeNo}>
                                        <td>{type.typeName}</td>
                                        {auth.type.map((state, index) => {
                                            if (state.typeName === type.typeName) {
                                                return state.state.map(item => <td key={authRole.length + 1 + authType.length + 1 + index} >{item}</td>)
                                            }
                                        })}
                                    </tr>
                                ))}
                            </>
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
