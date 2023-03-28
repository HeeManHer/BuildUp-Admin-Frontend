import AuthorityList from './AuthorityList.json'

function AdminAuthorityList() {

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

            </div>
            <table border="1" width="90%">
                <tr >
                    <th><button>삭제</button></th>
                    <th>권한</th>
                    <th>프로젝트</th>
                    <th>백로그</th>
                    <th>이슈</th>
                    <th>스프린트</th>
                </tr>
                {AuthorityList.map(Authority =>
                    <tr>
                        <td><input type="checkbox" /></td>
                        <td>{Authority.name}</td>
                        <td>
                            <input type="checkbox" name="project" value="projectC" checked={Authority.project.c} />
                            <label>C</label>
                            <input type="checkbox" name="project" value="projectR" checked={Authority.project.r} />
                            <label>R</label>
                            <input type="checkbox" name="project" value="projectU" checked={Authority.project.u} />
                            <label>U</label>
                            <input type="checkbox" name="project" value="projectD" checked={Authority.project.d} />
                            <label>D</label>
                        </td>
                        <td>
                            <input type="checkbox" name="backlog" value="backlogC" checked={Authority.backlog.c} />
                            <label>C</label>
                            <input type="checkbox" name="backlog" value="backlogR" checked={Authority.backlog.r} />
                            <label>R</label>
                            <input type="checkbox" name="backlog" value="backlogU" checked={Authority.backlog.u} />
                            <label>U</label>
                            <input type="checkbox" name="backlog" value="backlogD" checked={Authority.backlog.d} />
                            <label>D</label>
                        </td>
                        <td>
                            <input type="checkbox" name="sprint" value="sprintC" checked={Authority.sprint.c} />
                            <label>C</label>
                            <input type="checkbox" name="sprint" value="sprintR" checked={Authority.sprint.r} />
                            <label>R</label>
                            <input type="checkbox" name="sprint" value="sprintU" checked={Authority.sprint.u} />
                            <label>U</label>
                            <input type="checkbox" name="sprint" value="sprintD" checked={Authority.sprint.d} />
                            <label>D</label>
                        </td>
                        <td>
                            <input type="checkbox" name="issue" value="issueC" checked={Authority.sprint.c} />
                            <label>C</label>
                            <input type="checkbox" name="issue" value="issueR" checked={Authority.sprint.r} />
                            <label>R</label>
                            <input type="checkbox" name="issue" value="issueU" checked={Authority.sprint.u} />
                            <label>U</label>
                            <input type="checkbox" name="issue" value="issueD" checked={Authority.sprint.d} />
                            <label>D</label>
                        </td>
                    </tr>
                )}
                <tr>
                    <td></td>
                    <td><button >+</button></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
    );
}

export default AdminAuthorityList;