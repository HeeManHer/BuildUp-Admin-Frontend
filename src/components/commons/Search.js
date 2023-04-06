import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserList, searchUserList } from '../../apis/UserListAPI';
import { setProjectList, searchProject } from '../../apis/ProjectListAPI';

function Search({ category }) {

    const dispatch = useDispatch();

    const [searchValue, setSearchValue] = useState('');

    const onSearchUsers = () => {
        switch (category) {
            case "user":
                dispatch(setUserList());
                dispatch(searchUserList(searchValue));
                break;
            case "project":
                dispatch(setProjectList());
                dispatch(searchProject(searchValue));
                break;
        }
    }

    return (
        <form className="shadow-sm d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div className="input-group">
                <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                    value={searchValue} onChange={e => setSearchValue(e.target.value)} />
                <div className="input-group-append">
                    <button className="btn btn-primary" type="button" onClick={onSearchUsers}>
                        <i className="fas fa-search fa-sm"></i>
                    </button>
                </div>
            </div>
        </form>
    );
}

export default Search;