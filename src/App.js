import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";

import AdminAuthorityList from "./Pages/AdminAuthorityList";
import AdminDashBoard from "./Pages/AdminDashBoard";
import AdminProjectList from "./Pages/AdminProjectList";
import AdminUserList from "./Pages/AdminUserList";
import Create from "./Pages/Create";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<AdminDashBoard />} />
          <Route path="projectlist" element={<AdminProjectList />} />
          <Route path="userlist">
            <Route index element={<AdminUserList />} />
            <Route path="create" element={<Create />} />
          </Route>
          <Route path="authority" element={<AdminAuthorityList />} />
        </Route>
      </Routes>
    </BrowserRouter >

  );
}

export default App;
