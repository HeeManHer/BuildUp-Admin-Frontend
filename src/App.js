import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";

import AdminAuthorityList from "./Pages/AdminAuthorityList";
import AdminDashBoard from "./Pages/AdminDashBoard";
import AdminProjectList from "./Pages/AdminProjectList";
import AdminUserList from "./Pages/AdminUserList";
import UserCreate from "./components/items/UserCreate";
import UserInfo from "./components/items/UserInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<AdminDashBoard />} />
          <Route path="projectlist" element={<AdminProjectList />} />
          <Route path="userlist">
            <Route index element={<AdminUserList />} />
            <Route path="create" element={<UserCreate />} />
            <Route path=":userNo" element={<UserInfo />} />
          </Route>
          <Route path="authority" element={<AdminAuthorityList />} />
        </Route>
      </Routes>
    </BrowserRouter >

  );
}

export default App;
