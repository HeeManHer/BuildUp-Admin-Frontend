import AdminAuthorityList from "./AdminAuthorityList";
import AdminDashBoard from "./AdminDashBoard";
import AdminProjectList from "./AdminProjectList";
import AdminUserList from "./AdminUserList";

function Main() {

    return (
        <>
            <AdminDashBoard />
            <AdminProjectList />
            <AdminUserList />
            <AdminAuthorityList />
        </>
    );
}
export default Main;