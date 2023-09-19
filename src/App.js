import './App.css';
// Câu lệnh import để file liên kết với các function của file được export
import MyComponent from './lesson/components/MyComponent'
// import Session02Component from './lesson/components/Session02Component'
import Home from './lesson/components/home';
import StudentManage from './lesson/components/student-management/StudentManage'
import NavBar from './lesson/components/navbar';
import Users from './lesson/components/users-management/Users';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App () {
  return (
    <div>
      <BrowserRouter basename="/">
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<StudentManage />} />
          <Route path="/my" element={<MyComponent />} />
          <Route path="/user" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </div>



  );
}
export default App;
