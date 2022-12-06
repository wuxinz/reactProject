// 根组件

import { BrowserRouter, Route, Routes, Navigate  } from 'react-router-dom'
import Home from './pages/home';
import Login from './pages/login';
import ErrorPage from './pages/errorPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 首页 */}
        <Route exact path="/home" element={<Home />}></Route>
        
        {/* 登陆页 */}
        <Route exact path="/login" element={<Login />}></Route>

        {/* 404页面 */}
        <Route exact path="/errorPage" element={<ErrorPage />}></Route>

        {/* 匹配不到的直接重定向404页面 */}
        <Route path="*" element={<Navigate to="/errorPage" />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
