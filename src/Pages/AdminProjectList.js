import ProjectList from './ProjectList.json';

function AdminProjectList() {

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
                    <th>팀명</th>
                    <th>프로젝트 명</th>
                    <th>담당자</th>
                    <th>프로젝트 시작일</th>
                </tr>
                {
                    ProjectList.map(project =>

                        <tr>
                            <td>{project.teamName}</td>
                            <td>{project.projectName}</td>
                            <td>{project.manager}</td>
                            <td>{project.startDate}</td>
                        </tr>
                    )
                }
            </table>
        </div>
    );
}

export default AdminProjectList;