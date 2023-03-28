import userList from './User.json'

function AdminUserList() {

    const table = {
        display: 'flex',
        justifyContent: 'start',
        flexDirection: 'column',
        alignItems: 'start',
        marginLeft: 50,
        marginTop: 50,
        width: '100%',
        height: '400px',
        textAlign: 'center'
    }

    return (
        <div style={table}>
            <div>
                <label>검색 : </label>
                <input type="text" />
            </div>
            <table border="1" width="90%">
                <tr >
                    <th>이름</th>
                    <th>사번</th>
                    <th>이메일</th>
                    <th>권한</th>
                </tr>
                {userList.map(user =>
                    <tr>
                        <td>{user.name}</td>
                        <td>{user.no}</td>
                        <td>{user.email}</td>
                        <td>{user.authority}</td>
                    </tr>
                )}
            </table>
        </div>
    );
}

export default AdminUserList;