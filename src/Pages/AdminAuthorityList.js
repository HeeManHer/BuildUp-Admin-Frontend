import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../css/admin.css';

import { setAuthorityList, createAuthorityList, saveAuthorityList, deleteAuthorityList } from '../apis/AuthorityListAPI';
import Title from '../components/commons/Title';


function AdminAuthorityList() {

    const [deleteAuthority, setDeleteAuthority] = useState([]);
    const [value, setValue] = useState('');
    const [update, setUpdate] = useState(null);

    const authorityList = useSelector(state => state.authorityReducer)

    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(setAuthorityList());
        },
        []
    )

    const createAuthority = () => {
        dispatch(createAuthorityList(authorityList.length + 1));
    };

    const resetAuthority = () => {
        dispatch(setAuthorityList());
    }

    const updateKeyDown = (no, event) => {
        if (event.key !== 'Enter') return;

        const newList = [...props.list];
        newList[no].content = value;

        setUpdate(null);
        props.updateList(newList);
    };

    const saveAuthority = () => {
        dispatch(saveAuthorityList());
    }

    const handleClick = (index, event) => {
        setValue(event.target.innerHTML);
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

    let key = 0;
    return (
        <div className="container-fluid">

            <Title title={'권한 관리'} />

            <div className="admin">
                <div className='button'>
                    <button type="button" className='btn btn-success' onClick={saveAuthority}>저장</button>
                    <button type="button" className='btn btn-warning' onClick={resetAuthority}>취소</button>
                    <button type="button" className='btn btn-danger' onClick={onClickDeleteBtn}>삭제</button>
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
                                    {update === authority.no ?
                                        <span onClick={(event) => handleClick(key, event)}>{authority.name}</span>
                                        :
                                        <input
                                            type='text'
                                            value={value}
                                            onChange={e => setValue(e.target.value)}
                                            onKeyDown={(e) => updateKeyDown(key, e)}
                                        />}
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
                        <tr>
                            <td></td>
                            <td><button type="button" className='btn-sm btn-primary' onClick={createAuthority}>등록</button></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminAuthorityList;