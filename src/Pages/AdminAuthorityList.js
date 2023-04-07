import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../css/admin.css';

import { getAuthorityList, setAuthorityList, createAuthorityList, saveAuthorityList, deleteAuthorityList } from '../apis/AuthorityListAPI';
import Title from '../components/commons/Title';


function AdminAuthorityList() {

    const [deleteAuthority, setDeleteAuthority] = useState([]);
    const [page, setPage] = useState(1);
    const [value, setValue] = useState('');
    const [update, setUpdate] = useState(null);

    const authorityList = useSelector(state => state.authorityReducer)

    const dispatch = useDispatch();

    useEffect(
        () => {
            if (authorityList.length === 0) {
                dispatch(setAuthorityList());
            } else {
                dispatch(getAuthorityList());
            }
        },
        []
    )

    const createAuthority = () => {
        if (update !== null) return;

        setUpdate(authorityList.length + 1);
        dispatch(createAuthorityList(authorityList.length + 1));
    };

    const resetAuthority = () => {
        dispatch(setAuthorityList());
    }

    const updateKeyDown = (event, authority) => {
        if (event.key !== 'Enter') return;

        authority.name = value;

        setUpdate(null);
        setValue('');
        dispatch(saveAuthorityList(authority));
    };

    const saveAuthority = () => {
        dispatch(saveAuthorityList());
    }

    const handleClick = (index, e) => {
        setValue(e.target.innerHTML);
        setUpdate(index);
    };

    const onDeleteAuthorityChecked = (userNo, isChecked) => {
        if (isChecked) {
            setDeleteAuthority([...deleteAuthority, userNo]);
        } else {
            setDeleteAuthority(deleteAuthority.filter(user => user !== userNo));
        }
    };

    const onClickDeleteBtn = () => {
        dispatch(deleteAuthorityList(deleteAuthority));
    }

    const nextPage = () => {
        if (authorityList.length / 5 >= page) {
            setPage(page + 1);
        }
    }
    const prevPage = () => {
        if (page - 1 > 0) {
            setPage(page - 1);
        }
    }
    let key = 0;
    return (
        <div className="container-fluid">

            <Title title={'권한 관리'} />

            <div className="admin">
                <div className='button'>
                    <button type="button" className='btn btn-primary'>저장</button>
                    <button type="button" className='btn btn-primary' onClick={resetAuthority}>취소</button>
                    <button type="button" className='btn btn-primary' onClick={onClickDeleteBtn}>삭제</button>
                </div>

                <table className="admin-table" width="90%">
                    <thead>
                        <tr >
                            <th></th>
                            <th>권한</th>
                            <th>프로젝트</th>
                            <th>백로그</th>
                            <th>스프린트</th>
                            <th>이슈</th>
                        </tr>
                    </thead>
                    <tbody>
                        {authorityList.map(authority =>
                            (authorityList.indexOf(authority) >= 6 * (page - 1) && authorityList.indexOf(authority) < 6 * page) &&
                            <tr key={authority.no}>
                                <td>
                                    <input
                                        type="checkbox"
                                        name="delete"
                                        id={authority.no}
                                        value={authority.no}
                                        onClick={e => onDeleteAuthorityChecked(e.target.value, e.target.checked)}
                                    />
                                </td>
                                <td>
                                    {update === authority.no || authority.name === '' ?
                                        <input
                                            type='text'
                                            value={value}
                                            onChange={e => setValue(e.target.value)}
                                            onKeyDown={(e) => updateKeyDown(e, authority)}
                                        />
                                        :
                                        <span onClick={(e) => handleClick(authority.no, e)}>{authority.name}</span>
                                    }
                                </td>
                                {authority.auth.map(auth => (
                                    <td key={key++}>
                                        <input type="checkbox" value="c" defaultChecked={auth.state[0] === "c"} />
                                        <label>C</label>
                                        <input type="checkbox" value="r" defaultChecked={auth.state[1] === "r"} />
                                        <label>R</label>
                                        <input type="checkbox" value="u" defaultChecked={auth.state[2] === "u"} />
                                        <label>U</label>
                                        <input type="checkbox" value="d" defaultChecked={auth.state[3] === "d"} />
                                        <label>D</label>
                                    </td>
                                ))}
                            </tr>
                        )}
                        {update == null &&
                            <tr>
                                <td></td>
                                <td><button type="button" className='btn-sm btn-primary' onClick={createAuthority}>등록</button></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
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