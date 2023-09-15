import './App.css';
// Câu lệnh import để file liên kết với các function của file được export
import MyComponent from './lesson/components/MyComponent'
// import Session02Component from './lesson/components/Session02Component'
import Welcome from './lesson/components/WelcomeFN';
import StudentManage from './lesson/components/student-management/StudentManage'
import NavBar from './lesson/components/navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App () {
  return (


<div>
<NavBar></NavBar>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<StudentManage />} />
        <Route path="/my" element={<Welcome />} />
      </Routes>


    </BrowserRouter>
</div>



  );
}
export default App;
