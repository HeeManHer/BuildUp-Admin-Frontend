function DashboardCard({ category }) {

    let card_style = 'card shadow h-100 py-2';
    let text_style = 'text-lg font-weight-bold text-uppercase mb-1';

    switch (category) {
        case '백로그':
            card_style += ' border-left-primary';
            text_style += ' text-primary';
            break;
        case '이슈':
            card_style += ' border-left-success';
            text_style += ' text-success';
            break;
        case '스프린트':
            card_style += ' border-left-info';
            text_style += ' text-info';
            break;
    }

    return (
        <div className="col-xl-3 col-md-6 mb-4">
            <div className={card_style}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={text_style}>
                                <table width="100%">
                                    <thead>
                                        <tr className="text-center">
                                            <th colSpan="2">{category} 현황</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>진행중인 {category}</td>
                                            <td>20</td>
                                        </tr>
                                        <tr>
                                            <td>완료된 {category}</td>
                                            <td>20</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardCard;