import { Navbar } from 'react-bootstrap';
import './App.css';
// Câu lệnh import để file liên kết với các function của file được export
// import MyComponent from './lesson/components/MyComponent'
// import Session02Component from './lesson/components/Session02Component'
// import Welcome  from './lesson/components/WelcomeFN';
import StudentManage from './lesson/components/student-management/StudentManage'
import NavBar from './lesson/components/navbar';
function App() {
  return (
    <div className="App">
       {/* <MyComponent name="Nguyen Van D"></MyComponent>

       <Session02Component></Session02Component>
       <Welcome name ='the world' address ='DA NANG'> </Welcome> */}
       {/* <Welcome2 name ='the world' address ='DA NANG'> </Welcome2>
        */}
        <NavBar></NavBar>
        <StudentManage></StudentManage>
    </div>
  );
}
export default App;
