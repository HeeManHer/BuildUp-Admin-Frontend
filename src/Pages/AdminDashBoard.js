function AdminDashBoard() {

    const dashboard = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '50%',
        height: '90%',
        marginLeft: '10px'
    }

    const table = {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        height: '150px',
        textAlign: 'center'
    }

    const item = {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        height: '70%'
    }


    return (
        <div style={item}>
            <div style={dashboard}>
                <div style={table}>
                    <table border="1" width="30%">
                        <tr >
                            <th colspan="2">스프린트 현황</th>
                        </tr>
                        <tr >
                            <td>진행 중 스프린트</td>
                            <td>20</td>
                        </tr>
                        <tr >
                            <td>완료된 스프린트</td>
                            <td>100</td>
                        </tr>
                    </table>
                    <table border="1" width="30%">
                        <tr >
                            <th colspan="2">스프린트 현황</th>
                        </tr>
                        <tr >
                            <td>진행 중 이슈</td>
                            <td>30</td>
                        </tr>
                        <tr >
                            <td>완료된 이슈</td>
                            <td>78</td>
                        </tr>
                    </table>
                    <table border="1" width="30%">
                        <tr >
                            <th colspan="2">스프린트 현황</th>
                        </tr>
                        <tr >
                            <td>진행 중 백로그</td>
                            <td>20</td>
                        </tr>
                        <tr >
                            <td>완료된 백로그</td>
                            <td>100</td>
                        </tr>
                    </table>
                </div>
                <div>최근 추가된 프로젝트</div>
                <div style={table}>
                    <table border="1" width='100%'>
                        <tr>
                            <th>프로젝트 명</th>
                            <th>시작일</th>
                        </tr>
                        <tr>
                            <td>워밍업</td>
                            <td>2023/03/23</td>
                        </tr>
                        <tr>
                            <td>워밍업</td>
                            <td>2023/03/23</td>
                        </tr>
                        <tr>
                            <td>워밍업</td>
                            <td>2023/03/23</td>
                        </tr>
                    </table>
                </div>
            </div >
            <div>
                <div>차트영역</div>

            </div>
        </div>
    )

}

export default AdminDashBoard;